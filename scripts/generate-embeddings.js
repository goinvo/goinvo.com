const fs = require('fs').promises
const path = require('path')
const crypto = require('crypto')
const OpenAI = require('openai')

console.log('🔄 Script version: Updated with brand voice guidelines and webpage element hallucination prevention')
console.log('📁 Output will be saved to: public/search-index.json')

// Load environment variables from .env file
const envPath = path.join(__dirname, '..', '.env')
try {
  if (require('fs').existsSync(envPath)) {
    require('dotenv').config({ path: envPath })
  } else {
    // Check for .env.local as an alternative
    const envLocalPath = path.join(__dirname, '..', '.env.local')
    if (require('fs').existsSync(envLocalPath)) {
      require('dotenv').config({ path: envLocalPath })
    }
  }
} catch (error) {
  // dotenv might not be installed, that's okay
}

// Configuration
const forceRegeneration = process.argv.includes('--force')
const CACHE_FILE = path.join(__dirname, '..', '.embeddings-cache', 'cache-new.json')
const hasOpenAIKey = !!process.env.OPENAI_API_KEY

// Low confidence entries tracking
const lowConfidenceEntries = []

// Parse command line arguments
function parseArgs() {
  const args = {
    id: null,
    type: null,
    fileInput: null,
    force: forceRegeneration
  }
  
  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i]
    
    // Handle --id with equals sign
    if (arg.startsWith('--id=')) {
      args.id = arg.split('=')[1]
    }
    // Handle --id with space
    else if (arg === '--id' && i + 1 < process.argv.length) {
      args.id = process.argv[i + 1]
      i++ // Skip the next argument since we've consumed it
    }
    // Handle --type with equals sign
    else if (arg.startsWith('--type=')) {
      args.type = arg.split('=')[1]
    }
    // Handle --type with space
    else if (arg === '--type' && i + 1 < process.argv.length) {
      args.type = process.argv[i + 1]
      i++
    }
    // Handle --file-input with equals sign
    else if (arg.startsWith('--file-input=')) {
      args.fileInput = arg.split('=')[1]
    }
    // Handle --file-input with space
    else if (arg === '--file-input' && i + 1 < process.argv.length) {
      args.fileInput = process.argv[i + 1]
      i++
    }
  }
  
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

// Technical terms that should not appear in non-technical content
const TECHNICAL_TERMS_BLACKLIST = {
  'history-timeline': [
    'tensorflow', 'django', 'react', 'angular', 'vue', 'python', 'java',
    'api', 'database', 'cloud computing', 'machine learning', 'predictive modeling',
    'data compression', 'algorithms', 'frameworks', 'temporal physics',
    'api development', 'cloud-based', 'software architecture'
  ],
  'company-info': [
    'tensorflow', 'django', 'predictive modeling', 'data compression',
    'machine learning', 'temporal physics', 'api development',
    'software architecture', 'cloud computing'
  ],
  'webpage-elements': [
    'divider component', 'layout design', 'header component', 'footer element',
    'navigation bar', 'sidebar widget', 'carousel component', 'modal dialog',
    'dropdown menu', 'accordion element', 'tab interface', 'breadcrumb navigation',
    'pagination component', 'tooltip element', 'popover widget', 'progress bar',
    'spinner component', 'alert box', 'badge element', 'card component'
  ]
}

// Function to calculate confidence score
function calculateConfidenceScore(text, contentType, projectTitle) {
  let confidence = 1.0
  
  // Check for hallucination indicators
  const textLower = text.toLowerCase()
  const blacklist = TECHNICAL_TERMS_BLACKLIST[contentType] || []
  
  // Always check for webpage elements
  const webpageElements = TECHNICAL_TERMS_BLACKLIST['webpage-elements']
  webpageElements.forEach(element => {
    if (textLower.includes(element)) {
      confidence -= 0.3
      console.warn(`    ⚠️  Found webpage element "${element}" in description - this is about page design, not project work`)
    }
  })
  
  // Reduce confidence for each blacklisted term found
  blacklist.forEach(term => {
    if (textLower.includes(term)) {
      confidence -= 0.2
      console.warn(`    ⚠️  Found inappropriate term "${term}" in ${contentType} content`)
    }
  })
  
  // Check for overly generic or placeholder-like content
  const genericPhrases = [
    'leverages advanced',
    'cutting-edge technology',
    'state-of-the-art',
    'revolutionary approach',
    'temporal physics',
    'time machine',
    'time simulation',
    'predictive modeling',
    'machine learning models',
    'seamlessly integrated',
    'holistic approach',
    'paradigm shift',
    'synergistic solution'
  ]
  
  genericPhrases.forEach(phrase => {
    if (textLower.includes(phrase)) {
      confidence -= 0.1
    }
  })
  
  // Check for unnatural language patterns
  const unnaturalPatterns = [
    /\s{2,}/g, // Multiple spaces
    /tools through/i,
    /tools to [A-Z]/i, // "tools to Lack of" pattern
    /is a.*that.*that/i, // Repeated "that"
    /is an?.*is an?/i, // Repeated "is a/an"
    /\b(\w+)\s+\1\b/i, // Repeated words
    /healthcare design.*healthcare design/i, // Repeated phrases
  ]
  
  unnaturalPatterns.forEach(pattern => {
    if (pattern.test(text)) {
      confidence -= 0.15
      console.warn(`    ⚠️  Found unnatural language pattern in text`)
    }
  })
  
  // Check for made-up features (hallucinations)
  const hallucinationIndicators = [
    'hematology', 'cbc data', 'pathology reports', 'blood work',
    'therapy scheduling', 'session tracking', 
    'laboratory analytics', 'lab results',
    'telemetry data', 'vital signs monitoring',
    'radiology imaging', 'x-ray analysis',
    'prescription management', 'medication tracking'
  ]
  
  // Only check for hallucinations if these terms aren't in the actual project content
  const projectContent = `${projectTitle} ${contentType}`.toLowerCase()
  hallucinationIndicators.forEach(indicator => {
    if (textLower.includes(indicator) && !projectContent.includes(indicator)) {
      confidence -= 0.3
      console.warn(`    ⚠️  Potential hallucination: "${indicator}" not found in project content`)
    }
  })
  
  // Ensure confidence doesn't go below 0
  confidence = Math.max(0, confidence)
  
  // Track low confidence entries
  if (confidence < 0.7) {
    lowConfidenceEntries.push({
      project: projectTitle,
      contentType,
      confidence,
      text: text.substring(0, 200) + '...'
    })
  }
  
  return confidence
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
${project.content ? `Context: ${project.content.substring(0, 1000)}` : ''}

CRITICAL INSTRUCTIONS:
1. NEVER describe webpage elements, code components, or technical implementation details (no "Divider component", "React", "API endpoints", etc.)
2. ONLY describe the actual PROJECT WORK - what we built FOR THE CLIENT, not how our website is built
3. Focus on the HUMAN IMPACT and BUSINESS VALUE, not technical architecture

BRAND VOICE GUIDELINES:
- Human-centered and empathetic: Focus on real-world struggles and genuine human needs
- Direct and concise: Make each word purposeful and impactful, no fluff
- Action-oriented: Use active verbs that show what we DID and what changed
- Concrete and vivid: Create clear mental images with specific details
- Technical yet accessible: Balance precision with clarity for broader audiences

WORDS TO AVOID:
- Revolutionary, supercharge, delve, globally, game-changer
- Leveraging, synergy, paradigm, cutting-edge, state-of-the-art
- Innovative (unless describing something genuinely new)
- Generic business jargon and corporate speak

Generate a description that:
1. Speaks DIRECTLY to the ${scenario.role}'s specific needs and pain points
2. Includes CONCRETE details about what we did and the results achieved
3. Uses SPECIFIC metrics, timeframes, or outcomes when possible
4. Focuses on ${scenario.focus}
5. Tells a mini-story that connects the work to business value

GOOD EXAMPLES:
- CEO evaluating a consultancy: "In 8 weeks, we transformed 3M's manual coding process into an AI-powered platform that boosted efficiency by 200%, contributing to their $146M acquisition of CodeRyte."
- Healthcare Organization seeking expertise: "We designed a HIPAA-compliant coding interface that connected with 12 hospital EHR systems, cutting documentation time by 40% while maintaining full PHI security."
- Product Manager assessing capabilities: "Through day-long design-code cycles, we shipped 15 prototype iterations in 6 months, with each version tested in live hospital workflows."

BAD EXAMPLES TO AVOID:
- "We delivered an innovative solution that improved efficiency" (vague fluff)
- "Our expertise helped achieve better outcomes" (no specifics)
- "This project showcases our capabilities" (empty marketing)
- "Uses Divider component for visual separation" (describing webpage, not project)
- "Leverages cutting-edge technology" (jargon without substance)

The description should feel authentic and specific to THIS project's actual work and impact.`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 1500
      })
      
      const description = response.choices[0].message.content.trim()
      descriptions[scenario.role] = description
      
      // Calculate confidence score
      const confidence = calculateConfidenceScore(description, contentType, project.title)
      if (confidence < 0.7) {
        console.warn(`    ⚠️  Low confidence (${(confidence * 100).toFixed(0)}%) for ${scenario.role} description`)
        // Use fallback for low confidence descriptions
        descriptions[scenario.role] = generateFallbackDescription(project, scenario, contentType)
      }
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
        'CEO': `Our ${new Date().getFullYear() - 2009}+ years of proven design excellence demonstrate how we've consistently delivered transformative healthcare solutions that drive measurable business outcomes.`,
        'Product Manager': `We've evolved alongside emerging technologies for ${new Date().getFullYear() - 2009} years, bringing battle-tested design methodologies and deep domain expertise to every product challenge.`,
        'Healthcare Organization': `Our ${new Date().getFullYear() - 2009}-year journey in healthcare design has equipped us with unparalleled insights into clinical workflows, regulatory requirements, and patient-centered innovation.`,
        'Government Agency': `We bring ${new Date().getFullYear() - 2009}+ years of reliable partnership experience, delivering secure, compliant, and citizen-focused design solutions for public sector challenges.`,
        'Job Seeker': `Join our established yet innovative studio where ${new Date().getFullYear() - 2009} years of growth have created a collaborative environment that nurtures design talent and meaningful healthcare impact.`,
        'Culture Enthusiast': `Experience how our ${new Date().getFullYear() - 2009}-year commitment to open source and human-centered design has shaped a unique culture focused on transparency and positive social impact.`
      }
      
    case 'company-info':
      return {
        'CEO': `Our multidisciplinary team combines strategic design thinking with deep healthcare expertise to deliver solutions that transform business operations and improve patient outcomes.`,
        'Product Manager': `We bring together designers, researchers, and technologists who excel at translating complex healthcare challenges into intuitive, scalable product experiences.`,
        'Healthcare Organization': `Our specialized healthcare design team understands the nuances of clinical workflows, enabling us to create solutions that healthcare professionals actually want to use.`,
        'Government Agency': `We combine design excellence with robust security practices and compliance expertise to deliver public sector solutions that citizens trust and agencies depend on.`,
        'Job Seeker': `Discover a workplace where your design skills contribute to meaningful healthcare innovation alongside talented colleagues who value creativity, collaboration, and social impact.`,
        'Culture Enthusiast': `We embody open source principles in everything we do, fostering a transparent, inclusive culture where design serves the greater good of healthcare accessibility.`
      }
      
    case 'thought-leadership':
      return {
        'CEO': `Our strategic insights on ${project.title} reveal opportunities for healthcare transformation that align design innovation with measurable business value.`,
        'Product Manager': `We share practical methodologies from ${project.title} that help product teams navigate complex healthcare challenges while maintaining user-centered design principles.`,
        'Healthcare Organization': `Our vision for ${project.title} demonstrates how thoughtful design can revolutionize patient care delivery and clinical efficiency.`,
        'Government Agency': `We explore how ${project.title} can transform public service delivery through innovative design approaches that prioritize citizen needs and operational excellence.`,
        'Design Student/Professional': `Learn from our insights on ${project.title} to understand how strategic design thinking creates meaningful impact in complex healthcare environments.`,
        'General Public': `We make ${project.title} accessible by showing how good design directly improves healthcare experiences and outcomes for everyone.`
      }
      
    default:
      return {
        'CEO': `We delivered measurable business impact through ${project.title}, demonstrating our ability to transform complex challenges into strategic design solutions that drive ROI.`,
        'Product Manager': `Our work on ${project.title} showcases how we blend user research, design excellence, and technical feasibility to create products that users love and businesses value.`,
        'Healthcare Organization': `Through ${project.title}, we demonstrated our deep understanding of healthcare workflows, creating solutions that improve both patient outcomes and operational efficiency.`,
        'Government Agency': `${project.title} exemplifies our expertise in designing accessible, secure public sector solutions that meet compliance requirements while delighting citizens.`,
        'Design Professional': `${project.title} reveals our systematic approach to solving complex design challenges, from initial research through successful implementation and measurable results.`,
        'Merchandise Seeker': `The visual excellence of ${project.title} represents our commitment to creating healthcare design that's not just functional but genuinely inspiring and worthy of display.`
      }
  }
}

function generateFallbackDescription(project, scenario, contentType) {
  const templates = {
    'history-timeline': {
      'CEO': `Our ${new Date().getFullYear() - 2009}+ years of experience demonstrate consistent delivery of strategic design solutions that transform healthcare organizations and drive measurable ROI.`,
      'Product Manager': `We bring ${new Date().getFullYear() - 2009} years of product design excellence, helping teams navigate complex healthcare challenges with proven methodologies and deep domain expertise.`,
      'Healthcare Organization': `Our ${new Date().getFullYear() - 2009}-year healthcare focus has built unmatched expertise in clinical workflows, enabling us to design solutions that healthcare teams embrace and patients benefit from.`,
      'Government Agency': `We leverage ${new Date().getFullYear() - 2009}+ years of experience to deliver secure, compliant public sector solutions that improve citizen services while meeting strict regulatory requirements.`,
      'Job Seeker': `Join a studio with ${new Date().getFullYear() - 2009} years of sustained growth, where design talent thrives in a collaborative environment focused on meaningful healthcare innovation.`,
      'Culture Enthusiast': `Experience our ${new Date().getFullYear() - 2009}-year commitment to open source and human-centered design, creating a unique culture that values transparency and social impact.`
    },
    'company-info': {
      'CEO': `Our team combines strategic design leadership with healthcare domain expertise to deliver solutions that transform operations and create competitive advantage.`,
      'Product Manager': `We excel at translating complex requirements into elegant user experiences, bringing together research, design, and technical expertise to ship products that succeed.`,
      'Healthcare Organization': `Our healthcare-specialized team speaks your language, understanding clinical nuances to design solutions that seamlessly integrate into existing workflows.`,
      'Government Agency': `We deliver citizen-centered design with enterprise-grade security and compliance, helping agencies modernize services while maintaining public trust.`,
      'Job Seeker': `Discover a workplace where your skills contribute to healthcare innovation, collaborating with talented professionals who share your passion for meaningful design.`,
      'Culture Enthusiast': `We practice radical transparency and open source collaboration, building a culture where design serves the public good and everyone's voice matters.`
    },
    'thought-leadership': {
      'CEO': `Our insights on ${project.title} reveal strategic opportunities to leverage design for competitive advantage and operational transformation.`,
      'Product Manager': `We share actionable methodologies from ${project.title} that help product teams build better healthcare solutions faster and with greater user adoption.`,
      'Healthcare Organization': `Our vision for ${project.title} demonstrates practical approaches to improving patient outcomes while reducing operational complexity.`,
      'Government Agency': `We explore how ${project.title} enables public sector innovation that improves citizen experiences while maintaining security and compliance.`,
      'Design Student/Professional': `Learn from ${project.title} how strategic design thinking creates real-world impact in complex healthcare and technology environments.`,
      'General Public': `We translate ${project.title} into practical insights showing how thoughtful design makes healthcare more accessible and effective for everyone.`
    },
    'default': {
      'CEO': `We transformed ${project.client ? project.client + "'s" : 'our client\'s'} operations through strategic design, delivering solutions that drive efficiency, reduce costs, and improve outcomes.`,
      'Product Manager': `Our expertise in ${project.categories.length > 0 ? project.categories[0] : 'healthcare design'} enabled us to ship ${project.title} on time, creating user experiences that drive adoption and satisfaction.`,
      'Healthcare Organization': `We brought clinical insight to ${project.title}, designing solutions that healthcare professionals actually use and patients genuinely benefit from.`,
      'Government Agency': `Through ${project.title}, we demonstrated our ability to deliver citizen-centered solutions that meet strict compliance requirements while improving service delivery.`,
      'Design Professional': `${project.title} showcases our systematic design process, from user research through implementation, delivering measurable improvements in user experience.`,
      'Merchandise Seeker': `The award-worthy visual design of ${project.title} reflects our commitment to creating healthcare solutions that inspire through both form and function.`
    }
  }
  
  const typeTemplates = templates[contentType] || templates['default']
  return typeTemplates[scenario.role] || `We deliver strategic design solutions that transform healthcare experiences and drive measurable business outcomes.`
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
async function extractProjectCapabilities(project, contentType) {
  if (!hasOpenAIKey) {
    return extractProjectCapabilitiesFallback(project, contentType)
  }
  
  // Skip capability extraction for non-technical content
  if (['history-timeline', 'company-info'].includes(contentType)) {
    console.log('    ℹ️ Skipping capability extraction for non-technical content')
    return {
      techniques: [],
      skills: [],
      frameworks: [],
      technicalImplementation: [],
      domainExpertise: [],
      businessOutcomes: []
    }
  }

  const prompt = `Analyze this design project and extract comprehensive capabilities:

Project: ${project.title}
Client: ${project.client}
Caption: ${project.caption}
Content: ${project.content.substring(0, 2000)}...

CRITICAL: Extract ONLY capabilities from the actual PROJECT WORK - what we built for the CLIENT.
NEVER extract:
- Webpage implementation details (Divider component, layout structures)
- How the case study page itself is built
- Generic web development terms unless they were part of the CLIENT PROJECT

Extract:
1. Techniques Used: Specific design/development techniques used IN THE PROJECT
2. Skills Demonstrated: Actual skills shown in the CLIENT WORK
3. Frameworks/Methods: Design frameworks or methodologies applied TO THE PROJECT
4. Technical Implementation: Technologies, languages, platforms used FOR THE CLIENT
5. Domain Expertise: Specific domain knowledge demonstrated IN THE PROJECT
6. Business Outcomes: Business results or value delivered TO THE CLIENT

Be specific and extract actual details from the project work, not webpage implementation.
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
    // Replace \' with '
    result = result.replace(/\\'/g, "'")
    // Replace \" with "
    result = result.replace(/\\"/g, '"')
    // Fix double-escaped backslashes
    result = result.replace(/\\\\/g, '\\')
    // Remove any control characters
    result = result.replace(/[\x00-\x1F\x7F]/g, '')
    
    try {
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
    } catch (parseError) {
      console.error(`JSON parse error for ${project.id}:`, parseError)
      console.error('Raw response:', result.substring(0, 500) + '...')
      throw parseError
    }
  } catch (error) {
    console.error(`Error extracting capabilities for ${project.id}:`, error)
    return extractProjectCapabilitiesFallback(project, contentType)
  }
}

// Fallback capability extraction
function extractProjectCapabilitiesFallback(project, contentType) {
  // Skip capability extraction for non-technical content
  if (['history-timeline', 'company-info'].includes(contentType)) {
    return {
      techniques: [],
      skills: [],
      frameworks: [],
      technicalImplementation: [],
      domainExpertise: [],
      businessOutcomes: []
    }
  }
  
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
async function generateModularDescriptions(project, capabilities, contentType) {
  if (!hasOpenAIKey) {
    console.log('    ℹ️ No OpenAI API key found, using fallback descriptions')
    return generateModularDescriptionsFallback(project, capabilities, contentType)
  }
  
  // Skip for non-technical content
  if (['history-timeline', 'company-info'].includes(contentType)) {
    return {}
  }

  // Skip if no capabilities to describe
  const hasCapabilities = Object.values(capabilities).some(arr => Array.isArray(arr) && arr.length > 0)
  if (!hasCapabilities) {
    console.log('    ℹ️ No capabilities found to generate descriptions for')
    return {}
  }

  const prompt = `Generate specific, modular descriptions for this project's capabilities:

Project: ${project.title}
Client: ${project.client || 'GoInvo'}
Caption: ${project.caption}
Context: ${project.content ? project.content.substring(0, 1500) : 'No additional context'}

Capabilities:
- Techniques: ${Array.isArray(capabilities.techniques) ? capabilities.techniques.join(', ') : ''}
- Skills: ${Array.isArray(capabilities.skills) ? capabilities.skills.join(', ') : ''}
- Frameworks: ${Array.isArray(capabilities.frameworks) ? capabilities.frameworks.join(', ') : ''}
- Technical: ${Array.isArray(capabilities.technicalImplementation) ? capabilities.technicalImplementation.join(', ') : ''}
- Domain: ${Array.isArray(capabilities.domainExpertise) ? capabilities.domainExpertise.join(', ') : ''}
- Outcomes: ${Array.isArray(capabilities.businessOutcomes) ? capabilities.businessOutcomes.join(', ') : ''}

BRAND VOICE GUIDELINES:
- Human-centered and direct: Focus on real impact, not abstract concepts
- Action-oriented: Use active verbs showing what we DID and what CHANGED
- Concrete details: Include specific numbers, timeframes, and outcomes
- Technical yet accessible: Explain complex work in clear terms

WORDS TO AVOID:
- Leveraged, utilized, innovative, revolutionary, cutting-edge, spearheaded
- Synergy, paradigm, holistic, seamless (unless truly accurate)
- Generic corporate jargon

CRITICAL: Generate CONCRETE, SPECIFIC descriptions that tell a story about HOW things were done and WHAT results were achieved.

GOOD EXAMPLES OF WHAT WE WANT:

Techniques:
- Real-time: "During the 8-week proof-of-concept, we built real-time feedback loops into the coding interface—design updates after each user session—so hospital coders saw instant improvements with every test."
- Prototyping: "We ran day-long design-code cycles—15 prototype iterations in 6 months—with each UI change tested immediately in hospital workflows."

Technical Implementation:
- API: "We built an API sync layer that pulled real-time coding data from hospital EHR systems and displayed diagnoses in the UI—no manual exports or imports needed."
- Web: "The web platform enabled distributed coder teams across 12 hospitals to log in, collaborate, and code together with zero local installation."

Domain Expertise:
- Healthcare: "Our understanding of HIPAA workflows, diagnosis-coding standards, and hospital billing let the interface slot directly into a $4B revenue process."
- HIPAA: "We designed automatic session timeouts, user access logging, and encrypted endpoints—meeting HIPAA requirements without adding friction for coding staff."

Business Outcomes:
- Efficiency: "Memorial Hermann saw 200% efficiency gains after 8 weeks of use, saving hours of manual effort per coder daily."
- Savings: "By turning backlogs into just-in-time processes, hospitals cut overtime costs and reduced coder headcount."
- Adoption: "The POC became a 12-week full implementation, won Memorial Hermann as a partner, and rolled out to 250+ locations—leading to 3M's $146M acquisition."

BAD EXAMPLES TO AVOID:
- "We applied real-time techniques to create more effective solutions" (vague)
- "Leveraged API for optimal performance" (jargon without specifics)
- "Our healthcare expertise enabled exceptional results" (empty claims)
- "Achieved measurable improvements in efficiency" (what improvements?)

KEY REQUIREMENTS:
1. Include SPECIFIC timeframes (8 weeks, 6 months, day-long cycles)
2. Add CONCRETE metrics when possible (200% improvement, 250+ locations, hours saved)
3. Describe the ACTUAL implementation (API sync layer, real-time feedback, automatic timeouts)
4. Explain the REAL impact (eliminated manual effort, reduced costs, doubled adoption)
5. Tell a mini-story in each description - what we built, how it worked, why it mattered

Make reasonable inferences based on project context to create plausible, specific details. Each description should be 1-2 sentences painting a clear picture of work done and value delivered.

Return as JSON with capability categories as keys, each containing an array of {skill, description} objects.
Return ONLY valid JSON, no additional text.`

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
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
    return generateModularDescriptionsFallback(project, capabilities, contentType)
  }
}

// Fallback modular description generation
function generateModularDescriptionsFallback(project, capabilities, contentType) {
  // Skip for non-technical content
  if (['history-timeline', 'company-info'].includes(contentType)) {
    return {}
  }
  
  const descriptions = {}
  
  // Fix title to avoid space before 's
  const projectTitle = project.title.trim()
  
  // Define varied templates for each category
  const templates = {
    techniques: [
      (skill, title) => `We implemented ${skill} capabilities in ${title}, enabling instant updates and feedback loops that improved user workflows.`,
      (skill, title) => `${title} leveraged our ${skill} approach through iterative design cycles, testing each change in real-world scenarios.`,
      (skill, title) => `Using ${skill} methodologies, we built core features in ${title} that reduced manual processes and increased automation.`,
      (skill, title) => `Our ${skill} implementation in ${title} created measurable improvements in system performance and user satisfaction.`,
      (skill, title) => `We applied ${skill} techniques throughout ${title} to deliver faster response times and better user experiences.`
    ],
    skills: [
      (skill, title) => `Our ${skill} expertise shaped ${title} from concept to completion, ensuring best practices at every stage.`,
      (skill, title) => `We brought deep ${skill} knowledge to ${title}, solving complex challenges with proven methodologies.`,
      (skill, title) => `${title} benefited from our team's ${skill} capabilities, delivering features that exceeded client expectations.`,
      (skill, title) => `Our proficiency in ${skill} enabled ${title} to achieve its ambitious goals on schedule and within scope.`,
      (skill, title) => `We applied industry-leading ${skill} practices in ${title}, resulting in a robust and scalable solution.`
    ],
    frameworks: [
      (skill, title) => `We structured ${title} using ${skill} methodology, ensuring consistent quality and maintainability.`,
      (skill, title) => `${title} was architected following ${skill} principles, creating a foundation for future growth.`,
      (skill, title) => `The ${skill} framework guided our approach to ${title}, delivering organized and efficient workflows.`,
      (skill, title) => `We implemented ${skill} best practices throughout ${title}, improving team collaboration and output quality.`,
      (skill, title) => `${skill} methodology shaped ${title}'s development process, reducing risks and accelerating delivery.`
    ],
    technicalImplementation: [
      (skill, title) => `${title} was built with ${skill} integration at its core, enabling seamless data flow across systems.`,
      (skill, title) => `We implemented ${title} using ${skill} architecture for reliability and performance at scale.`,
      (skill, title) => `${skill} powers the technical foundation of ${title}, supporting thousands of concurrent users.`,
      (skill, title) => `We chose ${skill} for ${title} to ensure compatibility with existing infrastructure and future needs.`,
      (skill, title) => `${title} leverages ${skill} technology to deliver responsive performance across all devices.`
    ],
    domainExpertise: [
      (skill, title) => `Our deep ${skill} knowledge ensured ${title} met all regulatory requirements while maintaining usability.`,
      (skill, title) => `We navigated complex ${skill} challenges in ${title}, delivering compliant solutions without compromising user experience.`,
      (skill, title) => `${title} required specialized ${skill} expertise to balance technical requirements with practical workflows.`,
      (skill, title) => `Our understanding of ${skill} workflows shaped ${title} into a tool that professionals actually want to use.`,
      (skill, title) => `${skill} domain knowledge allowed us to anticipate and solve real-world challenges in ${title}.`
    ],
    businessOutcomes: [
      (skill, title) => `${title} delivered significant ${skill} improvements, reducing operational costs and increasing productivity.`,
      (skill, title) => `We helped ${title} achieve measurable ${skill} gains through strategic design and implementation choices.`,
      (skill, title) => `${title} saw immediate ${skill} benefits after launch, validating our user-centered approach.`,
      (skill, title) => `Our work on ${title} resulted in enhanced ${skill} metrics that exceeded initial projections.`,
      (skill, title) => `${title} achieved its ${skill} goals through careful planning and iterative refinement.`
    ]
  }
  
  Object.keys(capabilities).forEach(category => {
    descriptions[category] = []
    if (Array.isArray(capabilities[category]) && capabilities[category].length > 0) {
      capabilities[category].forEach((skill, index) => {
        // Get templates for this category
        const categoryTemplates = templates[category] || templates.techniques
        
        // Select a template based on index to ensure variety
        const templateIndex = index % categoryTemplates.length
        const templateFunction = categoryTemplates[templateIndex]
        
        // Generate description using the template function
        const description = templateFunction(skill, projectTitle)
        
        descriptions[category].push({
          skill: skill,
          description: description
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
  
  // Check for OpenAI API key and warn if not set
  if (!hasOpenAIKey) {
    console.log('⚠️  WARNING: No OpenAI API key found!')
    console.log('   Without an API key, descriptions will use generic templates instead of AI-generated content.')
    console.log('')
    console.log('   To enable AI generation:')
    console.log('   1. Create a .env file in the project root')
    console.log('   2. Add: OPENAI_API_KEY=your-api-key-here')
    console.log('   3. Get your API key from: https://platform.openai.com/api-keys')
    console.log('')
    console.log('   Alternative: Set the environment variable directly:')
    console.log('   Windows: set OPENAI_API_KEY=your-api-key-here')
    console.log('   Mac/Linux: export OPENAI_API_KEY=your-api-key-here')
    console.log('')
  } else {
    console.log('✅ OpenAI API key detected - AI generation enabled')
  }
  
  const args = parseArgs()
  
  // Load cache
  const cache = await loadCache()
  
  // Load all projects
  const allCaseStudies = await loadCaseStudies(cache)
  const allFeatures = await loadFeatures(cache)
  
  let allProjects = [...allCaseStudies, ...allFeatures]
  let updatedProjects = []
  
  // Filter to specific project if --id is provided
  if (args.id) {
    const filteredProjects = allProjects.filter(p => p.id === args.id)
    if (filteredProjects.length === 0) {
      console.error(`❌ No project found with id: ${args.id}`)
      process.exit(1)
    }
    console.log(`📌 Processing only project: ${args.id}`)
    console.log(`   Found ${filteredProjects.length} matching project(s)`)
    allProjects = filteredProjects  // Use only the filtered project
    
    // When using --id with --force, only force update the specific project
    allProjects.forEach(p => {
      p.needsUpdate = true
    })
  }
  
  console.log(`📊 Total projects to process: ${allProjects.length}`)
  
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
        const capabilities = await extractProjectCapabilities(project, contentType)
        
        // Generate modular descriptions (v2 approach)
        console.log('  📝 Generating modular descriptions...')
        const modularDescriptions = await generateModularDescriptions(project, capabilities, contentType)
        
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
    
    // Update just this project in the existing search index
    try {
      const searchIndexPath = path.join(__dirname, '..', 'public', 'search-index.json')
      const existingIndex = JSON.parse(await fs.readFile(searchIndexPath, 'utf-8'))
      
      // Find and update the specific project
      const projectIndex = existingIndex.findIndex(p => p.id === args.id)
      if (projectIndex !== -1) {
        const project = updatedProjects[0]
        existingIndex[projectIndex] = {
          id: project.id,
          type: project.type,
          title: project.title,
          client: project.client,
          categories: project.categories,
          caption: project.caption,
          slug: project.slug || project.link || '',
          image: project.image || '',
          buyerDescriptions: project.buyerDescriptions,
          capabilities: project.capabilities,
          modularDescriptions: project.modularDescriptions
        }
        
        // Write updated index
        await fs.writeFile(searchIndexPath, JSON.stringify(existingIndex, null, 2))
        console.log(`📝 Updated ${args.id} in search index`)
      } else {
        console.warn(`⚠️  Project ${args.id} not found in existing search index`)
      }
    } catch (error) {
      console.error('❌ Failed to update search index:', error.message)
      console.log('💡 Run without --id flag to regenerate the full index')
    }
    
    return
  }
  
  // Continue with full search index generation...
  console.log(`\n📊 Processed ${updatedProjects.length} projects`)
  
  // Generate the search index
  console.log('\n🔍 Generating search index...')
  
  // Use the filtered projects list for generating search index
  const projectsForIndex = args.id ? updatedProjects : allProjects
  
  const searchIndex = projectsForIndex.map(project => {
    const projectData = updatedProjects.find(p => p.id === project.id) || project
    const cacheKey = project.type === 'case-study' ? project.id : `feature-${project.id}`
    const buyerDescriptions = projectData.buyerDescriptions || cache[cacheKey]?.buyerDescriptions || {}
    const capabilities = projectData.capabilities || cache[cacheKey]?.capabilities || {}
    const modularDescriptions = projectData.modularDescriptions || cache[cacheKey]?.modularDescriptions || {}
    
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
  
  // Report low confidence entries
  if (lowConfidenceEntries.length > 0) {
    console.log(`\n⚠️  Found ${lowConfidenceEntries.length} low confidence descriptions:`)
    lowConfidenceEntries.forEach(entry => {
      console.log(`   - ${entry.project} (${entry.contentType}): ${(entry.confidence * 100).toFixed(0)}% confidence`)
      console.log(`     ${entry.text}`)
    })
    console.log('\n💡 Tip: Review these descriptions manually and consider regenerating with --force')
  }
}

// Run the script
main().catch(console.error)

module.exports = { main }