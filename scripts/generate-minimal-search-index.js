#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Read case studies
const caseStudiesDir = path.join(__dirname, '..', 'src', 'case-studies')
const caseStudyFiles = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.mdx'))

const projects = caseStudyFiles.map(file => {
  const content = fs.readFileSync(path.join(caseStudiesDir, file), 'utf-8')
  const slug = file.replace('.mdx', '')
  
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!frontmatterMatch) return null
  
  const frontmatter = frontmatterMatch[1]
  const title = (frontmatter.match(/title:\s*['"](.+?)['"]/i) || [])[1] || slug
  const image = (frontmatter.match(/image:\s*['"](.+?)['"]/i) || [])[1] || ''
  const client = (frontmatter.match(/client:\s*['"](.+?)['"]/i) || [])[1] || ''
  const caption = (frontmatter.match(/caption:\s*['"](.+?)['"]/i) || [])[1] || ''
  const categoriesMatch = frontmatter.match(/categories:\s*\[(.*?)\]/s)
  const categories = categoriesMatch 
    ? categoriesMatch[1].split(',').map(c => c.trim().replace(/['"]/g, ''))
    : []
  
  // Extract body content (for keyword search)
  const bodyContent = content.split('---')[2] || ''
  const cleanBody = bodyContent
    .replace(/<[^>]*>/g, '') // Remove HTML/JSX tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .slice(0, 500) // Take first 500 chars for keywords
  
  return {
    id: slug,
    slug,
    title,
    client,
    caption,
    image,
    categories,
    keywords: [...new Set([
      ...title.toLowerCase().split(/\s+/),
      ...client.toLowerCase().split(/\s+/),
      ...categories.map(c => c.toLowerCase()),
      ...cleanBody.toLowerCase().match(/\b\w{4,}\b/g) || []
    ])].filter(k => k && k.length > 3).slice(0, 20)
  }
}).filter(Boolean)

// Save to public directory
const outputPath = path.join(__dirname, '..', 'public', 'search-index.json')
fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2))

console.log(`✅ Generated minimal search index with ${projects.length} projects`)
console.log(`📁 Saved to: ${outputPath}`)
