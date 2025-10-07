const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

// Initialize OpenAI client
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

const SUMMARIES_FILE = path.join(__dirname, '..', 'src', 'data', 'project-summaries.json');
const CASE_STUDIES_DIR = path.join(__dirname, '..', 'src', 'case-studies');

// Simple markdown stripper
function stripMarkdown(text) {
  return text
    // Remove JSX/React components
    .replace(/<[^>]+>/g, '')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove headers
    .replace(/#{1,6}\s+/g, '')
    // Remove bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove horizontal rules
    .replace(/---+/g, '')
    // Remove list markers
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Extract text content from markdown
function extractTextFromMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract frontmatter and body
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return '';
  
  const [, frontmatter, body] = frontmatterMatch;
  
  // Parse frontmatter to get title, caption, client
  const title = frontmatter.match(/title:\s*['"]?(.+?)['"]?\n/)?.[1] || '';
  const caption = frontmatter.match(/caption:\s*['"]?(.+?)['"]?\n/)?.[1] || '';
  const client = frontmatter.match(/client:\s*['"]?(.+?)['"]?\n/)?.[1] || '';
  
  // Strip markdown from body
  const plainText = stripMarkdown(body);
  
  // Combine title, caption, client, and body text
  return `Title: ${title}\nClient: ${client}\nCaption: ${caption}\n\nContent:\n${plainText}`;
}

// Generate structured data for a project
async function generateStructuredData(projectSlug, projectText) {
  if (!openai) {
    console.warn(`⚠️  No OpenAI API key, skipping data extraction for ${projectSlug}`);
    return null;
  }
  
  try {
    console.log(`📝 Extracting structured data for ${projectSlug}...`);
    
    // Truncate if too long (max ~6000 words to stay under token limits)
    const truncatedText = projectText.split(/\s+/).slice(0, 6000).join(' ');
    
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        {
          role: 'system',
          content: `You are an expert at analyzing case studies and extracting key structured data. Extract the most important and convincing details in a structured JSON format.

Return JSON with these fields:
{
  "keyMetrics": ["Array of specific statistics with numbers/percentages, e.g., '160 million users', '40% time reduction'"],
  "technologies": ["Array of concrete technologies/methods used, e.g., 'AI/NLP', 'React', 'FHIR integration'"],
  "deliverables": ["Array of tangible artifacts created, e.g., 'Clinician dashboard', 'Patient portal'"],
  "problemStatement": "Brief 1-2 sentence description of the core problem addressed",
  "solutionStatement": "Brief 1-2 sentence description of how it was solved",
  "businessValue": "Specific business impact or value delivered (1 sentence)",
  "targetUsers": "Who uses this system (1 sentence)"
}

CRITICAL:
- Only include details explicitly mentioned in the content
- Be specific with metrics (include actual numbers)
- List concrete technologies, not generic terms like "advanced" or "innovative"
- Keep descriptions concise but impactful
- If information not available, use empty strings or empty arrays
- NO marketing fluff or generic phrases`
        },
        {
          role: 'user',
          content: `Extract structured data from this project:\n\n${truncatedText}`
        }
      ],
      response_format: { type: "json_object" }
    });
    
    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error(`❌ Error extracting data for ${projectSlug}:`, error.message);
    return null;
  }
}

// Main function
async function generateAllSummaries() {
  console.log('🚀 Starting project structured data extraction...\n');
  
  if (!openai) {
    console.error('❌ OPENAI_API_KEY not found. Please set it in your environment.');
    process.exit(1);
  }
  
  // Load existing summaries if they exist
  let existingSummaries = {};
  if (fs.existsSync(SUMMARIES_FILE)) {
    try {
      existingSummaries = JSON.parse(fs.readFileSync(SUMMARIES_FILE, 'utf-8'));
      console.log(`📦 Loaded ${Object.keys(existingSummaries).length} existing summaries\n`);
    } catch (error) {
      console.warn('⚠️  Could not load existing summaries, starting fresh\n');
    }
  }
  
  // Get all case study files
  const files = fs.readdirSync(CASE_STUDIES_DIR)
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'));
  
  console.log(`📚 Found ${files.length} case study files\n`);
  
  const summaries = { ...existingSummaries };
  let generated = 0;
  let skipped = 0;
  
  for (const file of files) {
    const projectSlug = file.replace(/\.(mdx?|md)$/, '');
    
    // Skip if summary already exists
    if (summaries[projectSlug]) {
      console.log(`✓ ${projectSlug} (cached)`);
      skipped++;
      continue;
    }
    
    try {
      const filePath = path.join(CASE_STUDIES_DIR, file);
      const projectText = await extractTextFromMarkdown(filePath);
      
      if (!projectText) {
        console.warn(`⚠️  Could not extract text from ${projectSlug}`);
        continue;
      }
      
      const structuredData = await generateStructuredData(projectSlug, projectText);
      
      if (structuredData) {
        summaries[projectSlug] = {
          ...structuredData,
          generatedAt: new Date().toISOString(),
          slug: projectSlug
        };
        generated++;
        
        // Save after each successful generation to avoid losing progress
        fs.writeFileSync(SUMMARIES_FILE, JSON.stringify(summaries, null, 2));
        
        // Rate limiting: wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`❌ Error processing ${projectSlug}:`, error.message);
    }
  }
  
  console.log(`\n✅ Structured data extraction complete!`);
  console.log(`   Generated: ${generated}`);
  console.log(`   Cached: ${skipped}`);
  console.log(`   Total: ${Object.keys(summaries).length}`);
  console.log(`\n📁 Data saved to: ${SUMMARIES_FILE}`);
}

// Run if called directly
if (require.main === module) {
  generateAllSummaries().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { generateAllSummaries };

