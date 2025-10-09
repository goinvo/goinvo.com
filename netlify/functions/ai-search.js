const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

// CORS helper
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
}
const jsonResponse = (statusCode, obj) => ({ statusCode, headers: CORS_HEADERS, body: JSON.stringify(obj || {}) })

// Load project summaries (pre-generated detailed summaries of each project)
let PROJECT_SUMMARIES = {};
try {
  // Try multiple paths to support both dev (netlify dev) and production
  const possiblePaths = [
    path.join(__dirname, '..', '..', 'src', 'data', 'project-summaries.json'), // Production
    path.join(__dirname, '..', '..', '..', '..', '..', 'src', 'data', 'project-summaries.json'), // Netlify dev (bundled)
    path.join(process.cwd(), 'src', 'data', 'project-summaries.json'), // Working directory fallback
  ];
  
  let summariesPath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      summariesPath = p;
      break;
    }
  }
  
  if (summariesPath) {
    PROJECT_SUMMARIES = JSON.parse(fs.readFileSync(summariesPath, 'utf-8'));
    console.log(`✅ Loaded ${Object.keys(PROJECT_SUMMARIES).length} project summaries from ${summariesPath}`);
  } else {
    console.warn('⚠️  No project-summaries.json found. Run npm run generate-summaries to create it.');
    console.warn('    Tried paths:', possiblePaths);
  }
} catch (error) {
  console.warn('⚠️  Could not load project summaries:', error.message);
}

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
// const ALLOW_AI_IN_PREVIEWS = (String(process.env.ALLOW_AI_IN_PREVIEWS || '').toLowerCase() === 'true') || (process.env.ALLOW_AI_IN_PREVIEWS === '1')
const ALLOW_AI_IN_PREVIEWS = true

// Initialize OpenAI client lazily/safely
const openai = HAS_OPENAI_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null

// Verify OpenAI connection on startup (best effort, non-blocking)
if (openai) {
  (async () => {
    try {
      console.log('🔍 Testing OpenAI API connection...');
      const testResponse = await openai.chat.completions.create({
        model: 'gpt-4.1-nano',
        messages: [{ role: 'user', content: 'test' }],
        max_completion_tokens: 5,
      });
      console.log('✅ OpenAI API connection successful');
    } catch (error) {
      console.error('⚠️ OpenAI API connection test failed:', error.message);
      if (error.status) console.error('   Status:', error.status);
      if (error.code) console.error('   Code:', error.code);
    }
  })();
}

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

// Template-based description generator using structured data
function generateTemplateDescription(project, category) {
  const data = PROJECT_SUMMARIES[project.slug];
  if (!data) return project.caption || '';
  
  const parts = [];
  
  // Add key metrics if available
  if (data.keyMetrics && data.keyMetrics.length > 0) {
    parts.push(data.keyMetrics.slice(0, 2).join(', '));
  }
  
  // Add solution with deliverables
  if (data.solutionStatement) {
    parts.push(data.solutionStatement);
  } else if (data.deliverables && data.deliverables.length > 0) {
    parts.push(`Delivered ${data.deliverables.slice(0, 2).join(' and ')}.`);
  }
  
  // Add business value or problem context
  if (data.businessValue) {
    parts.push(data.businessValue);
  } else if (data.problemStatement) {
    parts.push(data.problemStatement);
  }
  
  return parts.join(' ').trim() || project.caption || '';
}

// Category-based search insights
const CATEGORY_INSIGHTS = {
  'enterprise': 'Enterprise solutions that scale with your organization',
  'healthcare': 'Healthcare solutions that improve patient outcomes and clinical workflows',
  'government': 'Civic technology solutions that serve the public good',
  'ai': 'AI-powered solutions that leverage machine learning and natural language processing'
};

// Category filters for "Design for X" queries (uses templates instead of hardcoded descriptions)
const DESIGN_FOR_CATEGORIES = {
  'Design for Enterprise': {
    keywords: ['enterprise', 'business', 'corporate', 'saas', 'platform', 'analytics', 'dashboard'],
    insight: 'Enterprise solutions that scale with your organization'
  },
  'Design for Healthcare': {
    keywords: ['healthcare', 'medical', 'clinical', 'patient', 'hospital', 'ehr', 'emr', 'health'],
    insight: 'Healthcare solutions that improve patient outcomes and clinical workflows'
  },
  'Design for Government': {
    keywords: ['government', 'civic', 'public', 'citizen', 'municipal', 'federal', 'state', 'policy'],
    insight: 'Civic technology solutions that serve the public good'
  },
  'Design for AI': {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'llm', 'nlp', 'gpt', 'neural', 'algorithm'],
    insight: 'AI-powered solutions that leverage machine learning and natural language processing'
  }
};

// Old hardcoded presets (to be removed) - keeping for reference during transition
const OLD_DESIGN_FOR_PRESETS = {
  'Design for Enterprise': {
    searchInsight: 'Enterprise solutions that scale with your organization',
    projectDescriptions: [
      {
        slug: 'inspired-ehrs',
        description: 'Enterprise EHR platform designed for large healthcare systems, featuring advanced analytics and seamless integration capabilities.',
        relevant: true
      },
      {
        slug: 'ipsos-facto',
        description: 'AI-powered research intelligence platform built for enterprise-scale data analysis and decision making.',
        relevant: true
      },
      {
        slug: 'prior-auth',
        description: 'Enterprise prior authorization system that streamlines complex approval workflows for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'precision-autism',
        description: 'Precision medicine platform designed for enterprise clinical workflows and large-scale patient management.',
        relevant: true
      },
      {
        slug: 'maya-ehr',
        description: 'Enterprise-grade EHR system with comprehensive patient management and clinical workflow optimization.',
        relevant: true
      },
      {
        slug: 'partners-geneinsight',
        description: 'Enterprise genomics platform that integrates with large healthcare systems for precision medicine workflows.',
        relevant: true
      },
      {
        slug: 'partners-insight',
        description: 'Enterprise analytics platform providing comprehensive insights for large healthcare organizations.',
        relevant: true
      },
      {
        slug: '3m-coderyte',
        description: 'Enterprise coding platform designed for large healthcare systems to improve clinical documentation accuracy.',
        relevant: true
      },
      {
        slug: 'ahrq-cds',
        description: 'Enterprise clinical decision support system for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'all-of-us',
        description: 'Enterprise-scale research platform designed for large-scale health data collection and analysis.',
        relevant: true
      },
      {
        slug: 'care-cards',
        description: 'Enterprise patient engagement platform for large healthcare systems.',
        relevant: true
      },
      {
        slug: 'commonhealth-smart-health-cards',
        description: 'Enterprise digital health credential system for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'fastercures-health-data-basics',
        description: 'Enterprise health data education platform for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'hgraph',
        description: 'Enterprise health data visualization platform for large healthcare systems.',
        relevant: true
      },
      {
        slug: 'infobionic-heart-monitoring',
        description: 'Enterprise cardiac monitoring platform for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'insidetracker-nutrition-science',
        description: 'Enterprise nutrition analytics platform for large healthcare systems.',
        relevant: true
      },
      {
        slug: 'mitre-flux-notes',
        description: 'Enterprise clinical note analysis system for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'mitre-shr',
        description: 'Enterprise shared health record system for large healthcare networks.',
        relevant: true
      },
      {
        slug: 'mitre-state-of-us-healthcare',
        description: 'Enterprise healthcare analytics platform for large organizations.',
        relevant: true
      },
      {
        slug: 'mount-sinai-consent',
        description: 'Enterprise consent management system for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'paintrackr',
        description: 'Enterprise pain management platform for large healthcare systems.',
        relevant: true
      },
      {
        slug: 'personal-genome-project-vision',
        description: 'Enterprise genomics research platform for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'staffplan',
        description: 'Enterprise workforce management platform for large healthcare organizations.',
        relevant: true
      },
      {
        slug: 'tabeeb-diagnostics',
        description: 'Enterprise diagnostic platform for large healthcare systems.',
        relevant: true
      },
      {
        slug: 'wuxi-nextcode-familycode',
        description: 'Enterprise genomics platform for large healthcare organizations.',
        relevant: true
      }
    ]
  },
  'Design for Healthcare': {
    searchInsight: 'Healthcare solutions that improve patient outcomes and clinical workflows',
    projectDescriptions: [
      {
        slug: 'inspired-ehrs',
        description: 'Comprehensive EHR system designed specifically for healthcare providers, improving clinical documentation and patient care coordination.',
        relevant: true
      },
      {
        slug: 'prior-auth',
        description: 'Prior authorization platform that reduces administrative burden for healthcare providers while ensuring proper coverage.',
        relevant: true
      },
      {
        slug: 'precision-autism',
        description: 'Precision medicine platform for autism care, enabling personalized treatment approaches based on genetic and clinical data.',
        relevant: true
      },
      {
        slug: 'maya-ehr',
        description: 'Modern EHR system designed for healthcare providers, featuring intuitive interfaces and comprehensive patient management tools.',
        relevant: true
      },
      {
        slug: 'partners-geneinsight',
        description: 'Genomics platform designed for healthcare providers to deliver personalized medicine based on genetic data.',
        relevant: true
      },
      {
        slug: 'partners-insight',
        description: 'Healthcare analytics platform that helps providers make data-driven clinical decisions.',
        relevant: true
      },
      {
        slug: '3m-coderyte',
        description: 'Clinical coding platform that helps healthcare providers improve documentation accuracy and compliance.',
        relevant: true
      },
      {
        slug: 'ahrq-cds',
        description: 'Clinical decision support system that helps healthcare providers make evidence-based treatment decisions.',
        relevant: true
      },
      {
        slug: 'all-of-us',
        description: 'Research platform that enables healthcare providers to contribute to and benefit from large-scale health research.',
        relevant: true
      },
      {
        slug: 'care-cards',
        description: 'Patient engagement platform that helps healthcare providers improve patient communication and care coordination.',
        relevant: true
      },
      {
        slug: 'commonhealth-smart-health-cards',
        description: 'Digital health credential system that helps healthcare providers verify patient information securely.',
        relevant: true
      },
      {
        slug: 'fastercures-health-data-basics',
        description: 'Educational platform that helps healthcare providers understand and utilize health data effectively.',
        relevant: true
      },
      {
        slug: 'hgraph',
        description: 'Health data visualization platform that helps healthcare providers understand complex patient data.',
        relevant: true
      },
      {
        slug: 'infobionic-heart-monitoring',
        description: 'Cardiac monitoring platform that helps healthcare providers track and manage heart health.',
        relevant: true
      },
      {
        slug: 'insidetracker-nutrition-science',
        description: 'Nutrition analytics platform that helps healthcare providers optimize patient nutrition and health outcomes.',
        relevant: true
      },
      {
        slug: 'mitre-flux-notes',
        description: 'Clinical note analysis system that helps healthcare providers extract insights from patient documentation.',
        relevant: true
      },
      {
        slug: 'mitre-shr',
        description: 'Shared health record system that enables healthcare providers to access comprehensive patient information.',
        relevant: true
      },
      {
        slug: 'mitre-state-of-us-healthcare',
        description: 'Healthcare analytics platform that helps providers understand and improve healthcare delivery.',
        relevant: true
      },
      {
        slug: 'mount-sinai-consent',
        description: 'Consent management system that helps healthcare providers manage patient consent for research and treatment.',
        relevant: true
      },
      {
        slug: 'paintrackr',
        description: 'Pain management platform that helps healthcare providers track and manage patient pain effectively.',
        relevant: true
      },
      {
        slug: 'personal-genome-project-vision',
        description: 'Genomics research platform that helps healthcare providers advance personalized medicine.',
        relevant: true
      },
      {
        slug: 'staffplan',
        description: 'Workforce management platform that helps healthcare organizations optimize staffing and patient care.',
        relevant: true
      },
      {
        slug: 'tabeeb-diagnostics',
        description: 'Diagnostic platform that helps healthcare providers make accurate and timely diagnoses.',
        relevant: true
      },
      {
        slug: 'wuxi-nextcode-familycode',
        description: 'Genomics platform that helps healthcare providers deliver family-based genetic medicine.',
        relevant: true
      }
    ]
  },
  'Design for Government': {
    searchInsight: 'Civic technology solutions that serve the public good',
    projectDescriptions: [
      {
        slug: 'mass-snap',
        description: 'Massachusetts SNAP benefits platform designed for government agencies, improving citizen access to essential services.',
        relevant: true
      },
      {
        slug: 'public-sector',
        description: 'Public sector service design solutions that enhance citizen engagement and government efficiency.',
        relevant: true
      },
      {
        slug: 'determinants-of-health',
        description: 'Public health data visualization platform that helps government agencies understand and address social determinants of health.',
        relevant: true
      },
      {
        slug: 'fastercures-health-data-basics',
        description: 'Educational platform for government health officials to understand complex health data and policy implications.',
        relevant: true
      },
      {
        slug: 'all-of-us',
        description: 'National research initiative platform that enables government agencies to conduct large-scale health research.',
        relevant: true
      },
      {
        slug: 'hgraph',
        description: 'Public health data visualization platform that helps government agencies understand population health trends.',
        relevant: true
      },
      {
        slug: 'mitre-state-of-us-healthcare',
        description: 'Healthcare analytics platform that helps government agencies understand and improve national healthcare delivery.',
        relevant: true
      }
    ]
  },
  'Design for AI': {
    searchInsight: 'AI-powered solutions that leverage machine learning and natural language processing',
    projectDescriptions: [
      {
        slug: 'ipsos-facto',
        description: 'AI and LLM-powered research intelligence platform that transforms how organizations analyze and understand complex data.',
        relevant: true
      },
      {
        slug: 'visual-storytelling-with-genai',
        description: 'Generative AI platform for creating compelling visual narratives and storytelling in healthcare contexts.',
        relevant: true
      },
      {
        slug: 'mitre-flux-notes',
        description: 'AI-powered clinical note analysis system that helps healthcare providers extract insights from unstructured text data.',
        relevant: true
      },
      {
        slug: 'tabeeb-diagnostics',
        description: 'AI-driven diagnostic platform that combines machine learning with clinical expertise to improve diagnostic accuracy.',
        relevant: true
      },
      {
        slug: 'partners-geneinsight',
        description: 'AI-powered genomics platform that uses machine learning to analyze genetic data and provide personalized insights.',
        relevant: true
      },
      {
        slug: 'partners-insight',
        description: 'AI-powered analytics platform that uses machine learning to provide healthcare insights and predictions.',
        relevant: true
      },
      {
        slug: '3m-coderyte',
        description: 'AI-powered clinical coding platform that uses natural language processing to improve documentation accuracy.',
        relevant: true
      },
      {
        slug: 'ahrq-cds',
        description: 'AI-powered clinical decision support system that uses machine learning to provide evidence-based recommendations.',
        relevant: true
      },
      {
        slug: 'all-of-us',
        description: 'AI-powered research platform that uses machine learning to analyze large-scale health data and generate insights.',
        relevant: true
      },
      {
        slug: 'care-cards',
        description: 'AI-powered patient engagement platform that uses machine learning to personalize patient communication.',
        relevant: true
      },
      {
        slug: 'commonhealth-smart-health-cards',
        description: 'AI-powered digital health credential system that uses machine learning for secure verification.',
        relevant: true
      },
      {
        slug: 'fastercures-health-data-basics',
        description: 'AI-powered educational platform that uses machine learning to help users understand complex health data.',
        relevant: true
      },
      {
        slug: 'hgraph',
        description: 'AI-powered health data visualization platform that uses machine learning to identify patterns and insights.',
        relevant: true
      },
      {
        slug: 'infobionic-heart-monitoring',
        description: 'AI-powered cardiac monitoring platform that uses machine learning to detect and predict heart conditions.',
        relevant: true
      },
      {
        slug: 'insidetracker-nutrition-science',
        description: 'AI-powered nutrition analytics platform that uses machine learning to optimize nutrition and health outcomes.',
        relevant: true
      },
      {
        slug: 'mitre-shr',
        description: 'AI-powered shared health record system that uses machine learning to provide comprehensive patient insights.',
        relevant: true
      },
      {
        slug: 'mitre-state-of-us-healthcare',
        description: 'AI-powered healthcare analytics platform that uses machine learning to understand and improve healthcare delivery.',
        relevant: true
      },
      {
        slug: 'mount-sinai-consent',
        description: 'AI-powered consent management system that uses machine learning to optimize research participation.',
        relevant: true
      },
      {
        slug: 'paintrackr',
        description: 'AI-powered pain management platform that uses machine learning to track and predict pain patterns.',
        relevant: true
      },
      {
        slug: 'personal-genome-project-vision',
        description: 'AI-powered genomics research platform that uses machine learning to advance personalized medicine.',
        relevant: true
      },
      {
        slug: 'staffplan',
        description: 'AI-powered workforce management platform that uses machine learning to optimize healthcare staffing.',
        relevant: true
      },
      {
        slug: 'wuxi-nextcode-familycode',
        description: 'AI-powered genomics platform that uses machine learning to analyze family genetic data.',
        relevant: true
      }
    ]
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
  
  // Skip OpenAI call when missing key or previews without explicit allow
  if (!HAS_OPENAI_KEY || !openai || (IS_NETLIFY_PREVIEW && !ALLOW_AI_IN_PREVIEWS)) {
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
      ]
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

// Promise timeout helper with better error context
function withTimeout(promise, ms, label) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => {
      const err = new Error(`${label || 'timeout'} after ${ms}ms`)
      err.code = 'TIMEOUT'
      reject(err)
    }, ms)
  })
  
  // Race with actual promise, but preserve original error if it fails
  return Promise.race([
    promise.catch(err => {
      clearTimeout(timer)
      // Log the actual error before re-throwing
      console.error(`${label} - Original error before timeout:`, {
        message: err.message,
        status: err.status,
        code: err.code,
        type: err.type,
        error: err.error
      })
      throw err
    }),
    timeout
  ]).finally(() => clearTimeout(timer))
}

// Quick relevance check
async function quickRelevanceCheck(query, projects) {
  // Skip OpenAI call when missing key or previews without explicit allow
  if (!HAS_OPENAI_KEY || !openai || (IS_NETLIFY_PREVIEW && !ALLOW_AI_IN_PREVIEWS)) {
    return projects.map(p => ({ ...p, relevant: true }));
  }

  try {
    console.log(`Relevance check: querying ${projects.length} projects with query "${query}"`);
    const response = await withTimeout(openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content: `You are filtering case study projects for relevance. Given a search query, determine which projects are relevant. 

Be GENEROUS with relevance; consider:
- Direct topic matches
- Related design methodologies or processes
- Similar problem domains
- Overlapping techniques or approaches
- Tangentially related concepts

Only mark as NOT relevant if there's truly no connection whatsoever.

Respond with JSON object with a "projects" array: {"projects": [{"slug": "project-slug", "relevant": true/false}]}`
        },
        {
          role: 'user',
          content: `Query: "${query}"\n\nProjects:\n${JSON.stringify(projects.map(p => ({ slug: p.slug, title: p.title, caption: p.caption, categories: p.categories, keywords: p.keywords, client: p.client })), null, 2)}`
        }
      ],
      max_completion_tokens: 800,
      reasoning_effort: 'low',
      response_format: { type: "json_object" }
    }), 10000, 'relevance-check-timeout');
    
    console.log('Relevance check completed successfully');
    
    const rawContent = response.choices[0].message.content;
    console.log('OpenAI response content:', rawContent);
    console.log('OpenAI response length:', rawContent?.length || 0);
    
    let result;
    try {
      result = JSON.parse(rawContent);
    } catch (parseError) {
      console.error('JSON parse error:', parseError.message);
      console.error('Raw content that failed to parse:', JSON.stringify(rawContent));
      throw parseError;
    }
    
    const relevanceMap = new Map(result.projects?.map(p => [p.slug, p.relevant]) || []);
    
    return projects.map(p => ({
      ...p,
      relevant: relevanceMap.get(p.slug) !== false
    }));
  } catch (error) {
    console.warn('Quick relevance check failed, assuming all relevant:', {
      message: error.message,
      code: error.code,
      status: error.status,
      type: error.type,
      stack: error.stack?.split('\n')[0]
    });
    
    // If it's a parse error, the API responded but with bad JSON
    if (error.message.includes('JSON')) {
      console.error('This suggests OpenAI returned malformed JSON - check model name and API status');
    }
    
    return projects.map(p => ({ ...p, relevant: true }));
  }
}

// Helper function to convert markdown bold (**text**) to HTML (<strong>text</strong>)
function convertMarkdownBoldToHtml(text) {
  if (!text || typeof text !== 'string') return text;
  // Replace **text** with <strong>text</strong>
  return text.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
}

// Generate AI description for a single project
async function generateSingleProjectDescription(query, project, personaContext) {
  const projectData = PROJECT_SUMMARIES[project.slug];
  const enhancedProject = {
    ...project,
    structuredData: projectData || null
  };
  
  const systemPrompt = `You are an AI assistant helping users find relevant case studies. ${personaContext}

CRITICAL: Use the structured project data provided to create compelling, specific descriptions. The data includes real metrics, technologies, deliverables, and outcomes.

Your task is to write a compelling 2-3 sentence description for each project explaining why it's relevant to the user's search query. Use specific details from the structured data:
- Lead with keyMetrics when impressive numbers are available
- Mention concrete technologies and deliverables
- Reference businessValue and how it solved the problem
- Use targetUsers to show who benefits
- Use HTML <strong></strong> tags (NOT markdown **) to emphasize 2-4 key words or phrases per description (important metrics, outcomes, or relevant terms)

IMPORTANT: Use HTML tags like <strong>text</strong>, NOT markdown like **text**.

If a project is not relevant to the query, set its relevant flag to false and provide an empty description string.

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

Project to describe (includes metadata AND structured data with metrics, technologies, deliverables, etc.):
${JSON.stringify(enhancedProject, null, 2)}

Create a compelling 2-3 sentence description that:
1. Uses specific details from structuredData (keyMetrics, technologies, deliverables, businessValue)
2. Connects the project to the search query using the most relevant structured fields
3. Leads with impressive metrics when available (e.g., "Serves 160M users...")
4. Mentions concrete deliverables and technologies
5. References the client for credibility when provided
6. If no clear connection exists, mark as not relevant (relevant=false) and use empty description

Format your response as JSON:
{
  "slug": "${project.slug}",
  "description": "Why this project is relevant to the search query (using only explicit information provided). Start with outcome or artifact when available; keep it specific and concrete.",
  "relevant": true
}`;

  // Skip OpenAI call when missing key or previews without explicit allow
  if (!HAS_OPENAI_KEY || !openai || (IS_NETLIFY_PREVIEW && !ALLOW_AI_IN_PREVIEWS)) {
    return null
  }

  try {
    const startTime = Date.now();
    const response = await withTimeout(openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      max_completion_tokens: 1000,
      reasoning_effort: 'low',
      response_format: { type: "json_object" }
    }), 15000, `ai-search-timeout-${project.slug}`)
    
    const elapsed = Date.now() - startTime;
    console.log(`  ✓ ${project.slug}: ${elapsed}ms, ${response.usage?.total_tokens || '?'} tokens`);
    
    const result = JSON.parse(response.choices[0].message.content);
    
    // Convert markdown bold to HTML if AI returned markdown format
    if (result.description) {
      result.description = convertMarkdownBoldToHtml(result.description);
    }
    
    return result;
  } catch (error) {
    console.error(`  ✗ ${project.slug} error:`, error.message);
    return null;
  }
}

// Generate AI responses for multiple projects (processes individually)
async function generateAIResponse(query, projects, personaContext) {
  // Take top 4 projects to generate descriptions for
  const topProjects = projects.slice(0, 4);
  
  console.log(`Generating AI descriptions for ${topProjects.length} projects individually...`);
  
  // Process all projects in parallel for speed
  const startTime = Date.now();
  const descriptionPromises = topProjects.map(project => 
    generateSingleProjectDescription(query, project, personaContext)
  );
  
  const descriptions = await Promise.all(descriptionPromises);
  const elapsed = Date.now() - startTime;
  
  const successCount = descriptions.filter(d => d !== null).length;
  console.log(`Completed ${successCount}/${topProjects.length} descriptions in ${elapsed}ms total`);
  
  // Filter out failed descriptions and format result
  const projectDescriptions = descriptions
    .filter(d => d !== null)
    .map(d => ({
      slug: d.slug,
      description: d.description || '',
      relevant: d.relevant !== false
    }));
  
  return {
    projectDescriptions,
    searchInsight: projectDescriptions.length > 0 
      ? 'Relevant projects based on your search criteria' 
      : null
  };
}

// Netlify Function handler
exports.handler = async (event, context) => {
  // Debug: Log environment variable status
  const envDebug = {
    HAS_OPENAI_KEY,
    IS_NETLIFY_PREVIEW,
    ALLOW_AI_IN_PREVIEWS,
    CONTEXT: process.env.CONTEXT,
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL ? 'set' : 'not set',
    hasOpenAIClient: !!openai
  }
  console.log('🔍 Environment Check:', envDebug)
  
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

  // If missing API key, or previews without allow flag, short-circuit with non-AI response
  if (!HAS_OPENAI_KEY || !openai || (IS_NETLIFY_PREVIEW && !ALLOW_AI_IN_PREVIEWS)) {
    // Validate input shape minimally
    if (!query || !projects || !Array.isArray(projects)) {
      return jsonResponse(200, { results: [], aiGenerated: false, debug: envDebug })
    }
    // Return projects as-is; client will display without AI descriptions
    return jsonResponse(200, { 
      results: projects, 
      aiGenerated: false, 
      disabled: (!HAS_OPENAI_KEY || !openai) ? 'no-api-key' : (IS_NETLIFY_PREVIEW ? 'preview' : 'disabled'),
      debug: envDebug // Include debug info in response for troubleshooting
    })
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
    
    // Check for "Design for ___" category queries and use template-based descriptions
    if (DESIGN_FOR_CATEGORIES[query]) {
      const categoryConfig = DESIGN_FOR_CATEGORIES[query];
      const keywords = categoryConfig.keywords;
      
      // Filter projects by category keywords
      const matchedProjects = projects.filter(project => {
        const searchText = [
          project.title,
          project.caption,
          ...(project.categories || []),
          ...(project.keywords || [])
        ].filter(Boolean).join(' ').toLowerCase();
        
        return keywords.some(keyword => searchText.includes(keyword));
      });
      
      // Generate template-based descriptions for matched projects
      const enhancedResults = projects.map(project => {
        const isMatched = matchedProjects.some(m => m.slug === project.slug);
        return {
          ...project,
          aiDescription: isMatched ? generateTemplateDescription(project, query) : null,
          aiRelevant: isMatched,
          aiEnhanced: isMatched
        };
      });
      
      return jsonResponse(200, {
        results: enhancedResults,
        aiGenerated: true,
        searchInsight: categoryConfig.insight,
        detectedPersona: null,
        preset: query
      });
    }
    
    // If not using AI, just return the projects as-is
    if (!useAI) {
      return jsonResponse(200, { results: projects, aiGenerated: false, debug: { ...envDebug, reason: 'useAI=false' } })
    }
    
    // Step 1: Quick relevance check (fast, uses mini model, no summaries)
    console.log(`Step 1: Relevance check for ${projects.length} projects...`);
    const relevanceChecked = await quickRelevanceCheck(query, projects);
    const relevantProjects = relevanceChecked.filter(p => p.relevant !== false);
    console.log(`  Found ${relevantProjects.length}/${projects.length} relevant projects`);
    
    // If relevance check completely failed (all projects still marked as relevant due to fallback)
    // or if no projects passed the check, skip expensive AI generation
    if (relevantProjects.length === 0 || relevantProjects.length === projects.length) {
      console.warn('  Relevance check failed or returned all projects - skipping AI generation');
      // Don't waste API calls - return top projects without AI descriptions
      return jsonResponse(200, {
        results: projects.slice(0, 4).map(p => ({ ...p, aiRelevant: true, aiDescription: p.caption })),
        aiGenerated: false,
        searchInsight: null,
        detectedPersona: null,
        preset: null,
        debug: { ...envDebug, reason: 'relevance-check-failed', relevantCount: relevantProjects.length, totalCount: projects.length }
      });
    }
    
    // Step 2: Generate detailed descriptions only for relevant projects (slower, uses summaries)
    console.log(`Step 2: Generating AI descriptions...`);
    const aiResponse = await generateAIResponse(
      query, 
      relevantProjects,
      'You are helping users find relevant design case studies. Focus on innovation, design quality, and practical applications.'
    );
    
    console.log(`  Generated ${aiResponse.projectDescriptions?.length || 0} descriptions`);
    
    // Enhance projects with AI descriptions
    const enhancedResults = projects.map((project) => {
      const aiData = aiResponse.projectDescriptions?.find(p => p.slug === project.slug);
      // Default to relevant=true if AI returned a description
      const hasDescription = aiData && aiData.description && aiData.description.trim().length > 0;
      const isRelevant = hasDescription ? (aiData.relevant !== false) : false;
      
      return {
        ...project,
        aiDescription: hasDescription ? aiData.description : null,
        aiRelevant: isRelevant,
        aiEnhanced: !!hasDescription
      };
    });
    
    // Only filter out projects that explicitly have no description
    const filteredResults = enhancedResults.filter(r => r.aiDescription !== null && r.aiDescription.trim().length > 0);
    
    console.log(`  Enhanced results: ${enhancedResults.length} total, ${filteredResults.length} with descriptions`);
    
    // Debug: log which projects have descriptions
    enhancedResults.forEach(r => {
      console.log(`    ${r.slug}: ${r.aiDescription ? 'HAS' : 'NO'} description (${r.aiDescription?.length || 0} chars)`);
    });
    
    // If we somehow ended up with no results, return original projects
    if (filteredResults.length === 0) {
      console.warn('  No projects after filtering! Returning original projects');
      return jsonResponse(200, {
        results: projects.slice(0, 4).map(p => ({ ...p, aiRelevant: true, aiDescription: p.caption })),
        aiGenerated: false,
        searchInsight: null,
        detectedPersona: null,
        preset: null,
        debug: { ...envDebug, reason: 'no-descriptions-generated', enhancedCount: enhancedResults.length, generatedCount: aiResponse.projectDescriptions?.length || 0 }
      });
    }

    return jsonResponse(200, {
      results: filteredResults,
      aiGenerated: true,
      searchInsight: aiResponse.searchInsight,
      detectedPersona: null,
      preset: null
    })
    
  } catch (error) {
    console.error('AI search error:', error);
    return jsonResponse(500, { error: 'Failed to process AI search', aiGenerated: false, debug: { ...envDebug, reason: 'exception', errorMessage: error.message } })
  }
}; 