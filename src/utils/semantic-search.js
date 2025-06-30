// Client-side semantic search utility
// Performs intelligent keyword matching with pre-generated embeddings

/**
 * Calculate cosine similarity between two vectors
 * @param {number[]} vecA - First vector
 * @param {number[]} vecB - Second vector
 * @returns {number} Similarity score between 0 and 1
 */
export const cosineSimilarity = (vecA, vecB) => {
  if (vecA.length !== vecB.length) {
    throw new Error('Vectors must have the same length')
  }
  
  let dotProduct = 0
  let normA = 0
  let normB = 0
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i]
    normA += vecA[i] * vecA[i]
    normB += vecB[i] * vecB[i]
  }
  
  normA = Math.sqrt(normA)
  normB = Math.sqrt(normB)
  
  if (normA === 0 || normB === 0) {
    return 0
  }
  
  return dotProduct / (normA * normB)
}

/**
 * Extract keywords and concepts from text
 * @param {string} text - Text to analyze
 * @returns {Set<string>} Set of normalized keywords
 */
export const extractKeywords = (text) => {
  // Common stop words to filter out
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with', 'i', 'need', 'want', 'looking', 'for'
  ])
  
  // Extract and normalize words
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word))
  
  // Add concept mappings for common terms
  const conceptMap = {
    // AI & Technology
    'ai': ['artificial intelligence', 'machine learning', 'ml', 'neural', 'algorithm', 'automated'],
    'machine': ['ai', 'artificial intelligence', 'automated', 'algorithm'],
    
    // UI/UX Design
    'ui': ['user interface', 'interface design', 'frontend', 'visual design', 'dashboard'],
    'ux': ['user experience', 'usability', 'interaction design', 'interface'],
    'interface': ['ui', 'dashboard', 'portal', 'platform'],
    'dashboard': ['interface', 'visualization', 'analytics', 'monitoring', 'ui'],
    
    // Healthcare Specific
    'healthcare': ['health', 'medical', 'clinical', 'patient care', 'hospital'],
    'medical': ['healthcare', 'clinical', 'patient', 'health'],
    'clinical': ['healthcare', 'medical', 'patient care', 'health'],
    'patient': ['healthcare', 'medical', 'clinical', 'health'],
    'telemetry': ['monitoring', 'vital signs', 'patient monitoring', 'remote monitoring'],
    'monitoring': ['telemetry', 'tracking', 'dashboard', 'real-time'],
    'vitals': ['vital signs', 'telemetry', 'monitoring', 'patient'],
    'icu': ['intensive care', 'critical care', 'hospital', 'monitoring'],
    
    // Therapy & Mental Health
    'therapist': ['therapy', 'mental health', 'counseling', 'behavioral health', 'therapists'],
    'therapists': ['therapy', 'mental health', 'counseling', 'behavioral health', 'therapist'],
    'therapy': ['therapist', 'mental health', 'counseling', 'behavioral health', 'cbt'],
    'mental': ['therapy', 'behavioral health', 'counseling', 'psychological'],
    'cbt': ['cognitive behavioral therapy', 'therapy', 'mental health'],
    'ptsd': ['trauma therapy', 'mental health', 'veterans', 'therapy'],
    
    // Oncology & Specialized Medicine
    'oncology': ['cancer', 'tumor', 'chemotherapy', 'radiation', 'treatment'],
    'cancer': ['oncology', 'tumor', 'treatment', 'chemotherapy'],
    'genomic': ['genetic', 'dna', 'sequencing', 'personalized medicine'],
    'hematology': ['blood work', 'lab', 'cbc', 'blood test', 'laboratory'],
    'lab': ['laboratory', 'testing', 'diagnostic', 'results', 'hematology'],
    'laboratory': ['lab', 'testing', 'diagnostic', 'pathology'],
    'radiology': ['imaging', 'xray', 'mri', 'ct scan', 'medical imaging'],
    'imaging': ['radiology', 'medical imaging', 'pacs', 'dicom'],
    
    // Platform & System Types
    'platform': ['system', 'application', 'software', 'portal', 'solution'],
    'system': ['platform', 'application', 'software', 'solution'],
    'application': ['app', 'platform', 'system', 'software'],
    'software': ['application', 'platform', 'system', 'solution'],
    'portal': ['platform', 'interface', 'dashboard', 'system'],
    'solution': ['platform', 'system', 'service', 'application'],
    'service': ['platform', 'solution', 'system', 'api'],
    
    // Analytics & Data
    'data': ['information', 'analytics', 'visualization', 'insights', 'metrics'],
    'analytics': ['data', 'metrics', 'insights', 'visualization', 'reporting'],
    'metrics': ['analytics', 'data', 'kpi', 'performance', 'tracking'],
    'visualization': ['data', 'charts', 'graphs', 'dashboard', 'visual'],
    'insights': ['analytics', 'data', 'intelligence', 'reporting'],
    
    // Enterprise & Business
    'enterprise': ['business', 'corporate', 'organization', 'company'],
    'business': ['enterprise', 'corporate', 'commercial', 'company'],
    'corporate': ['enterprise', 'business', 'company', 'organization'],
    'workflow': ['process', 'procedure', 'operation', 'business process'],
    
    // Government & Civic
    'government': ['public sector', 'civic', 'municipal', 'federal', 'state'],
    'civic': ['government', 'public sector', 'citizen', 'municipal'],
    'citizen': ['public', 'civic', 'government', 'municipal'],
    'municipal': ['city', 'local government', 'civic', 'public sector'],
    'federal': ['government', 'national', 'public sector'],
    'public': ['government', 'civic', 'citizen', 'sector'],
    
    // Specific Government Services
    'permit': ['licensing', 'approval', 'application', 'government'],
    'planning': ['zoning', 'development', 'city planning', 'municipal'],
    'emergency': ['crisis', 'disaster', 'response', 'coordination'],
    'voter': ['election', 'voting', 'democratic', 'registration'],
    'grant': ['funding', 'research', 'federal', 'management'],
    
    // Technology & Features
    'tracking': ['monitoring', 'following', 'recording', 'logging'],
    'scheduler': ['scheduling', 'calendar', 'appointment', 'booking'],
    'scheduling': ['scheduler', 'calendar', 'appointment', 'booking'],
    'real-time': ['live', 'instant', 'immediate', 'streaming'],
    'cloud': ['web-based', 'online', 'saas', 'hosted'],
    'mobile': ['app', 'smartphone', 'tablet', 'portable'],
    
    // Finance & Commerce
    'fintech': ['financial technology', 'finance', 'banking', 'payments'],
    'financial': ['finance', 'money', 'banking', 'fintech'],
    'subscription': ['recurring', 'membership', 'saas', 'billing'],
    'ecommerce': ['online shopping', 'retail', 'commerce', 'shopify'],
    'loyalty': ['rewards', 'retention', 'customer', 'program'],
    
    // Logistics & Operations
    'logistics': ['supply chain', 'delivery', 'shipping', 'transportation'],
    'delivery': ['shipping', 'logistics', 'last-mile', 'transportation'],
    'routing': ['navigation', 'optimization', 'path finding', 'logistics'],
    'fleet': ['vehicle management', 'logistics', 'transportation'],
    
    // Compliance & Standards
    'hipaa': ['healthcare compliance', 'privacy', 'medical records'],
    'fhir': ['healthcare interoperability', 'hl7', 'health data'],
    'soc-2': ['security compliance', 'audit', 'enterprise security'],
    'fedramp': ['government compliance', 'federal security', 'cloud security'],
    'gdpr': ['privacy compliance', 'data protection', 'european'],
    'compliance': ['regulations', 'standards', 'audit', 'governance']
  }
  
  const keywords = new Set(words)
  
  // Add related concepts
  words.forEach(word => {
    if (conceptMap[word]) {
      conceptMap[word].forEach(concept => keywords.add(concept))
    }
  })
  
  return keywords
}

/**
 * Calculate keyword-based similarity score
 * @param {Set<string>} queryKeywords - Keywords from query
 * @param {Object} project - Project object with metadata
 * @returns {number} Similarity score between 0 and 1
 */
export const calculateKeywordSimilarity = (queryKeywords, project) => {
  // Extract project text for matching
  const projectText = [
    project.title,
    project.caption,
    project.client,
    ...(project.categories || []),
    project.metadata?.projectType,
    project.metadata?.industry,
    ...(project.metadata?.problemsSolved || []),
    ...(project.metadata?.techniques || []),
    project.metadata?.targetAudience
  ].filter(Boolean).join(' ')
  
  const projectKeywords = extractKeywords(projectText)
  
  // Calculate intersection
  let weightedScore = 0
  
  queryKeywords.forEach(keyword => {
    // Direct match
    if (projectKeywords.has(keyword)) {
      weightedScore += 1
    }
    
    // Partial matches (for compound words)
    projectKeywords.forEach(projectKeyword => {
      if (projectKeyword.includes(keyword) || keyword.includes(projectKeyword)) {
        weightedScore += 0.3
      }
    })
  })
  
  // Enhanced domain-specific boosting
  const queryText = Array.from(queryKeywords).join(' ').toLowerCase()
  const projectTextLower = projectText.toLowerCase()
  
  // Healthcare domain boosting
  const healthcareTerms = ['healthcare', 'medical', 'clinical', 'patient', 'health', 'telemetry', 'monitoring', 'icu', 'vital signs'];
  const therapyTerms = ['therapy', 'therapist', 'mental health', 'cbt', 'behavioral', 'counseling', 'ptsd'];
  const oncologyTerms = ['oncology', 'cancer', 'genomic', 'treatment', 'clinical trials'];
  const labTerms = ['hematology', 'lab', 'laboratory', 'diagnostic', 'cbc', 'blood', 'pathology'];
  const radiologyTerms = ['radiology', 'imaging', 'pacs', 'teleradiology', 'medical imaging', 'dicom'];
  
  if (healthcareTerms.some(term => queryText.includes(term))) {
    if (project.metadata?.industry === 'Healthcare' || 
        healthcareTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 3
    }
  }
  
  if (therapyTerms.some(term => queryText.includes(term))) {
    if (therapyTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 4
    }
  }
  
  if (oncologyTerms.some(term => queryText.includes(term))) {
    if (oncologyTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 4
    }
  }
  
  if (labTerms.some(term => queryText.includes(term))) {
    if (labTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 4
    }
  }
  
  if (radiologyTerms.some(term => queryText.includes(term))) {
    if (radiologyTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 4
    }
  }
  
  // Enterprise domain boosting
  const enterpriseTerms = ['enterprise', 'business', 'dashboard', 'analytics', 'kpi', 'saas'];
  if (enterpriseTerms.some(term => queryText.includes(term))) {
    if (project.metadata?.industry === 'Enterprise' ||
        enterpriseTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 3
    }
  }
  
  // Government domain boosting
  const governmentTerms = ['government', 'civic', 'citizen', 'municipal', 'federal', 'public sector', 'permit', 'emergency', 'voter', 'grant'];
  if (governmentTerms.some(term => queryText.includes(term))) {
    if (project.metadata?.industry === 'Government' ||
        governmentTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 3
    }
  }
  
  // Technology type boosting  
  const dashboardTerms = ['dashboard', 'interface', 'visualization', 'monitoring'];
  if (dashboardTerms.some(term => queryText.includes(term))) {
    if (project.metadata?.projectType?.includes('Visualization') ||
        project.metadata?.projectType?.includes('UI') ||
        dashboardTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 2
    }
  }
  
  const platformTerms = ['platform', 'system', 'application', 'software', 'solution', 'service'];
  if (platformTerms.some(term => queryText.includes(term))) {
    if (platformTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 1
    }
  }
  
  // AI/ML boosting
  const aiTerms = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'algorithm', 'automated'];
  if (aiTerms.some(term => queryText.includes(term))) {
    if (aiTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 2
    }
  }
  
  // Compliance boosting (check project content for compliance terms)
  const complianceTerms = ['hipaa', 'fhir', 'soc-2', 'fedramp', 'gdpr', 'compliance'];
  if (complianceTerms.some(term => queryText.includes(term))) {
    if (complianceTerms.some(term => projectTextLower.includes(term))) {
      weightedScore += 3
    }
  }
  
  // Normalize score
  const maxPossibleScore = queryKeywords.size + 20 // Increased for new bonuses
  return Math.min(1, weightedScore / maxPossibleScore)
}

/**
 * Get relevant buyer description for a search query
 * @param {string} query - Search query
 * @param {Object} buyerDescriptions - AI-generated buyer descriptions
 * @returns {string|null} Most relevant description
 */
const getRelevantBuyerDescription = (query, buyerDescriptions) => {
  if (!buyerDescriptions || Object.keys(buyerDescriptions).length === 0) {
    return null;
  }
  
  const queryLower = query.toLowerCase();
  
  // Priority order for matching descriptions with more specific triggers
  const descriptionPriority = [
    { 
      key: 'aiPlatform', 
      triggers: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'algorithm', 'automated', 'smart', 'intelligent'],
      weight: 3
    },
    { 
      key: 'healthcareSolution', 
      triggers: ['healthcare', 'medical', 'clinical', 'patient', 'health', 'therapy', 'therapist', 'hospital', 'care', 'treatment', 'diagnosis'],
      weight: 3
    },
    { 
      key: 'enterpriseSoftware', 
      triggers: ['enterprise', 'business', 'corporate', 'software', 'system', 'workflow', 'team', 'organization', 'company'],
      weight: 2
    },
    { 
      key: 'dataVisualization', 
      triggers: ['data', 'visualization', 'analytics', 'chart', 'dashboard', 'metrics', 'graph', 'visual', 'report'],
      weight: 2
    },
    { 
      key: 'userExperience', 
      triggers: ['ui', 'ux', 'user', 'interface', 'experience', 'design', 'usability', 'interaction'],
      weight: 1
    }
  ];
  
  // Score each description based on trigger matches
  const scores = descriptionPriority.map(desc => {
    if (!buyerDescriptions[desc.key]) return { key: desc.key, score: 0, description: null };
    
    const matchCount = desc.triggers.filter(trigger => queryLower.includes(trigger)).length;
    const score = matchCount * desc.weight;
    
    return {
      key: desc.key,
      score,
      description: buyerDescriptions[desc.key]
    };
  }).filter(item => item.description && item.score > 0);
  
  // Return the highest scoring description
  if (scores.length > 0) {
    scores.sort((a, b) => b.score - a.score);
    return scores[0].description;
  }
  
  // If no specific match, return a random available description to add variety
  const availableDescriptions = Object.values(buyerDescriptions).filter(Boolean);
  if (availableDescriptions.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableDescriptions.length);
    return availableDescriptions[randomIndex];
  }
  
  return null;
}

/**
 * Search projects using keyword similarity
 * Since we can't generate OpenAI embeddings client-side, we use intelligent keyword matching
 * @param {string} query - Search query
 * @param {Array} projects - Array of projects with embeddings
 * @param {Object} filters - Optional filters
 * @returns {Array} Sorted results with similarity scores
 */
export const performClientSideSemanticSearch = (query, projects, filters = {}) => {
  if (!query || query.trim().length < 2) {
    return []
  }
  
  console.log('🔍 Performing enhanced semantic search for:', query)
  console.log('📊 Searching through', projects.length, 'projects')
  
  // Extract keywords from query
  const queryKeywords = extractKeywords(query)
  console.log('🔑 Query keywords:', Array.from(queryKeywords))
  
  // Calculate similarity scores for each project
  const results = projects.map(project => {
    const keywordSimilarity = calculateKeywordSimilarity(queryKeywords, project)
    
    // Get relevant buyer description
    const relevantDescription = getRelevantBuyerDescription(query, project.buyerDescriptions)
    
    return {
      ...project,
      similarity: Math.max(0, Math.min(1, keywordSimilarity)),
      similarityPercent: Math.round(keywordSimilarity * 100),
      aiDescription: relevantDescription
    }
  })
  
  // Apply filters
  let filteredResults = results
  
  if (filters.projectType) {
    filteredResults = filteredResults.filter(project => 
      project.metadata?.projectType === filters.projectType
    )
  }
  
  if (filters.industry) {
    filteredResults = filteredResults.filter(project => 
      project.metadata?.industry === filters.industry
    )
  }
  
  if (filters.complexity) {
    filteredResults = filteredResults.filter(project => 
      project.metadata?.complexity === filters.complexity
    )
  }
  
  // Sort by similarity score (highest first)
  filteredResults.sort((a, b) => b.similarity - a.similarity)
  
  // Only include results with some relevance
  filteredResults = filteredResults.filter(result => result.similarity > 0.1)
  
  console.log('✅ Found', filteredResults.length, 'relevant results')
  if (filteredResults.length > 0) {
    console.log('🏆 Top result:', filteredResults[0].title, `(${filteredResults[0].similarityPercent}% match)`)
  }
  
  return filteredResults.slice(0, 20) // Return top 20 results
}

/**
 * Load search index from static file
 * @returns {Promise<Array>} Projects with embeddings
 */
export const loadSearchIndex = async () => {
  try {
    // Try to load the generated search index
    const response = await fetch('/search-index.json')
    if (response.ok) {
      const data = await response.json()
      console.log('📁 Loaded search index with', data.length, 'projects')
      return data
    }
    throw new Error('Search index not found')
  } catch (error) {
    console.warn('⚠️ Could not load search index:', error.message)
    console.log('🔄 Search will use project data without pre-generated embeddings')
    return []
  }
} 