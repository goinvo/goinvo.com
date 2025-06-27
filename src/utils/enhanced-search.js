// Enhanced Search - Combines template-based and skill-based approaches

// Function to extract query skills and structured fields
export function parseQuery(query) {
  const queryLower = query.toLowerCase()
  const result = {
    // Store original query for persona selection
    originalQuery: query,
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
  } else if (queryLower.includes('education') || queryLower.includes('academic')) {
    result.domain = 'Education'
    result.domainKnowledge.push('education sector expertise')
  } else if (queryLower.includes('finance') || queryLower.includes('banking')) {
    result.domain = 'Finance'
    result.domainKnowledge.push('financial services expertise')
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
  } else if (queryLower.includes('website') || queryLower.includes('web')) {
    result.product = 'Website'
    result.technicalSkills.push('web development')
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
  } else if (queryLower.includes('engage')) {
    result.goal = 'increasing engagement'
    result.businessValue.push('user engagement')
  }
  
  // Additional skill detection
  if (queryLower.includes('real-time') || queryLower.includes('telemetry')) {
    result.technicalSkills.push('real-time data streaming')
  }
  if (queryLower.includes('visualization')) {
    result.technicalSkills.push('data visualization')
    result.designSkills.push('visualization design')
  }
  if (queryLower.includes('react')) {
    result.technicalSkills.push('react')
  }
  if (queryLower.includes('d3')) {
    result.technicalSkills.push('d3')
  }
  if (queryLower.includes('api')) {
    result.technicalSkills.push('api')
  }
  if (queryLower.includes('ux') || queryLower.includes('user experience')) {
    result.designSkills.push('ux design')
  }
  if (queryLower.includes('ui') || queryLower.includes('interface')) {
    result.designSkills.push('ui design')
  }
  if (queryLower.includes('hipaa') || queryLower.includes('compliance')) {
    result.domainKnowledge.push('regulatory compliance')
  }
  if (queryLower.includes('clinical')) {
    result.domainKnowledge.push('clinical workflow understanding')
  }
  if (queryLower.includes('accessible') || queryLower.includes('accessibility')) {
    result.designSkills.push('accessibility')
  }
  
  return result
}

// Calculate structured match score
export function calculateStructuredMatch(parsed, project) {
  let score = 0
  let matches = []
  
  // Domain matching (40%)
  if (parsed.domain && project.structuredMetadata && project.structuredMetadata.domain) {
    if (parsed.domain === project.structuredMetadata.domain) {
      score += 0.4
      matches.push(`Domain: ${parsed.domain}`)
    }
  }
  
  // Product matching (30%)
  if (parsed.product && project.structuredMetadata && project.structuredMetadata.product) {
    if (parsed.product === project.structuredMetadata.product) {
      score += 0.3
      matches.push(`Product: ${parsed.product}`)
    }
  }
  
  // Goal matching (30%)
  if (parsed.goal && project.structuredMetadata && project.structuredMetadata.goal) {
    if (parsed.goal === project.structuredMetadata.goal) {
      score += 0.3
      matches.push(`Goal: ${parsed.goal}`)
    }
  }
  
  return { score, matches }
}

// Calculate skill-based match score
export function calculateSkillMatch(querySkills, project) {
  let score = 0
  let matchedSkills = []
  
  if (!project.capabilities) return { score: 0, matchedSkills: [] }
  
  const allQuerySkills = [
    ...querySkills.technicalSkills,
    ...querySkills.designSkills,
    ...querySkills.domainKnowledge,
    ...querySkills.businessValue
  ]
  
  // Count matches across all capability categories
  Object.entries(project.capabilities).forEach(([category, skills]) => {
    if (Array.isArray(skills)) {
      skills.forEach(skill => {
        const skillLower = skill.toLowerCase()
        allQuerySkills.forEach(querySkill => {
          if (skillLower.includes(querySkill.toLowerCase()) || querySkill.toLowerCase().includes(skillLower)) {
            matchedSkills.push(`${category}: ${skill}`)
            score++
          }
        })
      })
    }
  })
  
  // Normalize score (max 1.0)
  const normalizedScore = Math.min(score / Math.max(allQuerySkills.length, 1), 1)
  
  return { score: normalizedScore, matchedSkills }
}

// Select best buyer description based on query
export function selectBuyerDescription(project, parsedQuery) {
  if (!project.buyerDescriptions) return null
  
  // Check for specific visitor intent based on query keywords
  const queryLower = parsedQuery.originalQuery ? parsedQuery.originalQuery.toLowerCase() : ''
  
  // Job seeker queries
  if (queryLower.includes('job') || queryLower.includes('career') || 
      queryLower.includes('work at') || queryLower.includes('working at') ||
      queryLower.includes('hire') || queryLower.includes('hiring') ||
      queryLower.includes('employment')) {
    return project.buyerDescriptions['Job Seeker'] || project.buyerDescriptions['CEO']
  }
  
  // Culture enthusiast queries
  if (queryLower.includes('culture') || queryLower.includes('values') ||
      queryLower.includes('team') || queryLower.includes('what is goinvo like') ||
      queryLower.includes('open source') || queryLower.includes('philosophy')) {
    return project.buyerDescriptions['Culture Enthusiast'] || project.buyerDescriptions['CEO']
  }
  
  // Merchandise seeker queries
  if (queryLower.includes('print') || queryLower.includes('poster') ||
      queryLower.includes('merch') || queryLower.includes('merchandise') ||
      queryLower.includes('buy') || queryLower.includes('purchase') ||
      queryLower.includes('product') || queryLower.includes('shop')) {
    return project.buyerDescriptions['Merchandise Seeker'] || project.buyerDescriptions['CEO']
  }
  
  // Design professional/student queries
  if (queryLower.includes('design process') || queryLower.includes('methodology') ||
      queryLower.includes('case study') || queryLower.includes('design inspiration') ||
      queryLower.includes('learn') || queryLower.includes('student')) {
    return project.buyerDescriptions['Design Professional'] || 
           project.buyerDescriptions['Design Student/Professional'] || 
           project.buyerDescriptions['Product Manager']
  }
  
  // General public queries
  if (queryLower.includes('what is') || queryLower.includes('how does') ||
      queryLower.includes('explain') || queryLower.includes('understand')) {
    return project.buyerDescriptions['General Public'] || project.buyerDescriptions['CEO']
  }
  
  // Domain-based selection (existing logic)
  if (parsedQuery.domain === 'Healthcare') {
    return project.buyerDescriptions['Healthcare Organization'] || project.buyerDescriptions['CEO']
  } else if (parsedQuery.domain === 'Government') {
    return project.buyerDescriptions['Government Agency'] || project.buyerDescriptions['CEO']
  } else if (parsedQuery.product && ['Mobile App', 'Dashboard', 'Platform'].includes(parsedQuery.product)) {
    return project.buyerDescriptions['Product Manager'] || project.buyerDescriptions['CEO']
  } else {
    // Default to CEO for general business queries
    return project.buyerDescriptions['CEO']
  }
}

// Generate dynamic snippet using all available data
export function generateDynamicSnippet(project, parsedQuery, querySkills, matchInfo) {
  // Try buyer description first
  const buyerDescription = selectBuyerDescription(project, parsedQuery)
  if (buyerDescription && matchInfo.confidence > 0.6) {
    return {
      snippet: buyerDescription,
      source: 'buyer-description',
      confidence: matchInfo.confidence
    }
  }
  
  // Try assembling from modular descriptions based on matched skills
  if (project.modularDescriptions && matchInfo.matchedSkills.length > 0) {
    const relevantDescriptions = []
    
    // Find modular descriptions that match our skills
    Object.entries(project.modularDescriptions).forEach(([category, descriptions]) => {
      if (Array.isArray(descriptions)) {
        descriptions.forEach(desc => {
          const isRelevant = matchInfo.matchedSkills.some(match => 
            match.includes(desc.skill) || match.toLowerCase().includes(category.toLowerCase())
          )
          if (isRelevant) {
            relevantDescriptions.push(desc.description)
          }
        })
      }
    })
    
    if (relevantDescriptions.length > 0) {
      // Take the most relevant 2-3 descriptions
      const snippet = relevantDescriptions.slice(0, 2).join(' ')
      return {
        snippet,
        source: 'modular-descriptions',
        confidence: matchInfo.confidence
      }
    }
  }
  
  // Fallback to template-based approach
  if (parsedQuery.domain || parsedQuery.product || parsedQuery.goal) {
    const parts = []
    
    parts.push(project.title)
    
    if (parsedQuery.product) {
      parts.push(`is a ${parsedQuery.product.toLowerCase()}`)
    } else {
      parts.push('is a solution')
    }
    
    if (parsedQuery.domain) {
      parts.push(`for the ${parsedQuery.domain.toLowerCase()} sector`)
    }
    
    if (parsedQuery.goal) {
      parts.push(`focused on ${parsedQuery.goal}`)
    }
    
    return {
      snippet: parts.join(' ') + '.',
      source: 'template',
      confidence: matchInfo.confidence * 0.7 // Lower confidence for templates
    }
  }
  
  // Final fallback
  return {
    snippet: project.caption || `${project.title} delivers innovative design solutions.`,
    source: 'fallback',
    confidence: 0.3
  }
}

// Extract keywords with word weights
function extractKeywordsWithWeights(text, wordWeights = {}) {
  if (!text) return [];
  
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && word.length < 20);
  
  // Apply weights to words
  const weightedWords = words.map(word => ({
    word,
    weight: wordWeights[word] || 1.0
  }));
  
  return weightedWords;
}

// Calculate weighted keyword similarity  
function calculateWeightedKeywordSimilarity(query, text, wordWeights = {}) {
  const queryWords = extractKeywordsWithWeights(query, wordWeights);
  const textWords = new Set(text.toLowerCase().split(/\s+/));
  
  let matchScore = 0;
  let totalWeight = 0;
  
  queryWords.forEach(({ word, weight }) => {
    totalWeight += weight;
    if (textWords.has(word)) {
      matchScore += weight;
    }
  });
  
  return totalWeight > 0 ? matchScore / totalWeight : 0;
}

// Main search function combining all approaches
export async function performEnhancedSearch(query, searchData, options = {}) {
  const { wordWeights = {} } = options;
  
  if (!query || query.trim().length < 2) {
    return {
      results: [],
      searchAnalysis: null,
      suggestions: []
    };
  }

  console.log('🔍 Performing enhanced search for:', query);

  // Parse query for both structured fields and skills
  const parsedQuery = parseQuery(query);
  
  const results = searchData.projects.map(project => {
    // Calculate keyword similarity with word weights
    const searchableText = [
      project.title || '',
      project.caption || '',
      project.client || '',
      ...(project.keywords || []),
      ...(project.categories || [])
    ].join(' ').toLowerCase();
    
    const keywordScore = calculateWeightedKeywordSimilarity(query, searchableText, wordWeights) * 100;
    
    // Track which keywords were found
    const keywordsFound = new Set();
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    queryWords.forEach(word => {
      if (searchableText.includes(word)) {
        keywordsFound.add(word);
      }
    });
    
    // Calculate structured match (30%)
    const structuredMatch = calculateStructuredMatch(parsedQuery, project)
    
    // Calculate skill match (30%)
    const skillMatch = calculateSkillMatch(parsedQuery, project)
    
    // Combined score
    const totalScore = (keywordScore * 0.4) + (structuredMatch.score * 0.3) + (skillMatch.score * 0.3)
    
    return {
      ...project,
      score: totalScore,
      keywordScore,
      structuredScore: structuredMatch.score,
      skillScore: skillMatch.score,
      matchedFields: structuredMatch.matches,
      matchedSkills: skillMatch.matchedSkills,
      confidence: totalScore,
      debug: {
        keywordsFound: Array.from(keywordsFound),
        keywordScore: keywordScore / 100,
        structuredScore: structuredMatch.score,
        skillScore: skillMatch.score
      }
    }
  })
  
  // Sort by score
  results.sort((a, b) => b.score - a.score)
  
  // Take top results
  const topResults = results.slice(0, 20).filter(p => p.score > 0.1)
  
  // Generate dynamic snippets for results
  const resultsWithSnippets = topResults.map(project => {
    const snippetData = generateDynamicSnippet(
      project, 
      parsedQuery, 
      parsedQuery, // Using same object for skills
      {
        confidence: project.confidence,
        matchedSkills: project.matchedSkills
      }
    )
    
    return {
      ...project,
      snippet: snippetData.snippet,
      debug: {
        ...project.debug,
        snippetSource: snippetData.source,
        snippetConfidence: snippetData.confidence
      }
    }
  })
  
  // Generate search suggestions if no good results
  const suggestions = []
  if (topResults.length === 0 || topResults[0].score < 0.3) {
    if (parsedQuery.domain) {
      suggestions.push(`Try searching for other ${parsedQuery.domain.toLowerCase()} projects`)
    }
    if (parsedQuery.product) {
      suggestions.push(`Look for ${parsedQuery.product.toLowerCase()} examples`)
    }
    if (parsedQuery.technicalSkills.length > 0) {
      suggestions.push(`Search for projects using ${parsedQuery.technicalSkills[0]}`)
    }
  }
  
  return {
    results: resultsWithSnippets,
    searchAnalysis: {
      domain: parsedQuery.domain,
      product: parsedQuery.product,
      goal: parsedQuery.goal,
      detectedSkills: {
        technical: parsedQuery.technicalSkills,
        design: parsedQuery.designSkills,
        domain: parsedQuery.domainKnowledge,
        business: parsedQuery.businessValue
      }
    },
    suggestions
  }
}

// Export additional search functions for specific use cases
export function searchByDomain(domain, searchData) {
  return performEnhancedSearch(domain.toLowerCase(), searchData)
}

export function searchBySkills(skills, searchData) {
  const query = skills.join(' ')
  return performEnhancedSearch(query, searchData)
}

export function searchByProductType(productType, searchData) {
  return performEnhancedSearch(productType.toLowerCase(), searchData)
} 