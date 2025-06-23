const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const OpenAI = require('openai');
const matter = require('gray-matter');
const crypto = require('crypto');

// Load environment variables from .env file
require('dotenv').config();

// Parse command line arguments
const args = process.argv.slice(2);
const forceRegeneration = args.includes('--force') || args.includes('-f');
const showHelp = args.includes('--help') || args.includes('-h');

// Show help if requested
if (showHelp) {
  console.log(`
🧠 GoInvo Semantic Search - Embedding Generator

USAGE:
  npm run generate-embeddings              # Smart update (uses cache)
  npm run generate-embeddings:force        # Force regenerate all
  node scripts/generate-embeddings.js [OPTIONS]

OPTIONS:
  --force, -f    Force regeneration of all embeddings (ignore cache)
  --help,  -h    Show this help message

EXAMPLES:
  # Normal usage (smart caching)
  npm run generate-embeddings

  # Force regeneration (after system upgrades)
  npm run generate-embeddings:force

  # Direct script usage with force
  node scripts/generate-embeddings.js --force

COST ESTIMATES:
  • New project: ~$0.003
  • Full regeneration (33 projects): ~$0.10
  • Cached lookup: $0.00

For more information, see README.md
`);
  process.exit(0);
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Load project data
const featuresPath = path.join(__dirname, '../src/data/features.json');
const caseStudiesPath = path.join(__dirname, '../src/case-studies');
const cacheFilePath = path.join(__dirname, '../src/data/embeddings-cache.json');

// Function to generate content hash for change detection
function generateContentHash(content) {
  return crypto.createHash('md5').update(content).digest('hex');
}

// Function to load existing cache
async function loadCache() {
  if (forceRegeneration) {
    console.log('🔥 Force mode enabled - ignoring existing cache');
    return {};
  }
  
  try {
    const cacheContent = await fs.readFile(cacheFilePath, 'utf8');
    return JSON.parse(cacheContent);
  } catch (error) {
    console.log('📁 No existing cache found, starting fresh');
    return {};
  }
}

// Function to save cache
async function saveCache(cache) {
  await fs.writeFile(cacheFilePath, JSON.stringify(cache, null, 2));
}

// Function to read all MDX case studies with change detection
async function loadCaseStudies(cache = {}) {
  const files = fsSync.readdirSync(caseStudiesPath);
  const caseStudies = [];
  
  for (const file of files) {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(caseStudiesPath, file);
      const fileStats = fsSync.statSync(filePath);
      const fileContent = fsSync.readFileSync(filePath, 'utf8');
      const contentHash = generateContentHash(fileContent);
      const { data: frontmatter, content } = matter(fileContent);
      
      // Extract text from MDX content (remove MDX syntax)
      const textContent = content
        .replace(/import .+$/gm, '') // Remove import statements
        .replace(/^---[\s\S]*?---$/m, '') // Remove frontmatter
        .replace(/<[^>]*>/g, '') // Remove HTML/JSX tags
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/#{1,6}\s/g, '') // Remove markdown headers
        .replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1') // Remove bold/italic
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
        .replace(/\n{3,}/g, '\n\n') // Normalize whitespace
        .trim();
      
      const projectId = file.replace('.mdx', '');
      const caseStudy = {
        id: projectId,
        type: 'case-study',
        title: frontmatter.title || '',
        client: frontmatter.client || '',
        caption: frontmatter.caption || '',
        categories: frontmatter.categories || [],
        content: textContent,
        image: frontmatter.image || '',
        slug: projectId,
        contentHash,
        lastModified: fileStats.mtime.toISOString(),
        needsUpdate: forceRegeneration || !cache[projectId] || cache[projectId].contentHash !== contentHash
      };
      
      caseStudies.push(caseStudy);
    }
  }
  
  return caseStudies;
}

// Function to load features from JSON with change detection
async function loadFeatures(cache = {}) {
  const fileStats = fsSync.statSync(featuresPath);
  const featuresData = JSON.parse(fsSync.readFileSync(featuresPath, 'utf8'));
  const contentHash = generateContentHash(JSON.stringify(featuresData));
  
  const features = featuresData
    .filter(feature => !feature.hiddenWorkPage) // Filter out hidden features
    .map(feature => ({
      id: feature.id,
      type: 'feature',
      title: feature.title || '',
      client: feature.client || '',
      caption: feature.caption || '',
      categories: feature.categories || [],
      content: feature.caption || '', // Features mainly have captions
      image: feature.image || '',
      link: feature.link || '',
      contentHash,
      lastModified: fileStats.mtime.toISOString(),
      needsUpdate: forceRegeneration || !cache[`feature-${feature.id}`] || cache[`feature-${feature.id}`].contentHash !== contentHash
    }));
    
  return features;
}



// Function to extract metadata using OpenAI
async function extractMetadata(project) {
  const prompt = `Analyze the following project and extract structured metadata:

Title: ${project.title}
Client: ${project.client}
Caption: ${project.caption}
Content: ${project.content.substring(0, 2000)}...

Please identify and return ONLY a JSON object with the following fields:
- projectType: The main type of design work (choose from: "UI Design", "UX Design", "Data Visualization", "Illustration", "Research", "Strategy", "Healthcare Design", "Other")
- industry: The primary industry or domain (choose from: "Healthcare", "Enterprise", "Government", "Finance", "Education", "Consumer", "Non-profit", "Other")
- problemsSolved: An array of 2-3 main problems or challenges this project addressed
- techniques: An array of 2-3 design techniques or methods used
- targetAudience: Who the primary users or audience are
- complexity: Complexity level (choose from: "Simple", "Moderate", "Complex")

Return only valid JSON, no additional text:`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1,
      max_tokens: 500
    });
    
    const result = response.choices[0].message.content.trim();
    // Try to parse the JSON response
    try {
      return JSON.parse(result);
    } catch (parseError) {
      console.warn(`Failed to parse metadata for ${project.id}:`, result);
      return {
        projectType: "Other",
        industry: "Other", 
        problemsSolved: [],
        techniques: [],
        targetAudience: "General",
        complexity: "Moderate"
      };
    }
  } catch (error) {
    console.error(`Error extracting metadata for ${project.id}:`, error);
    return {
      projectType: "Other",
      industry: "Other",
      problemsSolved: [],
      techniques: [],
      targetAudience: "General", 
      complexity: "Moderate"
    };
  }
}

// Function to generate buyer-focused descriptions using AI
async function generateBuyerDescriptions(project, metadata) {
  const prompt = `You are a sales consultant helping potential clients understand why this design project is relevant to their needs. Based on the following project information, create compelling, buyer-focused descriptions for common search scenarios.

Project: ${project.title}
Client: ${project.client}
Caption: ${project.caption}
Project Type: ${metadata.projectType}
Industry: ${metadata.industry}
Problems Solved: ${metadata.problemsSolved.join(', ')}
Techniques Used: ${metadata.techniques.join(', ')}
Target Audience: ${metadata.targetAudience}
Content Summary: ${project.content.substring(0, 1000)}...

Generate 3-4 compelling descriptions (2-3 sentences each) for different buyer scenarios. Each description should explain why this project demonstrates relevant expertise for that scenario. Use a confident, consultative tone.

Return a JSON object with these keys:
- "aiPlatform": Description for buyers looking for AI/ML platform design
- "healthcareSolution": Description for buyers needing healthcare/medical solutions  
- "enterpriseSoftware": Description for buyers seeking enterprise software design
- "dataVisualization": Description for buyers needing data visualization/analytics
- "userExperience": Description for buyers focused on user experience improvements

Only include keys that are genuinely relevant to this project. Each description should be specific to this project's actual work and outcomes.

Return only valid JSON:`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 800
    });
    
    const result = response.choices[0].message.content.trim();
    try {
      return JSON.parse(result);
    } catch (parseError) {
      console.warn(`Failed to parse buyer descriptions for ${project.id}:`, result);
      return {};
    }
  } catch (error) {
    console.error(`Error generating buyer descriptions for ${project.id}:`, error);
    return {};
  }
}

// Function to generate embedding
async function generateEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small", // Most cost-effective option
      input: text
    });
    
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

// Function to prepare text for embedding with domain awareness
function prepareTextForEmbedding(project, metadata) {
  // Determine domain context
  const domain = metadata.industry?.toLowerCase() || 'general';
  let domainContext = '';
  
  // Add domain-specific context to improve embedding accuracy
  if (domain.includes('healthcare')) {
    domainContext = '[Healthcare Domain] medical clinical patient care health ';
  } else if (domain.includes('enterprise') || domain.includes('business')) {
    domainContext = '[Enterprise Domain] business corporate workflow analytics ';
  } else if (domain.includes('government') || domain.includes('public')) {
    domainContext = '[Government Domain] public sector policy civic service ';
  }
  
  // Combine all relevant text for better semantic understanding
  const textParts = [
    domainContext,
    project.title,
    project.caption,
    project.client,
    ...(project.categories || []),
    metadata.projectType,
    metadata.industry,
    ...(metadata.problemsSolved || []),
    ...(metadata.techniques || []),
    metadata.targetAudience,
    // Include a portion of content but not too much (token limits)
    project.content.substring(0, 1500)
  ].filter(Boolean);
  
  return textParts.join(' ');
}

// Main function to generate search index
async function generateSearchIndex() {
  console.log('🚀 Starting smart search index generation...');
  
  if (forceRegeneration) {
    console.log('🔥 Force mode: Regenerating ALL embeddings (ignoring cache)');
  }
  
  // Check for OpenAI API key
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }
  
  try {
    // Load existing cache
    console.log('🗂️  Loading cache...');
    const cache = await loadCache();
    
    // Load all projects with change detection
    console.log('📚 Loading projects and checking for changes...');
    const caseStudies = await loadCaseStudies(cache);
    const features = await loadFeatures(cache);
    const allProjects = [...caseStudies, ...features];
    
    const totalProjects = allProjects.length;
    const projectsNeedingUpdate = allProjects.filter(p => p.needsUpdate).length;
    const cachedProjects = totalProjects - projectsNeedingUpdate;
    
    console.log(`📊 Found ${totalProjects} projects:`);
    console.log(`  📑 ${caseStudies.length} case studies`);
    console.log(`  🎯 ${features.length} features`);
    if (forceRegeneration) {
      console.log(`  🔥 ${projectsNeedingUpdate} will be regenerated (force mode)`);
    } else {
      console.log(`  ✅ ${cachedProjects} cached (unchanged)`);
      console.log(`  🔄 ${projectsNeedingUpdate} need processing`);
    }
    
    const searchIndex = [];
    let processedCount = 0;
    
    // Process each project
    for (let i = 0; i < allProjects.length; i++) {
      const project = allProjects[i];
      const cacheKey = project.type === 'feature' ? `feature-${project.id}` : project.id;
      
      let indexEntry;
      
      if (project.needsUpdate) {
        processedCount++;
        console.log(`\n🔄 Processing ${processedCount}/${projectsNeedingUpdate}: ${project.title}`);
        
        // Extract metadata using AI
        console.log('  📊 Extracting metadata...');
        const metadata = await extractMetadata(project);
        
        // Generate buyer-focused descriptions
        console.log('  💼 Generating buyer descriptions...');
        const buyerDescriptions = await generateBuyerDescriptions(project, metadata);
        
        // Prepare text for embedding
        const embeddingText = prepareTextForEmbedding(project, metadata);
        
        // Generate embedding
        console.log('  🧠 Generating embedding...');
        const embedding = await generateEmbedding(embeddingText);
        
        // Create search index entry
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
          embedding: embedding,
          metadata: metadata,
          buyerDescriptions: buyerDescriptions,
          embeddingText: embeddingText, // Store for debugging
          lastUpdated: new Date().toISOString(),
          contentHash: project.contentHash
        };
        
        // Update cache
        cache[cacheKey] = {
          contentHash: project.contentHash,
          lastModified: project.lastModified,
          indexEntry: indexEntry
        };
        
        // Add small delay to respect API rate limits
        if (processedCount < projectsNeedingUpdate) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        
      } else {
        // Use cached version
        console.log(`✅ Using cached: ${project.title}`);
        indexEntry = cache[cacheKey].indexEntry;
      }
      
      searchIndex.push(indexEntry);
    }
    
    // Save updated cache
    console.log('\n💾 Saving cache...');
    await saveCache(cache);
    
    // Save search index
    const outputPath = path.join(__dirname, '../src/data/search-index.json');
    await fs.writeFile(outputPath, JSON.stringify(searchIndex, null, 2));
    console.log(`✅ Search index saved to ${outputPath}`);
    
    // Also copy to static folder for client-side access
    const publicPath = path.join(__dirname, '..', 'static', 'search-index.json');
    await fs.writeFile(publicPath, JSON.stringify(searchIndex, null, 2));
    console.log(`✅ Search index also saved to ${publicPath} for client access`);
    
    // Generate summary statistics
    const projectTypes = {};
    const industries = {};
    const buyerDescriptionTypes = {};
    
    searchIndex.forEach(item => {
      const type = item.metadata.projectType;
      const industry = item.metadata.industry;
      
      projectTypes[type] = (projectTypes[type] || 0) + 1;
      industries[industry] = (industries[industry] || 0) + 1;
      
      // Count buyer description types
      Object.keys(item.buyerDescriptions || {}).forEach(descType => {
        buyerDescriptionTypes[descType] = (buyerDescriptionTypes[descType] || 0) + 1;
      });
    });
    
    console.log('\n📈 Generation Summary:');
    console.log(`  🔄 Processed: ${processedCount} projects`);
    if (!forceRegeneration) {
      console.log(`  ⚡ Cached: ${cachedProjects} projects`);
    }
    console.log(`  💰 Estimated cost: $${(processedCount * 0.003).toFixed(2)}`);
    
    console.log('\n📊 Project Type Distribution:');
    Object.entries(projectTypes).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    
    console.log('\n🏢 Industry Distribution:');
    Object.entries(industries).forEach(([industry, count]) => {
      console.log(`  ${industry}: ${count}`);
    });
    
    console.log('\n💼 Buyer Description Coverage:');
    Object.entries(buyerDescriptionTypes).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} projects`);
    });
    
  } catch (error) {
    console.error('❌ Error generating search index:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  generateSearchIndex();
}

module.exports = { generateSearchIndex }; 