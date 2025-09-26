require('dotenv').config()
const fs = require('fs')
const path = require('path')
const OpenAI = require('openai')

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Preset queries for each persona
const PRESET_QUERIES = {
  healthcare_executive: [
    'patient monitoring systems',
    'clinical decision support', 
    'health data analytics',
    'EHR integration',
    'compliance solutions'
  ],
  product_manager: [
    'user interface design',
    'UX best practices',
    'design system',
    'data visualization',
    'mobile health apps'
  ],
  researcher: [
    'research data management',
    'participant recruitment',
    'clinical trials platform',
    'research analytics',
    'consent management'
  ],
  government_official: [
    'civic technology',
    'citizen engagement platform',
    'government services',
    'public health solutions',
    'municipal software'
  ],
  startup_founder: [
    'AI healthcare solutions',
    'health tech innovation',
    'digital health platform',
    'scalable architecture',
    'MVP development'
  ]
}

// Load project data
async function loadProjects() {
  const searchIndexPath = path.join(__dirname, '../public/search-index.json')
  
  if (fs.existsSync(searchIndexPath)) {
    const data = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'))
    return data.projects || data
  }
  
  // Fallback: load from case studies
  const caseStudiesDir = path.join(__dirname, '../src/case-studies')
  const files = fs.readdirSync(caseStudiesDir).filter(f => f.endsWith('.mdx'))
  
  return files.map(file => {
    const slug = file.replace('.mdx', '')
    return {
      slug,
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      caption: `Case study for ${slug}`,
      categories: []
    }
  })
}

// Generate AI response for a preset query
async function generatePresetResponse(persona, personaContext, query, projects) {
  const projectSummaries = projects.slice(0, 15).map(p => ({
    title: p.title,
    caption: p.caption,
    categories: p.categories || [],
    slug: p.slug
  }))
  
  const systemPrompt = `You are an AI assistant helping users find relevant case studies. ${personaContext}
  
Your task is to:
1. Analyze the user's search query
2. Select the 3-5 most relevant projects from the provided list
3. For each selected project, write a compelling 2-3 sentence description explaining why it's relevant to the user's needs

Keep descriptions concise, specific, and focused on the value proposition for the persona.`

  const userPrompt = `Search query: "${query}"

Available projects:
${JSON.stringify(projectSummaries, null, 2)}

Please provide:
1. An array of selected project slugs (3-5 most relevant)
2. A description for each selected project explaining its relevance

Format your response as JSON:
{
  "selectedProjects": [
    {
      "slug": "project-slug",
      "description": "Why this project is relevant to the search query and persona needs"
    }
  ],
  "searchInsight": "Brief insight about what the user is looking for"
}`

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 800,
      response_format: { type: "json_object" }
    })
    
    return JSON.parse(response.choices[0].message.content)
  } catch (error) {
    console.error(`Error generating response for ${persona} - ${query}:`, error.message)
    return null
  }
}

// Personas with their contexts
const PERSONAS = {
  healthcare_executive: 'You are evaluating digital health solutions for a large hospital system. Focus on ROI, compliance, integration with existing systems, and patient outcomes.',
  product_manager: 'You are looking for UX/UI design inspiration and best practices for health tech products. Focus on user experience, design patterns, and product strategy.',
  researcher: 'You are searching for innovative research tools and data management platforms. Focus on data quality, research protocols, and participant engagement.',
  government_official: 'You are evaluating civic technology solutions for public sector modernization. Focus on citizen engagement, accessibility, and public value.',
  startup_founder: 'You are looking for proven design patterns and technical solutions to accelerate your health tech startup. Focus on scalability, innovation, and market fit.'
}

// Main function
async function main() {
  console.log('🤖 Pre-generating AI responses for preset personas...\n')
  
  // Check for API key
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY not found in environment variables')
    console.log('   Add OPENAI_API_KEY=your-api-key to .env file')
    process.exit(1)
  }
  
  // Load projects
  const projects = await loadProjects()
  console.log(`📁 Loaded ${projects.length} projects\n`)
  
  const cache = {}
  let totalGenerated = 0
  let totalFailed = 0
  
  // Generate responses for each persona and query
  for (const [persona, queries] of Object.entries(PRESET_QUERIES)) {
    console.log(`\n👤 Generating for ${persona}...`)
    cache[persona] = {}
    
    for (const query of queries) {
      console.log(`   🔍 Query: "${query}"`)
      
      const response = await generatePresetResponse(
        persona,
        PERSONAS[persona],
        query,
        projects
      )
      
      if (response) {
        cache[persona][query] = {
          response,
          generatedAt: new Date().toISOString()
        }
        totalGenerated++
        console.log(`      ✅ Generated successfully`)
      } else {
        totalFailed++
        console.log(`      ❌ Failed to generate`)
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
  
  // Save cache
  const cacheDir = path.join(__dirname, '../public')
  const cachePath = path.join(cacheDir, 'ai-preset-cache.json')
  
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
  }
  
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2))
  
  console.log('\n✨ Pre-generation complete!')
  console.log(`   ✅ Generated: ${totalGenerated} responses`)
  console.log(`   ❌ Failed: ${totalFailed} responses`)
  console.log(`   📁 Cache saved to: ${cachePath}`)
}

// Run the script
main().catch(error => {
  console.error('❌ Script failed:', error)
  process.exit(1)
}) 