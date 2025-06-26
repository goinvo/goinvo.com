const fs = require('fs').promises
const path = require('path')
const crypto = require('crypto')
const OpenAI = require('openai')

// Configuration
const forceRegeneration = process.argv.includes('--force')
const CACHE_FILE = path.join(__dirname, '..', '.embeddings-cache', 'cache.json')
const hasOpenAIKey = !!process.env.OPENAI_API_KEY

// Initialize OpenAI client conditionally
const openai = hasOpenAIKey ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}) : null

// Function to generate a content hash
function generateContentHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex')
}

// Function to load the cache
async function loadCache() {
  try {
    const cacheData = await fs.readFile(CACHE_FILE, 'utf-8')
    return JSON.parse(cacheData)
  } catch (error) {
    console.log('📁 No cache found, starting fresh')
    return {}
  }
}

// Function to save the cache
async function saveCache(cache) {
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true })
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2))
}

// Function to load case studies
async function loadCaseStudies(cache = {}) {
  const caseStudiesDir = path.join(__dirname, '..', 'src', 'case-studies')
  const files = await fs.readdir(caseStudiesDir)
  const mdxFiles = files.filter(file => file.endsWith('.mdx'))
  
  const caseStudies = await Promise.all(mdxFiles.map(async (file) => {
    const filePath = path.join(caseStudiesDir, file)
    const content = await fs.readFile(filePath, 'utf-8')
    const fileStats = await fs.stat(filePath)
    
    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    const frontmatter = {}
    
    if (frontmatterMatch) {
      const lines = frontmatterMatch[1].split('\n')
      lines.forEach(line => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim()
          frontmatter[key.trim()] = value.replace(/^["']|["']$/g, '')
        }
      })
    }
    
    const id = path.basename(file, '.mdx')
    const contentHash = generateContentHash(content)
    
    return {
      id,
      type: 'case-study',
      title: frontmatter.title || id,
      client: frontmatter.client || '',
      categories: frontmatter.categories ? frontmatter.categories.split(',').map(c => c.trim()) : [],
      caption: frontmatter.caption || '',
      slug: `/case-study/${id}/`,
      content: content.replace(/^---[\s\S]*?---\n/, ''),
      contentHash,
      lastModified: fileStats.mtime.toISOString(),
      needsUpdate: forceRegeneration || !cache[id] || cache[id].contentHash !== contentHash
    }
  }))
  
  return caseStudies
}

// Function to load features
async function loadFeatures(cache = {}) {
  const featuresPath = path.join(__dirname, '..', 'src', 'data', 'features.json')
  const featuresData = await fs.readFile(featuresPath, 'utf-8')
  const fileStats = await fs.stat(featuresPath)
  const features = JSON.parse(featuresData)
  
  return features
    .filter(feature => feature.id && feature.title)
    .map(feature => {
      const contentHash = generateContentHash(JSON.stringify(feature))
      
      return {
        id: feature.id,
        type: 'feature',
        title: feature.title || '',
        client: feature.client || '',
        caption: feature.caption || '',
        categories: feature.categories || [],
        content: feature.caption || '',
        image: feature.image || '',
        link: feature.link || '',
        contentHash,
        lastModified: fileStats.mtime.toISOString(),
        needsUpdate: forceRegeneration || !cache[`feature-${feature.id}`] || cache[`feature-${feature.id}`].contentHash !== contentHash
      }
    })
}

// Function to generate buyer descriptions (from v1)
async function generateBuyerDescriptions(project) {
  if (!hasOpenAIKey) {
    return generateBuyerDescriptionsFallback(project)
  }

  const scenarios = [
    {
      role: 'CEO',
      context: 'making a strategic decision about hiring a design consultancy',
      focus: 'business value, ROI, strategic advantage, and company reputation'
    },
    {
      role: 'Product Manager',
      context: 'evaluating design partners for product development',
      focus: 'user experience, design process, timeline, and deliverables'
    },
    {
      role: 'Healthcare Organization',
      context: 'looking for design expertise in healthcare',
      focus: 'healthcare domain knowledge, regulatory compliance, and patient outcomes'
    },
    {
      role: 'Government Agency',
      context: 'seeking design services for public sector projects',
      focus: 'public service, accessibility, security, and civic engagement'
    }
  ]

  const descriptions = {}

  for (const scenario of scenarios) {
    const prompt = `Generate a compelling 1-2 sentence description of this project tailored for a ${scenario.role} ${scenario.context}.

Project: ${project.title}
Client: ${project.client}
Caption: ${project.caption}
Categories: ${project.categories.join(', ')}

Focus on ${scenario.focus}. Make it specific and persuasive, highlighting relevant outcomes and expertise.
Return ONLY the description text, no additional formatting.`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 150
      })
      
      descriptions[scenario.role] = response.choices[0].message.content.trim()
    } catch (error) {
      console.error(`Error generating description for ${scenario.role}:`, error)
      descriptions[scenario.role] = generateFallbackDescription(project, scenario)
    }
  }

  return descriptions
}

// Fallback buyer descriptions
function generateBuyerDescriptionsFallback(project) {
  return {
    'CEO': `${project.title} demonstrates our ability to deliver strategic value through innovative design solutions that drive business outcomes.`,
    'Product Manager': `${project.title} showcases our user-centered design process and expertise in creating exceptional product experiences.`,
    'Healthcare Organization': `${project.title} highlights our deep healthcare domain knowledge and commitment to improving patient outcomes through thoughtful design.`,
    'Government Agency': `${project.title} exemplifies our experience in public sector design, focusing on accessibility and civic engagement.`
  }
}

function generateFallbackDescription(project, scenario) {
  const templates = {
    'CEO': `${project.title} delivers strategic business value through innovative design that drives measurable outcomes and competitive advantage.`,
    'Product Manager': `${project.title} demonstrates our expertise in user-centered design and efficient product development processes.`,
    'Healthcare Organization': `${project.title} showcases our healthcare domain expertise and commitment to improving patient care through design.`,
    'Government Agency': `${project.title} exemplifies our public sector experience, delivering accessible and secure solutions for citizens.`
  }
  
  return templates[scenario.role] || `${project.title} demonstrates our design expertise and commitment to delivering exceptional results.`
}

// Function to extract skills from search query (from v2)
async function extractQuerySkills(query) {
  if (!hasOpenAIKey) {
    return extractQuerySkillsFallback(query)
  }

  const prompt = `Analyze this search query and extract BOTH structured fields AND underlying skills:

Query: "${query}"

Extract:
1. Structured Fields:
   - Domain: Primary industry/sector (e.g., Healthcare, Government, Enterprise, Finance)
   - Product: Type of deliverable (e.g., Mobile App, Dashboard, Platform, Website)
   - Goal: What they're trying to achieve (e.g., improving outcomes, streamlining workflows)

2. Skills & Capabilities:
   - Technical Skills: Specific technical capabilities (e.g., "React Native", "real-time data", "API integration")
   - Design Skills: Design and UX capabilities (e.g., "behavior-change design", "data visualization")
   - Domain Knowledge: Industry expertise (e.g., "HIPAA compliance", "clinical workflows")
   - Business Value: Outcomes desired (e.g., "user engagement", "operational efficiency")

Return as JSON with these exact keys: domain, product, goal, technicalSkills, designSkills, domainKnowledge, businessValue
Return ONLY valid JSON, no additional text.`

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 600
    })
    
    let result = response.choices[0].message.content.trim()
    
    // Remove markdown code blocks if present
    if (result.includes('```json')) {
      result = result.replace(/```json\s*/g, '').replace(/```\s*/g, '')
    } else if (result.includes('```')) {
      result = result.replace(/```\s*/g, '')
    }
    
    return JSON.parse(result)
  } catch (error) {
    console.error('Error extracting query skills:', error)
    return extractQuerySkillsFallback(query)
  }
}

// Fallback skill extraction
function extractQuerySkillsFallback(query) {
  const queryLower = query.toLowerCase()
  const result = {
    // Structured fields
    domain: null,
    product: null,
    goal: null,
    // Skills
    technicalSkills: [],
    designSkills: [],
    domainKnowledge: [],
    businessValue: []
  }
  
  // Domain detection
  if (queryLower.includes('health') || queryLower.includes('medical') || queryLower.includes('clinical')) {
    result.domain = 'Healthcare'
    result.domainKnowledge.push('healthcare domain expertise')
  } else if (queryLower.includes('government') || queryLower.includes('civic') || queryLower.includes('public')) {
    result.domain = 'Government'
    result.domainKnowledge.push('public sector expertise')
  } else if (queryLower.includes('enterprise') || queryLower.includes('business') || queryLower.includes('corporate')) {
    result.domain = 'Enterprise'
    result.domainKnowledge.push('enterprise solutions')
  }
  
  // Product detection
  if (queryLower.includes('mobile') || queryLower.includes('app')) {
    result.product = 'Mobile App'
    result.technicalSkills.push('mobile app development')
  } else if (queryLower.includes('dashboard')) {
    result.product = 'Dashboard'
    result.technicalSkills.push('dashboard development')
  } else if (queryLower.includes('platform')) {
    result.product = 'Platform'
    result.technicalSkills.push('platform development')
  }
  
  // Goal detection
  if (queryLower.includes('improve') || queryLower.includes('outcomes')) {
    result.goal = 'improving outcomes'
    result.businessValue.push('improved outcomes')
  } else if (queryLower.includes('streamline') || queryLower.includes('workflow')) {
    result.goal = 'streamlining workflows'
    result.businessValue.push('operational efficiency')
  } else if (queryLower.includes('track') || queryLower.includes('monitor')) {
    result.goal = 'tracking and monitoring'
    result.designSkills.push('data tracking design')
  }
  
  // Additional skill detection
  if (queryLower.includes('real-time') || queryLower.includes('telemetry')) {
    result.technicalSkills.push('real-time data streaming')
  }
  if (queryLower.includes('visualization')) {
    result.technicalSkills.push('data visualization')
    result.designSkills.push('visualization design')
  }
  if (queryLower.includes('hipaa') || queryLower.includes('compliance')) {
    result.domainKnowledge.push('regulatory compliance')
  }
  
  return result
}

// Function to extract project capabilities (from v2)
async function extractProjectCapabilities(project) {
  if (!hasOpenAIKey) {
    return extractProjectCapabilitiesFallback(project)
  }

  const prompt = `Analyze this design project and extract comprehensive capabilities:

Project: ${project.title}
Client: ${project.client}
Caption: ${project.caption}
Content: ${project.content.substring(0, 2000)}...

Extract:
1. Techniques Used: Specific design/development techniques
2. Skills Demonstrated: Actual skills shown in the work
3. Frameworks/Methods: Design frameworks or methodologies used
4. Technical Implementation: Technologies, languages, platforms used
5. Domain Expertise: Specific domain knowledge demonstrated
6. Business Outcomes: Business results or value delivered

Be specific and extract actual details from the project, not generic terms.
Return as JSON with keys: techniques, skills, frameworks, technicalImplementation, domainExpertise, businessOutcomes
Return ONLY valid JSON, no additional text.`

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 1000
    })
    
    let result = response.choices[0].message.content.trim()
    
    // Remove markdown code blocks if present
    if (result.includes('```json')) {
      result = result.replace(/```json\s*/g, '').replace(/```\s*/g, '')
    } else if (result.includes('```')) {
      result = result.replace(/```\s*/g, '')
    }
    
    const parsed = JSON.parse(result)
    // Ensure all properties are arrays
    return {
      techniques: Array.isArray(parsed.techniques) ? parsed.techniques : [],
      skills: Array.isArray(parsed.skills) ? parsed.skills : [],
      frameworks: Array.isArray(parsed.frameworks) ? parsed.frameworks : [],
      technicalImplementation: Array.isArray(parsed.technicalImplementation) ? parsed.technicalImplementation : [],
      domainExpertise: Array.isArray(parsed.domainExpertise) ? parsed.domainExpertise : [],
      businessOutcomes: Array.isArray(parsed.businessOutcomes) ? parsed.businessOutcomes : []
    }
  } catch (error) {
    console.error(`Error extracting capabilities for ${project.id}:`, error)
    return extractProjectCapabilitiesFallback(project)
  }
}

// Fallback capability extraction
function extractProjectCapabilitiesFallback(project) {
  const text = `${project.title} ${project.caption} ${project.content}`.toLowerCase()
  
  return {
    techniques: extractPatterns(text, [
      'visualization', 'mapping', 'tracking', 'monitoring', 'analytics',
      'real-time', 'responsive design', 'progressive disclosure', 'prototyping'
    ]),
    skills: extractPatterns(text, [
      'mobile design', 'dashboard design', 'data visualization',
      'user research', 'prototyping', 'testing', 'ux design', 'ui design'
    ]),
    frameworks: extractPatterns(text, [
      'human-centered design', 'agile', 'design thinking',
      'lean ux', 'accessibility', 'usability', 'design system'
    ]),
    technicalImplementation: extractPatterns(text, [
      'react', 'vue', 'angular', 'd3', 'node', 'python', 'javascript',
      'api', 'database', 'cloud', 'mobile', 'web', 'ios', 'android'
    ]),
    domainExpertise: extractPatterns(text, [
      'healthcare', 'clinical', 'medical', 'patient', 'hipaa',
      'government', 'civic', 'public', 'enterprise', 'business'
    ]),
    businessOutcomes: extractPatterns(text, [
      'efficiency', 'engagement', 'outcomes', 'savings', 'growth',
      'adoption', 'satisfaction', 'compliance', 'safety'
    ])
  }
}

function extractPatterns(text, patterns) {
  return patterns.filter(pattern => text.includes(pattern))
}

// Function to generate modular descriptions
async function generateModularDescriptions(project, capabilities) {
  if (!hasOpenAIKey) {
    return generateModularDescriptionsFallback(project, capabilities)
  }

  const prompt = `Generate specific, modular descriptions for this project's capabilities:

Project: ${project.title}
Capabilities:
- Techniques: ${Array.isArray(capabilities.techniques) ? capabilities.techniques.join(', ') : ''}
- Skills: ${Array.isArray(capabilities.skills) ? capabilities.skills.join(', ') : ''}
- Frameworks: ${Array.isArray(capabilities.frameworks) ? capabilities.frameworks.join(', ') : ''}
- Technical: ${Array.isArray(capabilities.technicalImplementation) ? capabilities.technicalImplementation.join(', ') : ''}
- Domain: ${Array.isArray(capabilities.domainExpertise) ? capabilities.domainExpertise.join(', ') : ''}
- Outcomes: ${Array.isArray(capabilities.businessOutcomes) ? capabilities.businessOutcomes.join(', ') : ''}

For each capability, generate a 1-2 sentence description that:
1. Mentions the specific capability
2. Explains how it was applied in this project
3. Highlights the value or outcome

Return as JSON with capability categories as keys, each containing an array of {skill, description} objects.
Return ONLY valid JSON, no additional text.`

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      max_tokens: 1500
    })
    
    let result = response.choices[0].message.content.trim()
    
    // Remove markdown code blocks if present
    if (result.includes('```json')) {
      result = result.replace(/```json\s*/g, '').replace(/```\s*/g, '')
    } else if (result.includes('```')) {
      result = result.replace(/```\s*/g, '')
    }
    
    return JSON.parse(result)
  } catch (error) {
    console.error(`Error generating modular descriptions for ${project.id}:`, error)
    return generateModularDescriptionsFallback(project, capabilities)
  }
}

// Fallback modular description generation
function generateModularDescriptionsFallback(project, capabilities) {
  const descriptions = {}
  
  Object.keys(capabilities).forEach(category => {
    descriptions[category] = []
    if (Array.isArray(capabilities[category]) && capabilities[category].length > 0) {
      capabilities[category].forEach(skill => {
        descriptions[category].push({
          skill: skill,
          description: `${project.title} leverages ${skill} to deliver exceptional results.`
        })
      })
    }
  })
  
  return descriptions
}

// Function to generate structured metadata (domain, product, goal)
function extractStructuredMetadata(project) {
  const text = `${project.title} ${project.caption} ${project.categories.join(' ')} ${project.content}`.toLowerCase()
  
  // Domain detection
  let domain = 'General'
  if (text.includes('health') || text.includes('medical') || text.includes('clinical')) domain = 'Healthcare'
  else if (text.includes('government') || text.includes('civic') || text.includes('public')) domain = 'Government'
  else if (text.includes('enterprise') || text.includes('business')) domain = 'Enterprise'
  else if (text.includes('education') || text.includes('academic')) domain = 'Education'
  else if (text.includes('finance') || text.includes('banking')) domain = 'Finance'
  
  // Product detection
  let product = 'Solution'
  if (text.includes('mobile') || text.includes('app')) product = 'Mobile App'
  else if (text.includes('dashboard')) product = 'Dashboard'
  else if (text.includes('platform')) product = 'Platform'
  else if (text.includes('website') || text.includes('web')) product = 'Website'
  else if (text.includes('tool')) product = 'Tool'
  else if (text.includes('system')) product = 'System'
  
  // Goal detection
  let goal = 'delivering value'
  if (text.includes('improve') && text.includes('outcome')) goal = 'improving outcomes'
  else if (text.includes('streamline') || text.includes('workflow')) goal = 'streamlining workflows'
  else if (text.includes('track') || text.includes('monitor')) goal = 'tracking and monitoring'
  else if (text.includes('engage')) goal = 'increasing engagement'
  else if (text.includes('efficien')) goal = 'improving efficiency'
  else if (text.includes('access')) goal = 'improving access'
  
  return { domain, product, goal }
}

// Function to generate embedding
async function generateEmbedding(text) {
  if (!hasOpenAIKey) {
    return generateDummyEmbedding(text)
  }

  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text
    })
    
    return response.data[0].embedding
  } catch (error) {
    console.error('Error generating embedding:', error)
    return generateDummyEmbedding(text)
  }
}

// Function to generate a dummy embedding
function generateDummyEmbedding(text) {
  const hash = crypto.createHash('md5').update(text).digest('hex')
  const embedding = []
  
  for (let i = 0; i < 1536; i++) {
    const value = parseInt(hash.charAt(i % 32), 16) / 15 - 0.5
    embedding.push(value)
  }
  
  return embedding
}

// Function to prepare comprehensive text for embedding
function prepareTextForEmbedding(project, buyerDescriptions, capabilities, modularDescriptions, structuredMetadata) {
  // Combine all buyer descriptions
  const buyerText = Object.values(buyerDescriptions).join(' ')
  
  // Combine all capabilities
  const capabilityText = Object.values(capabilities)
    .filter(val => Array.isArray(val))
    .flat()
    .filter(Boolean)
    .join(' ')
  
  // Combine all modular descriptions
  const modularText = Object.values(modularDescriptions)
    .flat()
    .map(d => d.description)
    .join(' ')
  
  // Structured metadata as text
  const structuredText = `${structuredMetadata.domain} ${structuredMetadata.product} ${structuredMetadata.goal}`
  
  // Combine everything
  const textParts = [
    project.title,
    project.caption,
    project.client,
    ...(project.categories || []),
    structuredText,
    buyerText,
    capabilityText,
    modularText,
    project.content.substring(0, 1000)
  ].filter(Boolean)
  
  return textParts.join(' ')
}

// Helper function to categorize page type
function categorizePageType(project) {
  const { id, categories = [], content = '' } = project;
  
  // Check if it's a case study
  if (project.type === 'case-study' || categories.includes('Case Study')) {
    return 'caseStudies';
  }
  
  // Check if it's a blog post or article
  if (categories.includes('Blog') || categories.includes('Article') || 
      content.toLowerCase().includes('originally published') ||
      content.toLowerCase().includes('written by')) {
    return 'blogPosts';
  }
  
  // Check if it's a company page
  if (id.includes('about') || id.includes('team') || id.includes('careers') ||
      id.includes('contact') || id.includes('services')) {
    return 'companyPages';
  }
  
  // Check if it's a feature or vision page
  if (id.includes('vision') || categories.includes('Feature') || 
      categories.includes('Vision') || project.type === 'feature') {
    return 'features';
  }
  
  return 'other';
}

// Main function to generate search index
async function generateSearchIndex() {
  console.log('🚀 Starting search index generation with comprehensive embeddings...')
  
  // Check for specific ID regeneration
  const specificId = process.argv.find(arg => arg.startsWith('--id='))?.split('=')[1];
  const forceRegeneration = process.argv.includes('--force');
  
  if (specificId) {
    console.log(`🎯 Targeting specific project: ${specificId}`);
  }
  
  if (forceRegeneration) {
    console.log('🔥 Force mode: Regenerating ALL data (ignoring cache)')
  }
  
  if (!hasOpenAIKey) {
    console.log('⚠️  Running in fallback mode - OpenAI API key not available')
  }
  
  // Track pages without body text
  const pagesWithoutBodyText = [];
  const pageTypes = {
    caseStudies: 0,
    blogPosts: 0,
    companyPages: 0,
    features: 0,
    other: 0
  };
  
  try {
    // Load existing cache
    console.log('🗂️  Loading cache...')
    const cache = await loadCache()
    
    // Load all projects
    console.log('📚 Loading projects and checking for changes...')
    const caseStudies = await loadCaseStudies(cache)
    const features = await loadFeatures(cache)
    let allProjects = [...caseStudies, ...features]
    
    // If specific ID is provided, filter to only that project
    let existingProjects = [];
    if (specificId) {
      const targetProject = allProjects.find(p => p.id === specificId);
      if (!targetProject) {
        console.error(`❌ Project with ID "${specificId}" not found`);
        console.log('Available project IDs:');
        allProjects.forEach(p => console.log(`  - ${p.id}`));
        process.exit(1);
      }
      console.log(`✅ Found project: ${targetProject.title}`);
      
      // Save all other projects
      existingProjects = allProjects.filter(p => p.id !== specificId);
      
      // Process only the target project
      allProjects = [targetProject];
      
      // Force update for the specific project
      allProjects[0].needsUpdate = true;
    }
    
    const totalProjects = allProjects.length
    const projectsNeedingUpdate = allProjects.filter(p => p.needsUpdate).length
    const cachedProjects = totalProjects - projectsNeedingUpdate
    
    console.log(`📊 Found ${totalProjects} projects:`)
    if (!specificId) {
      console.log(`  📑 ${caseStudies.length} case studies`)
      console.log(`  🎯 ${features.length} features`)
    }
    if (!hasOpenAIKey) {
      console.log(`  ⚠️  Using fallback mode (no OpenAI API key)`)
    }
    if (forceRegeneration) {
      console.log(`  🔥 ${projectsNeedingUpdate} will be regenerated (force mode)`)
    } else if (!specificId) {
      console.log(`  ✅ ${cachedProjects} cached (unchanged)`)
      console.log(`  🔄 ${projectsNeedingUpdate} need processing`)
    }
    
    const searchIndex = []
    let processedCount = 0
    
    // Process each project
    for (let i = 0; i < allProjects.length; i++) {
      const project = allProjects[i]
      const cacheKey = project.type === 'feature' ? `feature-${project.id}` : project.id
      
      // Categorize page type
      const pageType = categorizePageType(project);
      pageTypes[pageType]++;
      
      // Check if project has sufficient body text
      const hasBodyText = project.content && project.content.trim().length > 100;
      if (!hasBodyText) {
        pagesWithoutBodyText.push({
          id: project.id,
          title: project.title,
          type: pageType,
          reason: !project.content ? 'No body text' : `Body text too short (${project.content.trim().length} chars)`,
          contentLength: project.content ? project.content.trim().length : 0
        });
      }
      
      let indexEntry
      
      if (project.needsUpdate) {
        processedCount++
        console.log(`\n🔄 Processing ${processedCount}/${projectsNeedingUpdate}: ${project.title}`)
        
        if (!hasBodyText) {
          console.log('  ⚠️  Warning: Insufficient body text - descriptions may be generic');
        }
        
        // Extract structured metadata (domain, product, goal)
        console.log('  📋 Extracting structured metadata...')
        const structuredMetadata = extractStructuredMetadata(project)
        
        // Generate buyer descriptions (v1 approach)
        console.log('  👥 Generating buyer persona descriptions...')
        const buyerDescriptions = await generateBuyerDescriptions(project)
        
        // Extract project capabilities (v2 approach)
        console.log('  🔍 Extracting project capabilities...')
        const capabilities = await extractProjectCapabilities(project)
        
        // Generate modular descriptions (v2 approach)
        console.log('  ✍️  Generating modular descriptions...')
        const modularDescriptions = await generateModularDescriptions(project, capabilities)
        
        // Prepare comprehensive text for embedding
        const embeddingText = prepareTextForEmbedding(
          project, 
          buyerDescriptions, 
          capabilities, 
          modularDescriptions,
          structuredMetadata
        )
        
        // Generate embedding
        console.log('  🧠 Generating embedding...')
        const embedding = await generateEmbedding(embeddingText)
        
        // Create comprehensive search index entry
        indexEntry = {
          id: project.id,
          type: project.type,
          title: project.title,
          client: project.client,
          caption: project.caption,
          categories: project.categories,
          image: project.image,
          slug: project.slug,
          link: project.link,
          
          // Structured metadata (v1 approach)
          structuredMetadata: structuredMetadata,
          
          // Buyer descriptions (v1 approach)
          buyerDescriptions: buyerDescriptions,
          
          // Capabilities (v2 approach)
          capabilities: capabilities,
          
          // Modular descriptions (v2 approach)
          modularDescriptions: modularDescriptions,
          
          // Embedding and metadata
          embedding: embedding,
          embeddingText: embeddingText,
          lastUpdated: new Date().toISOString(),
          contentHash: project.contentHash
        }
        
        // Update cache
        cache[cacheKey] = {
          contentHash: project.contentHash,
          lastModified: project.lastModified,
          indexEntry: indexEntry
        }
        
        // Add small delay to respect API rate limits
        if (processedCount < projectsNeedingUpdate && hasOpenAIKey) {
          await new Promise(resolve => setTimeout(resolve, 200))
        }
        
      } else {
        // Use cached version
        console.log(`✅ Using cached: ${project.title}`)
        indexEntry = cache[cacheKey].indexEntry
      }
      
      searchIndex.push(indexEntry)
    }
    
    // If we were regenerating a specific ID, merge back with existing projects
    if (specificId && existingProjects.length > 0) {
      console.log('\n🔀 Merging with existing projects...');
      
      // Load the existing search index
      const existingIndexPath = path.join(__dirname, '../src/data/search-index.json');
      let existingIndex = [];
      try {
        const existingData = await fs.readFile(existingIndexPath, 'utf-8');
        existingIndex = JSON.parse(existingData);
      } catch (e) {
        console.log('  ⚠️  No existing index found, creating new one');
      }
      
      // Replace the specific entry in the existing index
      const updatedIndex = existingIndex.filter(item => item.id !== specificId);
      updatedIndex.push(...searchIndex);
      searchIndex.length = 0;
      searchIndex.push(...updatedIndex);
    }
    
    // Save updated cache
    console.log('\n💾 Saving cache...')
    await saveCache(cache)
    
    // Save search index
    const outputPath = path.join(__dirname, '../src/data/search-index.json')
    await fs.writeFile(outputPath, JSON.stringify(searchIndex, null, 2))
    console.log(`✅ Search index saved to ${outputPath}`)
    
    // Also copy to static folder
    const publicPath = path.join(__dirname, '..', 'static', 'search-index.json')
    await fs.writeFile(publicPath, JSON.stringify(searchIndex, null, 2))
    console.log(`✅ Search index also saved to ${publicPath} for client access`)
    
    // Generate summary statistics
    console.log('\n📈 Generation Summary:')
    console.log(`  🔄 Processed: ${processedCount} projects`)
    if (!forceRegeneration && !specificId) {
      console.log(`  ⚡ Cached: ${cachedProjects} projects`)
    }
    if (hasOpenAIKey) {
      console.log(`  💰 Estimated cost: $${(processedCount * 0.01).toFixed(2)}`)
    } else {
      console.log(`  ⚠️  Used fallback mode (no cost - no OpenAI API)`)
    }
    
    // Report page types (only if not specific ID mode)
    if (!specificId) {
      console.log('\n📄 Page Type Breakdown:');
      Object.entries(pageTypes).forEach(([type, count]) => {
        if (count > 0) {
          console.log(`  ${type}: ${count}`);
        }
      });
    }
    
    // Report pages without body text
    if (pagesWithoutBodyText.length > 0) {
      console.log(`\n⚠️  Pages without sufficient body text: ${pagesWithoutBodyText.length}`);
      console.log('These pages may have hallucinated or generic descriptions:');
      pagesWithoutBodyText.forEach(page => {
        console.log(`  - ${page.title} (${page.id})`);
        console.log(`    Type: ${page.type}, Reason: ${page.reason}`);
      });
      
      console.log('\n💡 Recommendation: Consider adding more content to these pages or excluding them from search.');
    }
    
    // Show data richness (only if not specific ID mode)
    if (!specificId) {
      console.log('\n💎 Data Richness:')
      
      // Capability distribution
      const capabilityStats = {
        techniques: 0,
        skills: 0,
        frameworks: 0,
        technicalImplementation: 0,
        domainExpertise: 0,
        businessOutcomes: 0
      }
      
      // Domain distribution
      const domainStats = {}
      
      searchIndex.forEach(item => {
        // Count capabilities
        if (item.capabilities) {
          Object.keys(capabilityStats).forEach(key => {
            capabilityStats[key] += (item.capabilities[key] || []).length
          })
        }
        
        // Count domains
        if (item.structuredMetadata && item.structuredMetadata.domain) {
          domainStats[item.structuredMetadata.domain] = (domainStats[item.structuredMetadata.domain] || 0) + 1
        }
      })
      
      console.log('\n🎯 Capability Distribution:')
      Object.entries(capabilityStats).forEach(([key, count]) => {
        console.log(`  ${key}: ${count} total`)
      })
      
      console.log('\n🏢 Domain Distribution:')
      Object.entries(domainStats).forEach(([domain, count]) => {
        console.log(`  ${domain}: ${count} projects`)
      })
    }
    
    console.log('\n✨ Each project now has:')
    console.log('  - 4 buyer persona descriptions (CEO, PM, Healthcare, Government)')
    console.log('  - Structured metadata (domain, product, goal)')
    console.log('  - Detailed capability extraction')
    console.log('  - Modular capability descriptions')
    console.log('  - Rich embeddings combining all data')
    
  } catch (error) {
    console.error('❌ Error generating search index:', error)
    process.exit(1)
  }
}

// Run the script
if (require.main === module) {
  generateSearchIndex()
}

module.exports = { generateSearchIndex } 