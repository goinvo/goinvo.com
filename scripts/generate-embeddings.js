const fs = require('fs').promises
const path = require('path')
const crypto = require('crypto')
const OpenAI = require('openai')

// Configuration
const forceRegeneration = process.argv.includes('--force')
const CACHE_FILE = path.join(__dirname, '..', '.embeddings-cache', 'cache.json')
const hasOpenAIKey = !!process.env.OPENAI_API_KEY

// Parse command line arguments
function parseArgs() {
  const args = {
    id: null,
    type: null,
    fileInput: null,
    force: forceRegeneration
  }
  
  process.argv.forEach(arg => {
    if (arg.startsWith('--id=')) {
      args.id = arg.split('=')[1]
    } else if (arg.startsWith('--type=')) {
      args.type = arg.split('=')[1]
    } else if (arg.startsWith('--file-input=')) {
      args.fileInput = arg.split('=')[1]
    }
  })
  
  return args
}

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

// Function to automatically detect content type
function detectContentType(project) {
  const { id, title, content, categories = [] } = project
  const lowerTitle = title.toLowerCase()
  const lowerId = id.toLowerCase()
  
  // Check if it's a history or timeline page (but not a case study)
  if (project.type !== 'case-study') {
    if (lowerId.includes('timeline') || lowerId.includes('history') ||
        lowerTitle.includes('timeline') || lowerTitle.includes('history') ||
        lowerTitle.includes('oral history')) {
      return 'history-timeline'
    }
  }
  
  // Check for other specific types
  if (lowerId.includes('about') || lowerId.includes('team')) {
    return 'company-info'
  }
  
  if (lowerId.includes('vision') || categories.includes('Vision')) {
    return 'thought-leadership'
  }
  
  if (lowerId.includes('blog') || categories.includes('Blog')) {
    return 'blog-post'
  }
  
  // Default to case-study for actual case studies, feature for others
  return project.type === 'case-study' ? 'case-study' : 'feature'
}

// Function to generate buyer descriptions based on content type
async function generateBuyerDescriptions(project, contentType, customContent = null) {
  // Use custom content if provided via file input
  const effectiveContent = customContent || project.content
  
  if (!hasOpenAIKey) {
    return generateBuyerDescriptionsFallback(project, contentType)
  }

  // Define scenarios based on content type
  let scenarios = []
  
  switch (contentType) {
    case 'history-timeline':
      scenarios = [
        {
          role: 'CEO',
          context: 'evaluating a design consultancy\'s experience and stability',
          focus: 'years of experience, company evolution, longevity, and proven track record'
        },
        {
          role: 'Product Manager',
          context: 'assessing design partner cultural fit and innovation capability',
          focus: 'company culture, innovation history, adaptation to new technologies, and team values'
        },
        {
          role: 'Healthcare Organization',
          context: 'looking for experienced healthcare design partners',
          focus: 'healthcare experience timeline, long-term client relationships, and industry expertise evolution'
        },
        {
          role: 'Government Agency',
          context: 'seeking established design partners with proven track record',
          focus: 'company stability, years in business, public sector experience, and reliable partnership history'
        },
        {
          role: 'Job Seeker',
          context: 'researching company history and culture before applying',
          focus: 'company growth, culture evolution, work environment changes, and long-term stability as an employer'
        },
        {
          role: 'Culture Enthusiast',
          context: 'exploring what makes GoInvo unique',
          focus: 'company values, human-centered approach, team dynamics, and creative culture over the years'
        }
      ]
      break
      
    case 'company-info':
      scenarios = [
        {
          role: 'CEO',
          context: 'learning about a potential design partner',
          focus: 'company values, team expertise, leadership, and strategic capabilities'
        },
        {
          role: 'Product Manager',
          context: 'evaluating team composition and capabilities',
          focus: 'team skills, collaboration approach, design process, and technical expertise'
        },
        {
          role: 'Healthcare Organization',
          context: 'assessing healthcare design expertise',
          focus: 'healthcare team experience, domain knowledge, and specialized capabilities'
        },
        {
          role: 'Government Agency',
          context: 'evaluating vendor capabilities and compliance',
          focus: 'team certifications, security clearances, government experience, and compliance standards'
        },
        {
          role: 'Job Seeker',
          context: 'learning about work culture and opportunities',
          focus: 'team culture, work environment, growth opportunities, benefits, and what it\'s like to work at GoInvo'
        },
        {
          role: 'Culture Enthusiast',
          context: 'discovering GoInvo\'s unique approach',
          focus: 'company mission, values, team dynamics, open source contributions, and community involvement'
        }
      ]
      break
      
    case 'thought-leadership':
      scenarios = [
        {
          role: 'CEO',
          context: 'exploring innovative design thinking and future trends',
          focus: 'strategic insights, industry vision, innovation leadership, and transformative ideas'
        },
        {
          role: 'Product Manager',
          context: 'seeking cutting-edge design approaches',
          focus: 'innovative methodologies, emerging technologies, design trends, and practical applications'
        },
        {
          role: 'Healthcare Organization',
          context: 'looking for healthcare transformation insights',
          focus: 'healthcare innovation, patient-centered design vision, future of care delivery'
        },
        {
          role: 'Government Agency',
          context: 'exploring public sector innovation',
          focus: 'civic innovation, citizen engagement strategies, digital transformation insights'
        },
        {
          role: 'Design Student/Professional',
          context: 'seeking inspiration and learning resources',
          focus: 'design philosophy, methodology insights, industry best practices, and educational value'
        },
        {
          role: 'General Public',
          context: 'interested in healthcare and design innovation',
          focus: 'accessible insights, real-world impact, future possibilities, and how design affects daily life'
        }
      ]
      break
      
    default: // case-study or feature
      scenarios = [
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
        },
        {
          role: 'Design Professional',
          context: 'studying successful design implementations',
          focus: 'design methodology, problem-solving approach, technical execution, and creative solutions'
        },
        {
          role: 'Merchandise Seeker',
          context: 'looking for prints or products related to this work',
          focus: 'visual impact, artistic merit, availability of prints or merchandise, and unique design elements'
        }
      ]
  }

  const descriptions = {}

  for (const scenario of scenarios) {
    const prompt = `Generate a compelling 1-2 sentence description of this ${contentType === 'history-timeline' ? 'company history/timeline' : contentType === 'company-info' ? 'company information' : contentType === 'thought-leadership' ? 'thought leadership piece' : 'project'} tailored for a ${scenario.role} ${scenario.context}.

${contentType === 'history-timeline' ? 'Company History' : contentType === 'company-info' ? 'Company Info' : contentType === 'thought-leadership' ? 'Vision/Insight' : 'Project'}: ${project.title}
${project.client ? `Client: ${project.client}` : ''}
${project.caption ? `Description: ${project.caption}` : ''}
${project.categories.length > 0 ? `Categories: ${project.categories.join(', ')}` : ''}
${effectiveContent ? `\nContent excerpt: ${effectiveContent.substring(0, 1000)}...` : ''}

Focus on ${scenario.focus}. Make it specific and persuasive, highlighting relevant ${contentType === 'history-timeline' ? 'historical milestones and company evolution' : contentType === 'company-info' ? 'team capabilities and values' : contentType === 'thought-leadership' ? 'insights and vision' : 'outcomes and expertise'}.
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
      descriptions[scenario.role] = generateFallbackDescription(project, scenario, contentType)
    }
  }

  return descriptions
}

// Fallback buyer descriptions based on content type
function generateBuyerDescriptionsFallback(project, contentType) {
  switch (contentType) {
    case 'history-timeline':
      return {
        'CEO': `${project.title} showcases our ${new Date().getFullYear() - 2009} years of design excellence and continuous innovation in healthcare and emerging technologies.`,
        'Product Manager': `${project.title} demonstrates our evolution as a human-centered design studio, adapting to new technologies while maintaining our core values and culture.`,
        'Healthcare Organization': `${project.title} highlights our deep healthcare expertise developed over ${new Date().getFullYear() - 2009} years of dedicated healthcare design and innovation.`,
        'Government Agency': `${project.title} illustrates our established track record and reliability as a design partner with over a decade of successful project delivery.`,
        'Job Seeker': `${project.title} reveals our journey from startup to established studio, showcasing a stable, creative work environment where designers thrive and grow.`,
        'Culture Enthusiast': `${project.title} tells the story of our human-centered approach, open culture, and commitment to making healthcare more accessible through design.`
      }
      
    case 'company-info':
      return {
        'CEO': `${project.title} reveals our team's strategic capabilities and commitment to delivering transformative design solutions.`,
        'Product Manager': `${project.title} showcases our collaborative approach and multidisciplinary expertise in creating exceptional user experiences.`,
        'Healthcare Organization': `${project.title} demonstrates our specialized healthcare design team and deep domain expertise.`,
        'Government Agency': `${project.title} highlights our experienced team and commitment to secure, compliant design solutions.`,
        'Job Seeker': `${project.title} provides insight into our open, collaborative culture where creativity flourishes and every team member's voice matters.`,
        'Culture Enthusiast': `${project.title} captures our mission to humanize healthcare through open source design and transparent collaboration.`
      }
      
    case 'thought-leadership':
      return {
        'CEO': `${project.title} presents our strategic vision and innovative thinking on the future of design and technology.`,
        'Product Manager': `${project.title} explores cutting-edge design methodologies and practical insights for modern product development.`,
        'Healthcare Organization': `${project.title} offers transformative insights on the future of healthcare design and patient-centered innovation.`,
        'Government Agency': `${project.title} provides thought leadership on civic innovation and the future of public service design.`,
        'Design Student/Professional': `${project.title} shares valuable design insights and methodologies that inspire and educate the design community.`,
        'General Public': `${project.title} makes complex design and healthcare concepts accessible, showing how good design improves lives.`
      }
      
    default:
      return {
        'CEO': `${project.title} demonstrates our ability to deliver strategic value through innovative design solutions that drive business outcomes.`,
        'Product Manager': `${project.title} showcases our user-centered design process and expertise in creating exceptional product experiences.`,
        'Healthcare Organization': `${project.title} highlights our deep healthcare domain knowledge and commitment to improving patient outcomes through thoughtful design.`,
        'Government Agency': `${project.title} exemplifies our experience in public sector design, focusing on accessibility and civic engagement.`,
        'Design Professional': `${project.title} reveals our design methodology and problem-solving approach, offering insights for fellow designers.`,
        'Merchandise Seeker': `${project.title} features striking visual design elements that capture the essence of innovative healthcare solutions.`
      }
  }
}

function generateFallbackDescription(project, scenario, contentType) {
  const templates = {
    'history-timeline': {
      'CEO': `${project.title} demonstrates our ${new Date().getFullYear() - 2009}+ years of proven design excellence and strategic value delivery.`,
      'Product Manager': `${project.title} showcases our evolution and adaptability in design innovation over ${new Date().getFullYear() - 2009} years.`,
      'Healthcare Organization': `${project.title} illustrates our long-standing commitment to healthcare design excellence since 2009.`,
      'Government Agency': `${project.title} establishes our credibility as a reliable design partner with over a decade of experience.`,
      'Job Seeker': `${project.title} shows our growth story and the exciting opportunities to join a mature yet innovative design studio.`,
      'Culture Enthusiast': `${project.title} reveals the values and human-centered philosophy that have guided us for over ${new Date().getFullYear() - 2009} years.`
    },
    'company-info': {
      'CEO': `${project.title} highlights our strategic design capabilities and experienced team.`,
      'Product Manager': `${project.title} demonstrates our collaborative design process and technical expertise.`,
      'Healthcare Organization': `${project.title} showcases our healthcare-focused team and specialized capabilities.`,
      'Government Agency': `${project.title} presents our qualified team and commitment to public sector excellence.`,
      'Job Seeker': `${project.title} offers a glimpse into our creative workspace and the talented people who make GoInvo special.`,
      'Culture Enthusiast': `${project.title} embodies our open source ethos and dedication to improving lives through design.`
    },
    'thought-leadership': {
      'CEO': `${project.title} shares our strategic insights on design innovation and industry transformation.`,
      'Product Manager': `${project.title} explores innovative design approaches and emerging methodologies.`,
      'Healthcare Organization': `${project.title} presents our vision for the future of healthcare design and patient experience.`,
      'Government Agency': `${project.title} offers insights on civic innovation and public service transformation.`,
      'Design Student/Professional': `${project.title} provides educational insights and inspiration for the design community.`,
      'General Public': `${project.title} translates complex design concepts into accessible ideas that impact everyday life.`
    },
    'default': {
      'CEO': `${project.title} delivers strategic business value through innovative design that drives measurable outcomes and competitive advantage.`,
      'Product Manager': `${project.title} demonstrates our expertise in user-centered design and efficient product development processes.`,
      'Healthcare Organization': `${project.title} showcases our healthcare domain expertise and commitment to improving patient care through design.`,
      'Government Agency': `${project.title} exemplifies our public sector experience, delivering accessible and secure solutions for citizens.`,
      'Design Professional': `${project.title} offers valuable insights into our design process and creative problem-solving approach.`,
      'Merchandise Seeker': `${project.title} presents visually compelling design work that would make beautiful prints or products.`
    }
  }
  
  const typeTemplates = templates[contentType] || templates['default']
  return typeTemplates[scenario.role] || `${project.title} demonstrates our design expertise and commitment to delivering exceptional results.`
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
    
    // Fix common JSON escape issues
    result = result.replace(/\\\\/g, '\\')  // Fix double-escaped backslashes
    result = result.replace(/\\'/g, "'")    // Replace \' with '
    result = result.replace(/[\x00-\x1F\x7F]/g, '')  // Remove control characters
    
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
    
    // Fix common JSON escape issues
    result = result.replace(/\\\\/g, '\\')  // Fix double-escaped backslashes
    result = result.replace(/\\'/g, "'")    // Replace \' with '
    result = result.replace(/[\x00-\x1F\x7F]/g, '')  // Remove control characters
    
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
    
    // Fix common JSON escape issues
    result = result.replace(/\\\\/g, '\\')  // Fix double-escaped backslashes
    result = result.replace(/\\'/g, "'")    // Replace \' with '
    result = result.replace(/[\x00-\x1F\x7F]/g, '')  // Remove control characters
    
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

// Main function
async function main() {
  console.log('🚀 Starting embeddings generation...')
  
  const args = parseArgs()
  
  // Load cache
  const cache = await loadCache()
  
  // Load all projects
  const caseStudies = await loadCaseStudies(cache)
  const features = await loadFeatures(cache)
  
  let allProjects = [...caseStudies, ...features]
  let updatedProjects = []
  
  // Filter to specific project if --id is provided
  if (args.id) {
    allProjects = allProjects.filter(p => p.id === args.id)
    if (allProjects.length === 0) {
      console.error(`❌ No project found with id: ${args.id}`)
      process.exit(1)
    }
    console.log(`📌 Processing only project: ${args.id}`)
  }
  
  // Load custom content if --file-input is provided
  let customContent = null
  if (args.fileInput) {
    try {
      const filePath = path.resolve(args.fileInput)
      customContent = await fs.readFile(filePath, 'utf-8')
      console.log(`📄 Loaded custom content from: ${args.fileInput}`)
    } catch (error) {
      console.error(`❌ Failed to load file: ${args.fileInput}`, error.message)
      process.exit(1)
    }
  }
  
  // Process projects that need updates
  for (const project of allProjects) {
    const cacheKey = project.type === 'case-study' ? project.id : `feature-${project.id}`
    
    if (project.needsUpdate || args.id) {
      console.log(`\n📝 Processing: ${project.title} (${project.id})`)
      
      try {
        // Determine content type
        const contentType = args.type || detectContentType(project)
        console.log(`  📊 Content type: ${contentType}`)
        
        // Generate buyer descriptions (v1 approach)
        console.log('  👥 Generating buyer persona descriptions...')
        const buyerDescriptions = await generateBuyerDescriptions(project, contentType, customContent)
        
        // Extract project capabilities (v2 approach)
        console.log('  🔍 Extracting project capabilities...')
        const capabilities = await extractProjectCapabilities(project)
        
        // Generate modular descriptions (v2 approach)
        console.log('  📝 Generating modular descriptions...')
        const modularDescriptions = await generateModularDescriptions(project, capabilities)
        
        const updatedProject = {
          ...project,
          buyerDescriptions,
          capabilities,
          modularDescriptions,
          lastGenerated: new Date().toISOString()
        }
        
        // Update cache
        cache[cacheKey] = {
          contentHash: project.contentHash,
          buyerDescriptions,
          capabilities,
          modularDescriptions,
          lastGenerated: updatedProject.lastGenerated
        }
        
        updatedProjects.push(updatedProject)
        console.log('  ✅ Descriptions generated successfully')
      } catch (error) {
        console.error(`  ❌ Error processing ${project.title}:`, error)
      }
    } else {
      console.log(`⏭️  Skipping ${project.title} (cached)`)
      // Use cached data
      const cachedData = cache[cacheKey]
      updatedProjects.push({
        ...project,
        buyerDescriptions: cachedData.buyerDescriptions || {},
        capabilities: cachedData.capabilities || {},
        modularDescriptions: cachedData.modularDescriptions || {},
        lastGenerated: cachedData.lastGenerated
      })
    }
  }
  
  // If we processed a specific ID, we're done
  if (args.id) {
    await saveCache(cache)
    console.log('\n✅ Individual project processed successfully!')
    return
  }
  
  // Continue with full search index generation...
  console.log(`\n📊 Processed ${updatedProjects.length} projects`)
  
  // Generate the search index
  console.log('\n🔍 Generating search index...')
  const searchIndex = allProjects.map(project => {
    const projectData = updatedProjects.find(p => p.id === project.id) || project
    const buyerDescriptions = projectData.buyerDescriptions || cache[project.id]?.buyerDescriptions || {}
    const capabilities = projectData.capabilities || cache[project.id]?.capabilities || {}
    const modularDescriptions = projectData.modularDescriptions || cache[project.id]?.modularDescriptions || {}
    
    return {
      id: project.id,
      type: project.type,
      title: project.title,
      client: project.client,
      categories: project.categories,
      caption: project.caption,
      slug: project.slug || project.link || '',
      image: project.image || '',
      buyerDescriptions,
      capabilities,
      modularDescriptions
    }
  })
  
  // Write the search index
  const publicDir = path.join(__dirname, '..', 'public')
  await fs.mkdir(publicDir, { recursive: true })
  await fs.writeFile(
    path.join(publicDir, 'search-index.json'),
    JSON.stringify(searchIndex, null, 2)
  )
  
  // Save cache
  await saveCache(cache)
  
  console.log('✅ Search index generated successfully!')
  console.log(`📁 Output: public/search-index.json`)
  console.log(`📊 Total projects: ${searchIndex.length}`)
  console.log(`🔄 Updated: ${updatedProjects.length}`)
  console.log(`💾 Cached: ${searchIndex.length - updatedProjects.length}`)
}

// Run the script
main().catch(console.error)

module.exports = { main } 