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
  
  // If no structuredMetadata, try to infer from other fields
  const metadata = project.structuredMetadata || {}
  
  // Infer domain from categories or title if not in metadata
  let projectDomain = metadata.domain
  if (!projectDomain && project.categories) {
    if (project.categories.some(cat => cat.toLowerCase().includes('health'))) {
      projectDomain = 'Healthcare'
    } else if (project.categories.some(cat => cat.toLowerCase().includes('government'))) {
      projectDomain = 'Government'
    } else if (project.categories.some(cat => cat.toLowerCase().includes('enterprise'))) {
      projectDomain = 'Enterprise'
    }
  }
  
  // Domain matching (40%)
  if (parsed.domain && projectDomain) {
    if (parsed.domain === projectDomain) {
      score += 0.4
      matches.push(`Domain: ${parsed.domain}`)
    }
  }
  
  // Product matching (30%)
  if (parsed.product && metadata.product) {
    if (parsed.product === metadata.product) {
      score += 0.3
      matches.push(`Product: ${parsed.product}`)
    }
  } else if (parsed.product) {
    // Check if product type is mentioned in title or caption
    const searchText = `${project.title} ${project.caption}`.toLowerCase()
    if (searchText.includes(parsed.product.toLowerCase())) {
      score += 0.15 // Half score for inferred match
      matches.push(`Product (inferred): ${parsed.product}`)
    }
  }
  
  // Goal matching (30%)
  if (parsed.goal && metadata.goal) {
    if (parsed.goal === metadata.goal) {
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

// NOTE: Buyer description selection preserved but not currently used
// Focusing on clean search without AI-generated content

// export function selectBuyerDescription(project, parsedQuery) {
//   ... function body commented out for cleaner codebase ...
// }

// Extract keywords with word weights
function extractKeywordsWithWeights(text, wordWeights = {}) {
  if (!text) return [];
  
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length >= 2 && word.length < 20);
  
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

// Helper function for whole word matching
function containsWholeWord(text, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'i');
  return regex.test(text);
}

// Enhanced keyword similarity calculation with better matching
function calculateEnhancedKeywordSimilarity(query, project) {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length >= 2);
  
  // Skip empty queries
  if (queryWords.length === 0) return 0;
  
  // Define semantic mappings for common search terms
  const semanticMappings = {
    // Technology/Abbreviations
    'ai': ['artificial intelligence', 'machine learning', 'ml', 'deep learning', 'neural networks', 'nlp', 'automation'],
    'ml': ['machine learning', 'ai', 'artificial intelligence', 'predictive modeling', 'algorithms'],
    'nlp': ['natural language processing', 'ai', 'text analysis', 'language model'],
    'ux': ['user experience', 'usability', 'design', 'interface design', 'interaction design'],
    'ui': ['user interface', 'interface', 'design', 'visual design', 'front-end'],
    'api': ['application programming interface', 'integration', 'web service', 'endpoint'],
    'ehr': ['electronic health record', 'emr', 'electronic medical record', 'health record'],
    'emr': ['electronic medical record', 'ehr', 'electronic health record', 'medical record'],
    'it': ['information technology', 'technology', 'tech', 'systems'],
    // Full terms mapping back to abbreviations
    'artificial intelligence': ['ai', 'ml', 'machine learning', 'deep learning', 'automation'],
    'machine learning': ['ml', 'ai', 'artificial intelligence', 'algorithms'],
    'user experience': ['ux', 'usability', 'design', 'interaction'],
    'user interface': ['ui', 'interface', 'design', 'front-end'],
    'natural language processing': ['nlp', 'ai', 'text analysis'],
    
    // Visual/Design terms
    'illustrations': ['visual', 'graphic', 'design', 'artwork', 'visuals', 'images', 'pictures'],
    'illustration': ['visual', 'graphic', 'design', 'artwork', 'image', 'picture'],
    'visual': ['visualization', 'graphic', 'design', 'illustration'],
    'design': ['designer', 'designed', 'designing', 'ux', 'ui'],
    'dashboard': ['dashboards', 'analytics', 'metrics', 'reporting', 'visualization'],
    'dashboards': ['dashboard', 'analytics', 'metrics', 'reporting', 'visualization'],
    'portal': ['platform', 'system', 'application', 'interface', 'gateway'],
    'portals': ['platforms', 'systems', 'applications', 'interfaces', 'gateways'],
    
    // Healthcare terms
    'doctors': ['clinicians', 'physicians', 'healthcare providers', 'medical professionals', 'providers', 'clinical'],
    'doctor': ['clinician', 'physician', 'healthcare provider', 'medical professional', 'provider', 'clinical'],
    'clinician': ['doctor', 'physician', 'healthcare provider', 'clinical', 'medical professional'],
    'clinicians': ['doctors', 'physicians', 'healthcare providers', 'clinical', 'medical professionals'],
    'patient': ['patients', 'person', 'individual', 'participant', 'user'],
    'patients': ['patient', 'people', 'individuals', 'participants', 'users'],
    'health': ['healthcare', 'medical', 'clinical', 'wellness', 'care'],
    'healthcare': ['health', 'medical', 'clinical', 'care'],
    
    // Data/System terms
    'capture': ['collect', 'gather', 'record', 'track', 'input', 'enter', 'capture', 'capturing'],
    'data': ['information', 'records', 'health data', 'medical data', 'content'],
    'system': ['platform', 'application', 'tool', 'software', 'solution'],
    'platform': ['system', 'application', 'tool', 'software', 'solution', 'portal'],
    
    // Research terms
    'research': ['study', 'investigation', 'analysis', 'examination', 'inquiry'],
    'researcher': ['investigator', 'scientist', 'analyst', 'scholar'],
    'researchers': ['investigators', 'scientists', 'analysts', 'scholars'],
    
    // Action terms
    'encourage': ['promote', 'support', 'foster', 'empower', 'inspire', 'motivate', 'drive'],
    'manage': ['management', 'managing', 'control', 'handle', 'organize'],
    'track': ['tracking', 'monitor', 'monitoring', 'follow', 'record'],
    
    // Point of care specific
    'point': ['bedside', 'clinical', 'real-time', 'immediate'],
    'burden': ['workload', 'effort', 'time', 'complexity']
  };
  
  // Track matches per word to calculate percentage
  let wordMatches = {};
  queryWords.forEach(word => {
    wordMatches[word] = 0;
  });
  
  // Get all searchable text fields
  const titleLower = (project.title || '').toLowerCase();
  const captionLower = (project.caption || '').toLowerCase();
  const clientLower = (project.client || '').toLowerCase();
  const categoriesText = (project.categories || []).join(' ').toLowerCase();
  
  // Special handling for abbreviations - check categories array directly
  const isAbbreviationQuery = queryWords.length === 1 && queryWords[0].length <= 3 && queryWords[0].toUpperCase() === queryWords[0].toUpperCase();
  if (isAbbreviationQuery) {
    const abbreviation = queryWords[0];
    // Check if abbreviation exists as a category (case-insensitive)
    const categoriesArray = project.categories || [];
    const hasAbbreviationCategory = categoriesArray.some(cat => cat.toLowerCase() === abbreviation);
    
    if (hasAbbreviationCategory) {
      // Reduced boost for exact category match with abbreviation
      wordMatches[abbreviation] += 8; // Reduced from 15
    }
  }
  
  // 1. Title matching (highest weight)
  queryWords.forEach(word => {
    if (containsWholeWord(titleLower, word)) {
      wordMatches[word] += 8; // Increased from 5 for better title prioritization
    }
    // Check semantic mappings
    if (semanticMappings[word]) {
      semanticMappings[word].forEach(synonym => {
        if (containsWholeWord(titleLower, synonym)) {
          wordMatches[word] += 5; // Increased from 3
        }
      });
    }
  });
  
  // Exact phrase matching in title
  if (titleLower.includes(queryLower)) {
    // Boost all words equally for phrase match
    queryWords.forEach(word => {
      wordMatches[word] += 10 / queryWords.length;
    });
  }
  
  // Check for important multi-word phrases
  const importantPhrases = [
    'care cards',
    'data capture',
    'point of care',
    'health data',
    'clinical decision',
    'patient data',
    'vaccination cards',
    'artificial intelligence',
    'machine learning',
    'natural language processing',
    'user experience',
    'user interface',
    'electronic health record',
    'electronic medical record'
  ];
  
  importantPhrases.forEach(phrase => {
    if (queryLower.includes(phrase) && titleLower.includes(phrase)) {
      // Distribute points across all words in the query
      queryWords.forEach(word => {
        wordMatches[word] += 8 / queryWords.length;
      });
    } else if (queryLower.includes(phrase) && captionLower.includes(phrase)) {
      queryWords.forEach(word => {
        wordMatches[word] += 4 / queryWords.length;
      });
    }
  });
  
  // 2. Caption matching (medium weight)
  queryWords.forEach(word => {
    if (containsWholeWord(captionLower, word)) {
      wordMatches[word] += 2;
    }
    // Check semantic mappings
    if (semanticMappings[word]) {
      semanticMappings[word].forEach(synonym => {
        if (containsWholeWord(captionLower, synonym)) {
          wordMatches[word] += 1.5;
        }
      });
    }
  });
  
  // 3. Client and categories (lower weight)
  queryWords.forEach(word => {
    if (containsWholeWord(clientLower, word) || containsWholeWord(categoriesText, word)) {
      wordMatches[word] += 1;
    }
  });
  
  // 4. Check buyer descriptions (very low weight and only if not found elsewhere)
  if (project.buyerDescriptions) {
    const buyerDescText = Object.values(project.buyerDescriptions).join(' ').toLowerCase();
    queryWords.forEach(word => {
      // Only add buyer description score if word hasn't been found elsewhere
      if (wordMatches[word] === 0 && containsWholeWord(buyerDescText, word)) {
        wordMatches[word] += 0.1; // Very low weight for AI-generated content
      }
    });
  }
  
  // 5. Special case boosts
  // Care Cards specific boost - only boost if query explicitly mentions cards
  if ((queryLower.includes('care cards') || queryLower.includes('care card')) || 
      (queryLower.includes('card') && queryLower.includes('illustration'))) {
    if (project.id === 'care-cards' || titleLower.includes('care cards')) {
      queryWords.forEach(word => {
        wordMatches[word] += 20 / queryWords.length;
      });
    }
  }
  
  // Health data capture boost
  if ((queryLower.includes('capture') || queryLower.includes('collect')) && queryLower.includes('data')) {
    if (titleLower.includes('capture') || titleLower.includes('data capture')) {
      queryWords.forEach(word => {
        wordMatches[word] += 15 / queryWords.length;
      });
    }
  }
  
  // Point of care boost
  if (queryLower.includes('point of care') || (queryLower.includes('care') && queryLower.includes('point'))) {
    if (titleLower.includes('point of care') || captionLower.includes('point of care')) {
      queryWords.forEach(word => {
        wordMatches[word] += 12 / queryWords.length;
      });
    }
  }
  
  // System for doctors/clinicians boost
  if ((queryLower.includes('system') || queryLower.includes('platform')) && 
      (queryLower.includes('doctor') || queryLower.includes('clinician'))) {
    if (captionLower.includes('clinician') || captionLower.includes('clinical')) {
      queryWords.forEach(word => {
        wordMatches[word] += 8 / queryWords.length;
      });
    }
  }
  
  // Research portal/platform boost
  if ((queryLower.includes('research') && queryLower.includes('portal')) ||
      (queryLower.includes('research') && queryLower.includes('platform'))) {
    if (containsWholeWord(titleLower, 'research') || containsWholeWord(captionLower, 'research')) {
      if (containsWholeWord(titleLower, 'platform') || containsWholeWord(captionLower, 'platform') ||
          containsWholeWord(titleLower, 'portal') || containsWholeWord(captionLower, 'portal')) {
        queryWords.forEach(word => {
          wordMatches[word] += 10 / queryWords.length;
        });
      }
    }
  }
  
  // AI/ML boost - handle abbreviations specially
  if (queryLower === 'ai' || queryLower === 'ml' || queryLower === 'nlp' ||
      queryLower === 'ux' || queryLower === 'ui' || queryLower === 'it') {
    // Check categories for exact match (case-insensitive)
    const categoriesArray = project.categories || [];
    if (categoriesArray.some(cat => cat.toLowerCase() === queryLower)) {
      queryWords.forEach(word => {
        wordMatches[word] += 5; // Reduced from 10
      });
    }
    // Also check title/caption for AI-related terms
    if (queryLower === 'ai' && (
        containsWholeWord(titleLower, 'ai') || 
        titleLower.includes('artificial intelligence') ||
        captionLower.includes('artificial intelligence') ||
        captionLower.includes('ai-powered') ||
        titleLower.includes('ai ') ||
        captionLower.includes('ai '))) {
      queryWords.forEach(word => {
        wordMatches[word] += 3; // Reduced from 8
      });
    }
    // UX/UI boost
    if ((queryLower === 'ux' || queryLower === 'ui') && (
        containsWholeWord(titleLower, queryLower) || 
        titleLower.includes('user experience') ||
        titleLower.includes('user interface') ||
        captionLower.includes('user experience') ||
        captionLower.includes('user interface'))) {
      queryWords.forEach(word => {
        wordMatches[word] += 3; // Reduced from 8
      });
    }
  }
  
  // Calculate average score per word
  let totalScore = 0;
  let matchedWords = 0;
  
  for (const word in wordMatches) {
    if (wordMatches[word] > 0) {
      matchedWords++;
      totalScore += wordMatches[word];
    }
  }
  
  // Calculate match percentage (how many query words found matches)
  const matchPercentage = matchedWords / queryWords.length;
  
  // Calculate average score per word (normalized by query length)
  const avgScorePerWord = totalScore / queryWords.length;
  
  // Combine match percentage with average score
  // This ensures both coverage and strength of matches matter
  // Adjusted normalization to provide better differentiation
  let finalScore = (matchPercentage * 0.3) + (Math.min(avgScorePerWord / 15, 1) * 0.7);
  
  // Apply query length multiplier - shorter queries get moderate boost
  // This ensures single-word queries aren't penalized but not over-inflated
  let queryLengthMultiplier;
  switch (queryWords.length) {
    case 1:
      queryLengthMultiplier = 1.4;  // Moderate boost for single-word queries
      break;
    case 2:
      queryLengthMultiplier = 1.2;  // Small boost for two-word queries
      break;
    case 3:
      queryLengthMultiplier = 1.1;  // Minimal boost for three-word queries
      break;
    default:
      queryLengthMultiplier = 1.0;  // No boost for longer queries
  }
  
  // Apply the multiplier
  finalScore *= queryLengthMultiplier;
  
  // Apply a softer cap to allow differentiation at high scores
  // This uses a sigmoid-like function to compress scores near 1.0
  if (finalScore > 0.8) {
    finalScore = 0.8 + (0.2 * Math.tanh((finalScore - 0.8) * 5));
  }
  
  // Ensure score doesn't exceed 1.0
  finalScore = Math.min(finalScore, 1.0);
  
  // Debug log for top matches
  // Removed score logging since we're not displaying scores in UI anymore
  
  return finalScore;
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

  // Parse query for both structured fields and skills
  const parsedQuery = parseQuery(query);
  
  const results = searchData.projects.map(project => {
    // Use enhanced keyword similarity calculation
    const keywordScore = calculateEnhancedKeywordSimilarity(query, project);
    
    // Track which keywords were found
    const keywordsFound = new Set();
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
    const searchableText = [
      project.title || '',
      project.caption || '',
      project.client || '',
      ...(project.keywords || []),
      ...(project.categories || [])
    ].join(' ').toLowerCase();
    
    queryWords.forEach(word => {
      if (searchableText.includes(word)) {
        keywordsFound.add(word);
      }
    });
    
    // Calculate structured match (20% - reduced from 30%)
    const structuredMatch = calculateStructuredMatch(parsedQuery, project)
    
    // Calculate skill match (20% - reduced from 30%)
    const skillMatch = calculateSkillMatch(parsedQuery, project)
    
    // Combined score with keyword matching having higher weight (60%)
    let totalScore = (keywordScore * 0.6) + (structuredMatch.score * 0.2) + (skillMatch.score * 0.2)
    
    // Apply query length multiplier to the combined score as well
    // This ensures consistency across all scoring methods
    const queryLengthMultiplier = Math.max(1.0, 1.5 - (queryWords.length * 0.15));
    totalScore *= queryLengthMultiplier;
    
    // Ensure score is a valid number and doesn't exceed 1.0
    const validScore = isNaN(totalScore) ? 0 : Math.min(totalScore, 1.0);
    
    return {
      ...project,
      score: validScore,
      keywordScore,
      structuredScore: structuredMatch.score,
      skillScore: skillMatch.score,
      matchedFields: structuredMatch.matches,
      matchedSkills: skillMatch.matchedSkills,
      confidence: validScore,
      debug: {
        keywordsFound: Array.from(keywordsFound),
        keywordScore,
        structuredScore: structuredMatch.score,
        skillScore: skillMatch.score,
        queryLengthMultiplier
      }
    }
  })
  
  // Sort by score
  results.sort((a, b) => b.score - a.score)
  
  // Take top results without filtering by score threshold
  const topResults = results.slice(0, 20).filter(p => p.score > 0) // Only filter out zero scores
  
  // No longer generating snippets since we're not displaying them
  // Just return the results as-is for cleaner UI
  
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
    results: topResults,
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