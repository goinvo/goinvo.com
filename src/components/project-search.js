import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import ImageBlock from './image-block'
import Results from './results'
import { performEnhancedSearch } from '../utils/enhanced-search'

// AI Persona options
const AI_PERSONAS = [
  { key: 'healthcare_executive', label: '🏥 Healthcare Executive', description: 'ROI & compliance focused' },
  { key: 'product_manager', label: '📱 Product Manager', description: 'UX/UI best practices' },
  { key: 'researcher', label: '🔬 Clinical Researcher', description: 'Research tools & data' },
  { key: 'government_official', label: '🏛️ Government Official', description: 'Civic tech solutions' },
  { key: 'startup_founder', label: '🚀 Startup Founder', description: 'Scalable innovations' }
]

// Storage keys for state persistence
const STORAGE_KEYS = {
  searchQuery: 'ai_search_query',
  searchResults: 'ai_search_results',
  aiEnabled: 'ai_search_enabled',
  selectedPersona: 'ai_search_persona',
  detectedPersona: 'ai_search_detected_persona',
  aiSearchInsight: 'ai_search_insight',
  timestamp: 'ai_search_timestamp'
}

// State expires after 1 hour
const STATE_EXPIRY = 60 * 60 * 1000

const ProjectSearch = ({ projects = [] }) => {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [searchIndex, setSearchIndex] = useState([])
  const [indexLoaded, setIndexLoaded] = useState(false)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isPlaceholderFading, setIsPlaceholderFading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [searchAnalysis, setSearchAnalysis] = useState(null)
  
  // AI-specific states
  const [aiEnabled, setAiEnabled] = useState(true) // Default to enabled
  const [selectedPersona, setSelectedPersona] = useState(null)
  const [detectedPersona, setDetectedPersona] = useState(null)
  const [isLoadingAI, setIsLoadingAI] = useState(false)
  const [aiError, setAiError] = useState(null)
  const [aiSearchInsight, setAiSearchInsight] = useState(null)
  const [showPersonaSelector, setShowPersonaSelector] = useState(false)
  const [stateRestored, setStateRestored] = useState(false)
  const [searchTriggered, setSearchTriggered] = useState(false)
  const [expandedDescriptions, setExpandedDescriptions] = useState(new Set())
  
  // Example search queries to rotate through
  const placeholderExamples = [
    "NLP software for medical coding",
    "real-time cardiac monitoring system", 
    "vaccination record management",
    "clinical decision support tools",
    "research participant portal",
    "nutrition analysis platform",
    "consent management system",
    "health data visualization"
  ]

  // Save search state to localStorage - memoized
  const saveSearchState = useCallback((searchState) => {
    try {
      const stateToSave = {
        ...searchState,
        timestamp: Date.now()
      }
      
      Object.keys(STORAGE_KEYS).forEach(key => {
        if (stateToSave[key] !== undefined) {
          localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(stateToSave[key]))
        }
      })
    } catch (error) {
      console.warn('Failed to save search state:', error)
    }
  }, [])

  // Load search state from localStorage - memoized
  const loadSearchState = useCallback(() => {
    try {
      const timestamp = JSON.parse(localStorage.getItem(STORAGE_KEYS.timestamp) || 'null')
      
      // Check if state has expired
      if (!timestamp || Date.now() - timestamp > STATE_EXPIRY) {
        clearSearchState()
        return null
      }

      const savedState = {}
      Object.keys(STORAGE_KEYS).forEach(key => {
        const stored = localStorage.getItem(STORAGE_KEYS[key])
        if (stored) {
          try {
            savedState[key] = JSON.parse(stored)
          } catch (e) {
            console.warn(`Failed to parse stored ${key}:`, e)
          }
        }
      })

      return savedState
    } catch (error) {
      console.warn('Failed to load search state:', error)
      return null
    }
  }, [])

  // Clear search state from localStorage - memoized
  const clearSearchState = useCallback(() => {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
  }, [])

  // AI-enhanced search function - memoized to prevent re-renders
  const performAISearch = useCallback(async (searchResults) => {
    if (!aiEnabled || searchResults.length === 0) {
      return searchResults
    }
    
    setIsLoadingAI(true)
    setAiError(null)
    setAiSearchInsight(null)
    
    try {
      // Reduce payload by only sending essential fields
      const minimalProjects = searchResults.slice(0, 10).map(project => ({
        slug: project.slug,
        title: project.title,
        caption: project.caption || '',
        categories: project.categories || [],
        score: project.score || 0
      }))
      
      const response = await fetch('/.netlify/functions/ai-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          projects: minimalProjects,
          preset: selectedPersona,
          useAI: true,
          autoDetectPersona: !selectedPersona // Auto-detect if no persona selected
        })
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'AI search failed')
      }
      
      const aiData = await response.json()
      
      if (aiData.aiGenerated) {
        setAiSearchInsight(aiData.searchInsight)
        setDetectedPersona(aiData.detectedPersona)
        
        // If persona was auto-detected and we don't have one selected, use it
        if (!selectedPersona && aiData.detectedPersona) {
          setSelectedPersona(aiData.detectedPersona)
        }
        
        // Merge AI data back with full project data
        return searchResults.map(project => {
          const aiEnhancement = aiData.results.find(r => r.slug === project.slug)
          if (aiEnhancement) {
            return {
              ...project,
              aiDescription: aiEnhancement.aiDescription,
              aiEnhanced: aiEnhancement.aiEnhanced
            }
          }
          return project
        })
      }
      
      return searchResults
    } catch (err) {
      console.error('AI search error:', err)
      setAiError(err.message)
      return searchResults // Fallback to non-AI results
    } finally {
      setIsLoadingAI(false)
    }
  }, [aiEnabled, query, selectedPersona]) // Only re-create when these specific values change
  
  // Load search index on component mount
  useEffect(() => {
    const initializeSearch = async () => {
      try {
        const response = await fetch('/search-index.json')
        if (response.ok) {
          const index = await response.json()
          setSearchIndex(index)
          setIndexLoaded(true)
          console.log('🔍 Search index loaded successfully')
        } else {
          throw new Error('Search index not found')
        }
      } catch (error) {
        console.warn('⚠️ Search index failed to load, using fallback data')
        // Use projects prop as fallback
        setSearchIndex(projects)
        setIndexLoaded(true)
      }
    }
    
    initializeSearch()
  }, [projects])

  // Restore search state on component mount
  useEffect(() => {
    if (indexLoaded && !stateRestored) {
      const savedState = loadSearchState()
      
      if (savedState && savedState.searchQuery) {
        setQuery(savedState.searchQuery)
        setResults(savedState.searchResults || [])
        setAiEnabled(savedState.aiEnabled !== undefined ? savedState.aiEnabled : true)
        setSelectedPersona(savedState.selectedPersona || null)
        setDetectedPersona(savedState.detectedPersona || null)
        setAiSearchInsight(savedState.aiSearchInsight || null)
        
        // Scroll to search area after a brief delay
        setTimeout(() => {
          const searchElement = document.querySelector('.project-search')
          if (searchElement) {
            searchElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
      
      setStateRestored(true)
    }
  }, [indexLoaded, loadSearchState])

  // Rotate placeholder examples with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsPlaceholderFading(true)
      
      // After fade out completes, change text and fade back in
      setTimeout(() => {
        setPlaceholderIndex((prevIndex) => 
          (prevIndex + 1) % placeholderExamples.length
        )
        setIsPlaceholderFading(false)
      }, 300) // Match CSS transition duration
    }, 3000)
    
    return () => clearInterval(interval)
  }, [placeholderExamples.length])

  // Client-side search with debouncing - FIXED dependencies
  useEffect(() => {
    // Don't search if query is too short
    if (query.trim().length < 2) {
      setResults([])
      setIsSearching(false)
      setError(null)
      setSuggestions([])
      setSearchAnalysis(null)
      setAiSearchInsight(null)
      setSearchTriggered(false)
      return
    }
    
    // Wait for index to load and state to be restored
    if (!indexLoaded || !stateRestored) {
      return
    }
    
    // Skip search if we just restored state and have results already AND no search was manually triggered
    if (results.length > 0 && stateRestored && !searchTriggered) {
      return
    }
    
    setIsSearching(true)
    setError(null)
    setSearchTriggered(false) // Reset flag
    
    const timeoutId = setTimeout(async () => {
      try {
        // Prepare search data
        const searchData = {
          projects: searchIndex
        }
        
        // Perform enhanced search
        const searchResults = await performEnhancedSearch(query, searchData)
        
        // Apply AI enhancement if enabled
        const finalResults = await performAISearch(searchResults.results || [])
        
        setResults(finalResults)
        setSuggestions(searchResults.suggestions || [])
        setSearchAnalysis(searchResults.searchAnalysis || null)
        
        // Save search state
        saveSearchState({
          searchQuery: query,
          searchResults: finalResults,
          aiEnabled,
          selectedPersona,
          detectedPersona,
          aiSearchInsight
        })
        
        if (finalResults.length === 0) {
          setError('No projects match your search. Try different keywords.')
        }
      } catch (err) {
        console.error('Search error:', err)
        setError('Search encountered an error. Please try again.')
        setResults([])
      } finally {
        setIsSearching(false)
      }
    }, 300)
    
    return () => clearTimeout(timeoutId)
  }, [query, searchIndex, indexLoaded, stateRestored, searchTriggered]) // Added searchTriggered
  
  const handleInputChange = (e) => {
    setQuery(e.target.value)
    // Clear results when typing to trigger new search
    if (results.length > 0) {
      setResults([])
      setSearchTriggered(true)
    }
  }
  
  const handleClearSearch = () => {
    setQuery('')
    setResults([])
    setAiSearchInsight(null)
    setDetectedPersona(null)
    setSearchTriggered(false)
    setExpandedDescriptions(new Set())
    clearSearchState()
  }

  const toggleDescriptionExpansion = (projectSlug) => {
    setExpandedDescriptions(prev => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(projectSlug)) {
        newExpanded.delete(projectSlug)
      } else {
        newExpanded.add(projectSlug)
      }
      return newExpanded
    })
  }

  const handleToggleAI = () => {
    const newAiEnabled = !aiEnabled
    setAiEnabled(newAiEnabled)
    if (!newAiEnabled) {
      // When enabling AI, reset persona to trigger auto-detection
      setSelectedPersona(null)
    }
    
    // Clear results to trigger new search with updated AI settings
    if (results.length > 0) {
      setResults([])
      setSearchTriggered(true)
    }
    
    // Save updated AI preference
    saveSearchState({
      searchQuery: query,
      searchResults: results,
      aiEnabled: newAiEnabled,
      selectedPersona,
      detectedPersona,
      aiSearchInsight
    })
  }

  const handlePersonaSelect = (personaKey) => {
    setSelectedPersona(personaKey)
    setShowPersonaSelector(false)
    
    // Clear results to trigger new search with updated persona
    if (results.length > 0) {
      setResults([])
      setSearchTriggered(true)
    }
    
    // Save updated persona
    saveSearchState({
      searchQuery: query,
      searchResults: results,
      aiEnabled,
      selectedPersona: personaKey,
      detectedPersona,
      aiSearchInsight
    })
  }

  // Quick filter buttons for common searches
  const quickFilters = [
    { label: 'AI/NLP tools', query: 'NLP artificial intelligence' },
    { label: 'Clinical tools', query: 'clinical decision support' },
    { label: 'Data visualization', query: 'hGraph visualization' },
    { label: 'Research platforms', query: 'research intelligence' },
    { label: 'Patient data', query: 'health data capture' },
    { label: 'EHR systems', query: 'inspired EHRs' }
  ]
  
  return (
    <div className="project-search">
      <div className="project-search__input-container">
        <div className="project-search__input-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholderExamples[placeholderIndex]}
            className={`project-search__input ${isPlaceholderFading ? 'placeholder-fade-out' : ''}`}
            aria-label="Search projects"
            disabled={!indexLoaded}
          />
          
          {/* AI Enhancement Toggle inside input */}
          <button
            onClick={handleToggleAI}
            className={`project-search__ai-toggle-inline ${aiEnabled ? 'active' : ''} ${query ? 'with-clear' : ''}`}
            disabled={!indexLoaded}
            title={aiEnabled ? "AI is enhancing your search results" : "Enable AI-powered search"}
          >
            <span className="ai-text">AI</span>
          </button>
          
          {query && (
            <button
              onClick={handleClearSearch}
              className="project-search__clear-button"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        
        {/* Persona Selector Modal (now optional) */}
        {showPersonaSelector && (
          <div className="project-search__persona-selector">
            <h3>Select Your Role</h3>
            <p>Choose a persona for more tailored recommendations</p>
            <div className="persona-options">
              <button
                onClick={() => {
                  setSelectedPersona(null);
                  setShowPersonaSelector(false);
                }}
                className={`persona-option ${!selectedPersona ? 'selected' : ''}`}
              >
                <div className="persona-label">🎯 Auto-detect</div>
                <div className="persona-description">Let AI choose based on your search</div>
              </button>
              {AI_PERSONAS.map(persona => (
                <button
                  key={persona.key}
                  onClick={() => handlePersonaSelect(persona.key)}
                  className={`persona-option ${selectedPersona === persona.key ? 'selected' : ''}`}
                >
                  <div className="persona-label">{persona.label}</div>
                  <div className="persona-description">{persona.description}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowPersonaSelector(false)}
              className="persona-close"
            >
              Close
            </button>
          </div>
        )}
        
        {!indexLoaded && (
          <div className="project-search__loading">
            <p>🔧 Initializing search system...</p>
          </div>
        )}
        
        {!query && indexLoaded && (
          <div className="project-search__quick-filters">
            <span className="project-search__quick-filters-label">Try:</span>
            {quickFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setQuery(filter.query)}
                className="project-search__quick-filter-button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* AI Loading State */}
      {isLoadingAI && (
        <div className="project-search__ai-loading">
          <div className="ai-loading-spinner">🤖</div>
          <p>AI is analyzing your search...</p>
        </div>
      )}
      
      {/* AI Error State */}
      {aiError && (
        <div className="project-search__ai-error">
          <p>⚠️ AI enhancement unavailable: {aiError}</p>
        </div>
      )}
      
      {/* Search Results */}
      {query && !isSearching && results.length > 0 && (
        <div className="project-search__results">
          
          {/* AI-Enhanced Results Section */}
          {aiEnabled && results.some(project => project.aiDescription) && (() => {
            // Get AI-enhanced projects for featured section
            const aiEnhancedProjects = results
              .filter(project => project.aiDescription)
              .slice(0, 4);
            
            return (
              <div className="ai-enhanced-section">
                {/* Decorative background */}
                <div className="ai-enhanced-background"></div>
                
                <div className="ai-section-header">
                  <h4>Recommended for You</h4>
                  <p>These projects are most relevant to your search, with AI-generated insights:</p>
                </div>
                
                <div className="ai-enhanced-grid">
                  {aiEnhancedProjects.map((project, index) => (
                    <div 
                      key={`ai-${project.slug}`} 
                      className="ai-enhanced-item"
                    >
                      <Link to={`/work/${project.slug}/`} className="ai-enhanced-link">
                        {project.image && (
                          <div className="ai-enhanced-image">
                            <ImageBlock
                              image={project.image}
                              alt={project.title}
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        )}
                        
                        <div className="ai-enhanced-content">
                          <h5>{project.title}</h5>
                          
                          {/* AI Description or Caption */}
                          <div className="ai-description-section">
                            <p className={`ai-description-text}`}>
                              {project.aiDescription ? project.aiDescription : project.caption}
                            </p>
                          </div>
                        </div>
                        
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
          
          {/* All Results Section */}
          <div className="all-results-section">
            {(() => {
              // Get AI-enhanced project slugs to filter out duplicates
              const aiEnhancedSlugs = aiEnabled ? 
                results
                  .filter(project => project.aiDescription)
                  .slice(0, 4)
                  .map(project => project.slug) : [];
              
              // Filter out AI-enhanced projects from remaining results
              const remainingResults = results.filter(project => 
                !aiEnhancedSlugs.includes(project.slug)
              );
              
              return (
                <>
                  {aiEnabled && results.some(project => project.aiDescription) && (
                    <div className="all-results-header">
                      <h4>All Results</h4>
                      <p>Browse all {results.length} projects that match your search:</p>
                    </div>
                  )}
                  
                  <div className="results-grid">
                    {remainingResults.map((project, index) => (
                      <div 
                        key={project.slug} 
                        className="result-item"
                      >
                        <Link to={`/work/${project.slug}/`} className="result-link">
                          {project.image && (
                            <div className="result-image">
                              <ImageBlock
                                image={project.image}
                                alt={project.title}
                                sizes="(max-width: 768px) 100vw, 350px"
                              />
                            </div>
                          )}
                          
                          <div className="result-content">
                            <h4>{project.title}</h4>
                            
                            {/* Always show original caption in this section */}
                            <p className="result-caption">
                              {project.caption}
                            </p>
                            
                            {project.categories && project.categories.length > 0 && (
                              <div className="result-categories">
                                {project.categories.slice(0, 3).map((cat, i) => (
                                  <span key={i} className="category-tag">{cat}</span>
                                ))}
                              </div>
                            )}
                            
                            {/* Show match score only when AI is disabled */}
                            {!aiEnabled && project.score && (
                              <div className="result-score">
                                Match: {Math.round(project.score * 100)}%
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {isSearching && !isLoadingAI && (
        <div className="project-search__loading">
          <p>🔍 Searching projects...</p>
        </div>
      )}
      
      {/* Error State */}
      {error && !isSearching && (
        <div className="project-search__error">
          <p>{error}</p>
          {suggestions.length > 0 && (
            <div className="search-suggestions">
              <p>Suggestions:</p>
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectSearch 