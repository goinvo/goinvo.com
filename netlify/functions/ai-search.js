const OpenAI = require('openai');
// CORS helper
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
}
const jsonResponse = (statusCode, obj) => ({ statusCode, headers: CORS_HEADERS, body: JSON.stringify(obj || {}) })

// In-memory cache for preset queries
const presetCache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// Much stricter rate limiting configuration
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 requests per minute per IP
const DAILY_LIMIT_PER_IP = 50; // Max 50 requests per day per IP
const dailyUsage = new Map();

// Environment flags
const HAS_OPENAI_KEY = !!process.env.OPENAI_API_KEY
const IS_NETLIFY_PREVIEW = (process.env.CONTEXT === 'deploy-preview') || (!!process.env.DEPLOY_PRIME_URL && String(process.env.DEPLOY_PRIME_URL).includes('deploy-preview'))

// Initialize OpenAI client lazily/safely
const openai = HAS_OPENAI_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null

// Preset buyer personas with optimized prompts
const BUYER_PERSONAS = {
  'healthcare_executive': {
    name: 'Healthcare Executive',
    context: 'You are evaluating digital health solutions for a large hospital system. Focus on ROI, compliance, integration with existing systems, and patient outcomes.',
    keywords: ['healthcare', 'medical', 'clinical', 'patient', 'hospital', 'ehr', 'compliance', 'hipaa']
  },
  'product_manager': {
    name: 'Product Manager',
    context: 'You are looking for UX/UI design inspiration and best practices for health tech products. Focus on user experience, design patterns, and product strategy.',
    keywords: ['design', 'ui', 'ux', 'interface', 'user experience', 'product', 'feature', 'dashboard']
  },
  'researcher': {
    name: 'Clinical Researcher',
    context: 'You are searching for innovative research tools and data management platforms. Focus on data quality, research protocols, and participant engagement.',
    keywords: ['research', 'data', 'clinical trial', 'study', 'participant', 'consent', 'analytics']
  },
  'government_official': {
    name: 'Government Official',
    context: 'You are evaluating civic technology solutions for public sector modernization. Focus on citizen engagement, accessibility, and public value.',
    keywords: ['government', 'civic', 'public', 'citizen', 'municipal', 'federal', 'policy']
  },
  'startup_founder': {
    name: 'Startup Founder',
    context: 'You are looking for proven design patterns and technical solutions to accelerate your health tech startup. Focus on scalability, innovation, and market fit.',
    keywords: ['startup', 'innovation', 'mvp', 'scale', 'growth', 'technology', 'platform', 'ai', 'ml']
  }
};

// Auto-detect persona based on query
async function detectPersona(query) {
  const queryLower = query.toLowerCase();
  
  // Simple keyword-based detection first (fast and free)
  let bestMatch = 'product_manager'; // Default
  let bestScore = 0;
  
  for (const [persona, config] of Object.entries(BUYER_PERSONAS)) {
    let score = 0;
    for (const keyword of config.keywords) {
      if (queryLower.includes(keyword)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = persona;
    }
  }
  
  // If we have a clear match, use it (skip expensive GPT call)
  if (bestScore >= 1) { // Lowered threshold from 2 to 1
    return bestMatch;
  }
  
  // Skip OpenAI call in previews or when missing key
  if (IS_NETLIFY_PREVIEW || !HAS_OPENAI_KEY || !openai) {
    return bestMatch;
  }

  try {
    const response = await withTimeout(openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content: `Determine which buyer persona best matches this search query. Choose ONLY from these options:
- healthcare_executive: Hospital administrators looking for compliance, ROI, integration
- product_manager: UX/UI designers seeking design patterns and best practices
- researcher: Clinical researchers needing data tools and research platforms
- government_official: Public sector officials seeking civic technology
- startup_founder: Entrepreneurs looking for scalable health tech solutions

Respond with ONLY the persona key (e.g., "healthcare_executive").`
        },
        {
          role: 'user',
          content: query
        }
      ],
      temperature: 0.1, // Lower temperature for more deterministic results
      max_tokens: 15 // Reduced from 20
    }), 8000, 'persona-detect-timeout')
    
    const detectedPersona = response.choices[0].message.content.trim().toLowerCase();
    if (BUYER_PERSONAS[detectedPersona]) {
      return detectedPersona;
    }
  } catch (error) {
    console.error('Persona detection error:', error);
  }
  
  return bestMatch;
}

// Enhanced rate limiting with daily limits
function checkRateLimit(ip) {
  const now = Date.now();
  const today = new Date().toDateString();
  
  // Check daily limit
  const dailyKey = `${ip}:${today}`;
  const dailyCount = dailyUsage.get(dailyKey) || 0;
  
  if (dailyCount >= DAILY_LIMIT_PER_IP) {
    return { allowed: false, reason: 'Daily limit exceeded' };
  }
  
  // Check per-minute limit
  const userRequests = rateLimiter.get(ip) || [];
  const validRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (validRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, reason: 'Rate limit exceeded' };
  }
  
  // Update counters
  validRequests.push(now);
  rateLimiter.set(ip, validRequests);
  dailyUsage.set(dailyKey, dailyCount + 1);
  
  return { allowed: true };
}

// Get or generate cached response for preset
async function getCachedPresetResponse(presetKey, query, projects) {
  const cacheKey = `${presetKey}:${query}`;
  
  // Check in-memory cache first
  const cached = presetCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  
  // Generate new response
  const persona = BUYER_PERSONAS[presetKey];
  if (!persona) {
    throw new Error('Invalid preset');
  }
  
  const response = await generateAIResponse(query, projects, persona.context);
  
  // Cache the response
  presetCache.set(cacheKey, {
    timestamp: Date.now(),
    data: response
  });
  
  return response;
}

// Promise timeout helper
function withTimeout(promise, ms, label) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label || 'timeout'} after ${ms}ms`)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer))
}

// Generate AI response using OpenAI — returns JSON with per-project relevance flag
async function generateAIResponse(query, projects, personaContext) {
  // Take top 4 projects to generate descriptions for
  const topProjects = projects.slice(0, 4);
  
  const systemPrompt = `You are an AI assistant helping users find relevant case studies. ${personaContext}

CRITICAL: Only describe what is explicitly mentioned in the project data. Do NOT infer, assume, or add technologies, methods, or capabilities that are not specifically stated in the title, caption, or categories.

Your task is to write a compelling 2-3 sentence description for each project explaining why it's relevant to the user's search query and needs. Focus on the value proposition for the specific persona. If a project is not relevant to the query, set its relevant flag to false and provide an empty description string.

Guidelines:
- ONLY highlight positive connections and relevance - never mention what projects lack or don't have
- Only mention technologies/methods that are explicitly listed in the project data
- If specific technical details aren't provided, focus on the general problem/solution fit and design insights
- Focus on what the project DOES offer and how it connects to the user's needs
- Never use phrases like "does not mention", "lacks", "doesn't include", "less relevant", or similar negative language
- Base your relevance explanation on the problem space, user needs, and design patterns that ARE present
- If a project doesn't directly match, find the most relevant aspect that IS present and focus on that value

Writing Style Instructions:
- Use simple language: Write plainly with short sentences.
  Example: "I need help with this issue."
- Avoid AI-giveaway phrases: Don't use clichés like "dive into," "unleash your potential," etc.
  Avoid: "Let's dive into this game-changing solution."
  Use instead: "Here's how it works."
- Be direct and concise: Get to the point; remove unnecessary words.
  Example: "We should meet tomorrow."
- Maintain a natural tone: Write as you normally speak; it's okay to start sentences with "and" or "but."
  Example: "And that's why it matters."
- Avoid marketing language: Don't use hype or promotional words.
  Avoid: "This revolutionary product will transform your life."
  Use instead: "This product can help you."
- Keep it real: Be honest; don't force friendliness.
  Example: "I don't think that's the best idea."
- Simplify grammar: Don't stress about perfect grammar; it's fine not to capitalize "i" if that's your style.
  Example: "i guess we can try that."
- Stay away from fluff: Avoid unnecessary adjectives and adverbs.
  Example: "We finished the task."
- Focus on clarity: Make your message easy to understand.
  Example: "Please send the file by Monday."

STRONG WRITING REQUIREMENTS (for convincing buyers):
- Lead with a concrete outcome or metric if present (e.g., adoption, speed, accuracy, user reach).
- Name the buyer-relevant artifact we delivered (e.g., clinician dashboard, consent workflow, research repository, ROI model).
- Mention the buyer context using the provided 'client' field when available to add credibility.
- Use 1 buyer-specific benefit relevant to the persona (e.g., "cuts review time for payers", "reduces clinician clicks", "improves data quality for researchers").
- Keep 2-3 sentences total; avoid generic words like "innovative", "powerful", "solution".
`;

  const userPrompt = `Search query: "${query}"

Projects to describe (ONLY use information provided below - do not add details not explicitly mentioned). Each project object may include: slug, title, caption, client, categories, keywords, score.
${JSON.stringify(topProjects, null, 2)}

For each project, provide a description that:
1. Connects the project to the search query based on ONLY what's explicitly described
2. Highlights relevance to the persona's specific needs
3. Emphasizes the value or insights they could gain, ideally with a concrete artifact or measurable impact if present in the data
4. Does NOT mention technologies or methods not explicitly listed in the project data
5. If no clear, explicit connection exists, mark the project as not relevant (relevant=false) and set description to an empty string

Format your response as JSON:
{
  "projectDescriptions": [
    {
      "slug": "project-slug",
      "description": "Why this project is relevant to the search query and persona needs (using only explicit information provided). Start with outcome or artifact when available; keep it specific and concrete.",
      "relevant": true
    }
  ],
  "searchInsight": "Brief insight about what the user is looking for"
}`;

  // Skip OpenAI call in previews or when missing key
  if (IS_NETLIFY_PREVIEW || !HAS_OPENAI_KEY || !openai) {
    return { projectDescriptions: [], searchInsight: null }
  }

  try {
    const response = await withTimeout(openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.2, // Reduced from 0.3 for more consistent responses
      max_tokens: 600, // Reduced from 800
      response_format: { type: "json_object" }
    }), 9000, 'ai-search-timeout')
    
    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate AI response');
  }
}

// Netlify Function handler
exports.handler = async (event, context) => {
  // Preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' })
  }
  
  // Parse request body early
  let parsed = {}
  try { parsed = JSON.parse(event.body || '{}') } catch (_) {}

  const { query, projects, preset, useAI, autoDetectPersona } = parsed;

  // If previews or missing API key, short-circuit with non-AI response to avoid 502s
  if (IS_NETLIFY_PREVIEW || !HAS_OPENAI_KEY || !openai) {
    // Validate input shape minimally
    if (!query || !projects || !Array.isArray(projects)) {
      return jsonResponse(200, { results: [], aiGenerated: false })
    }
    // Return projects as-is; client will display without AI descriptions
    return jsonResponse(200, { results: projects, aiGenerated: false, disabled: IS_NETLIFY_PREVIEW ? 'preview' : 'no-api-key' })
  }

  // Get client IP for rate limiting
  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';
  
  // Check enhanced rate limit
  const rateLimitResult = checkRateLimit(ip);
  if (!rateLimitResult.allowed) {
    return jsonResponse(429, { 
      error: `${rateLimitResult.reason}. Current limits: ${MAX_REQUESTS_PER_WINDOW} per minute, ${DAILY_LIMIT_PER_IP} per day.`
    })
  }
  
  try {
    
    // Validate input
    if (!query || !projects || !Array.isArray(projects)) {
      return jsonResponse(400, { error: 'Invalid request data' })
    }
    
    // If not using AI, just return the projects as-is
    if (!useAI) {
      return jsonResponse(200, { results: projects, aiGenerated: false })
    }
    
    let selectedPersona = preset;
    
    // Auto-detect persona if requested
    if (autoDetectPersona || !preset) {
      selectedPersona = await detectPersona(query);
    }
    
    let aiResponse;
    
    // Use preset cache if available
    if (selectedPersona && BUYER_PERSONAS[selectedPersona]) {
      aiResponse = await getCachedPresetResponse(selectedPersona, query, projects);
    } else {
      // Custom query with default context
      aiResponse = await generateAIResponse(
        query, 
        projects,
        'You are helping users find relevant design case studies. Focus on innovation, design quality, and practical applications.'
      );
    }
    
    // Enhance top 4 projects with AI descriptions
    const enhancedResults = projects.map((project, index) => {
      const aiData = aiResponse.projectDescriptions?.find(p => p.slug === project.slug);
      const isRelevant = aiData && (typeof aiData.relevant === 'boolean' ? aiData.relevant : true)
      return {
        ...project,
        aiDescription: isRelevant && aiData ? aiData.description : null,
        aiRelevant: isRelevant,
        // First 4 get AI descriptions and priority
        aiEnhanced: index < 4 && !!aiData && isRelevant
      };
    });
    
    // Filter out projects marked not relevant when AI is enabled
    const filteredResults = enhancedResults.filter(r => r.aiRelevant !== false)

    return jsonResponse(200, {
      results: filteredResults,
      aiGenerated: true,
      searchInsight: aiResponse.searchInsight,
      detectedPersona: selectedPersona,
      preset: selectedPersona
    })
    
  } catch (error) {
    console.error('AI search error:', error);
    return jsonResponse(500, { error: 'Failed to process AI search', aiGenerated: false })
  }
}; 