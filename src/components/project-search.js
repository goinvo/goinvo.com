import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import ImageBlock from './image-block'
import Card from './card'
import Image from './image'
import config from '../../config'
import { performClientSideSemanticSearch, loadSearchIndex } from '../utils/semantic-search'

// Helper to call Netlify Functions with graceful local fallback
async function callFunction(name, payload) {
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload || {})
  }
  // Try relative path (works in Netlify dev proxy or production)
  try {
    const res = await fetch(`/.netlify/functions/${name}`, opts)
    if (res.ok) return await res.json()
  } catch {}
  // Fallback to local functions port if running Gatsby alone
  try {
    const res = await fetch(`http://localhost:8888/.netlify/functions/${name}`, opts)
    if (res.ok) return await res.json()
  } catch {}
  throw new Error(`Function ${name} unavailable`)
}

// Ensure we never show duplicate projects by slug
function dedupeBySlug(items) {
  const seen = new Set()
  const out = []
  for (const item of items || []) {
    const key = item && item.slug
    if (!key) continue
    if (seen.has(key)) continue
    seen.add(key)
    out.push(item)
  }
  return out
}

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

const ProjectSearch = ({ projects = [], externalQuery = null, aiEnabledOverride = undefined, selectedPersonaOverride = undefined, hideInput = false, selectionMode = 'client' }) => {
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

  // Compute effective AI control from parent overrides if provided
  const effectiveAiEnabled = typeof aiEnabledOverride === 'boolean' ? aiEnabledOverride : aiEnabled
  const effectiveSelectedPersona = selectedPersonaOverride || selectedPersona

  // AI pipeline: server selection (ai-select) -> optional persona enhancement (ai-search)
  const performAISearch = useCallback(async ({ queryText, allProjects, aiEnabledFlag, personaKey }) => {
    // 1) Server-side selection (or keyword fallback)
    let baseResults = []
    try {
      const selection = await callFunction('ai-select', {
        query: queryText,
        topK: 20,
        projects: Array.isArray(allProjects) && allProjects.length > 0 ? allProjects : undefined
      })
      baseResults = dedupeBySlug(selection.results || [])
    } catch (e) {
      // Fallback to client-side semantic search
      baseResults = dedupeBySlug(
        performClientSideSemanticSearch(queryText, allProjects || [])
        .map(r => ({
          slug: r.slug,
          title: r.title,
          caption: r.caption,
          categories: r.categories || [],
          image: r.image || '',
          score: r.similarity || r.score || 0,
          aiDescription: r.aiDescription || null
        }))
      )
    }

    // If AI enhancement disabled, return base results
    if (!aiEnabledFlag) {
      return { finalResults: dedupeBySlug(baseResults), aiInsight: null, detectedPersonaOut: null }
    }

    // 2) Persona enhancement via ai-search
    try {
      const payloadProjects = baseResults.slice(0, 10).map(p => ({
        slug: p.slug,
        title: p.title,
        caption: p.caption,
        categories: p.categories || [],
        score: p.score || 0
      }))
      const ai = await callFunction('ai-search', {
        query: queryText,
        projects: payloadProjects,
        preset: personaKey || null,
        useAI: true,
        autoDetectPersona: !personaKey
      })

      const enhanced = (ai.results || []).map(er => {
        const base = baseResults.find(b => b.slug === er.slug) || er
        return {
          ...base,
          aiDescription: er.aiDescription || base.aiDescription || null,
          aiRelevant: er.aiRelevant === true
        }
      })
      // Only keep items the AI marked as relevant
      const enhancedRelevant = enhanced.filter(item => item.aiRelevant)
      return { finalResults: dedupeBySlug(enhancedRelevant), aiInsight: ai.searchInsight || null, detectedPersonaOut: ai.detectedPersona || null }
    } catch (e) {
      // If enhancement fails, just return base results
      return { finalResults: dedupeBySlug(baseResults), aiInsight: null, detectedPersonaOut: null }
    }
  }, [])
  
  // Load search index if available
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const data = await loadSearchIndex()
        if (mounted) {
          setSearchIndex(Array.isArray(data) ? data : [])
          setIndexLoaded(true)
        }
      } catch (e) {
        if (mounted) {
          setSearchIndex([])
          setIndexLoaded(true)
        }
      }
    })()
    return () => { mounted = false }
  }, [])

  // Restore search state on component mount ONLY if user returned via back navigation from a result
  useEffect(() => {
    if (indexLoaded && !stateRestored) {
      let shouldRestore = false
      try {
        shouldRestore = sessionStorage.getItem('ai_search_expect_restore') === '1'
      } catch (_) {}

      if (shouldRestore) {
        const savedState = loadSearchState()
        if (savedState && savedState.searchQuery) {
          setQuery(savedState.searchQuery)
          setResults(savedState.searchResults || [])
          setAiEnabled(savedState.aiEnabled !== undefined ? savedState.aiEnabled : true)
          setSelectedPersona(savedState.selectedPersona || null)
          setDetectedPersona(savedState.detectedPersona || null)
          setAiSearchInsight(savedState.aiSearchInsight || null)
          // Inform homepage to hide spotlights
          try { window.dispatchEvent(new CustomEvent('ai-search-results', { detail: { hasResults: Array.isArray(savedState.searchResults) && savedState.searchResults.length > 0 } })) } catch (_) {}
          // Clear flag so we do not auto-restore on fresh visits
          try { sessionStorage.removeItem('ai_search_expect_restore') } catch (_) {}
          // Scroll to search area after a brief delay
          setTimeout(() => {
            const searchElement = document.querySelector('.project-search')
            if (searchElement) {
              searchElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 100)
        }
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

  // Accept external query (e.g., from homepage hero search) and trigger a search
  useEffect(() => {
    // If we're about to restore state (back navigation), skip external query to avoid clearing restored results
    try {
      const shouldRestore = sessionStorage.getItem('ai_search_expect_restore') === '1'
      if (shouldRestore) return
    } catch (_) {}

    if (externalQuery && externalQuery.trim().length >= 2) {
      setQuery(externalQuery)
      setResults([])
      setSearchTriggered(true)
      // Scroll into view shortly after setting query
      setTimeout(() => {
        const el = document.querySelector('.project-search')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)
    }
  }, [externalQuery])

  // Session cache helpers (robust across HMR; TTL-limited)
  const CACHE_TTL_MS = 10 * 60 * 1000
  const cacheKeyPrefix = 'ai_search_cache:'
  const readCache = (key) => {
    try {
      const raw = sessionStorage.getItem(cacheKeyPrefix + key)
      if (!raw) return null
      const { ts, data } = JSON.parse(raw)
      if (!ts || (Date.now() - ts) > CACHE_TTL_MS) {
        sessionStorage.removeItem(cacheKeyPrefix + key)
        return null
      }
      return data
    } catch (_) { return null }
  }
  const writeCache = (key, data) => {
    try {
      sessionStorage.setItem(cacheKeyPrefix + key, JSON.stringify({ ts: Date.now(), data }))
    } catch (_) {}
  }

  // Execute search pipeline when query changes
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
        const allProjects = (searchIndex && searchIndex.length > 0) ? searchIndex : projects
        const indexVersion = allProjects && allProjects.length
          ? `${allProjects.length}:${allProjects[0]?.slug || allProjects[0]?.id || 'x'}:${allProjects[allProjects.length - 1]?.slug || allProjects[allProjects.length - 1]?.id || 'y'}`
          : 'none'
        const cacheKey = `${query}|${effectiveAiEnabled ? 'ai' : 'plain'}|${effectiveSelectedPersona || 'auto'}|v=${indexVersion}`
        const cached = readCache(cacheKey)
        if (cached && Array.isArray(cached.results)) {
          setResults(cached.results)
          setAiSearchInsight(cached.insight || null)
          if (cached.detectedPersona) setDetectedPersona(cached.detectedPersona)
          setError(null)
          setIsSearching(false)
          return
        }

        const { finalResults, aiInsight, detectedPersonaOut } = await performAISearch({
          queryText: query,
          allProjects,
          aiEnabledFlag: effectiveAiEnabled,
          personaKey: effectiveSelectedPersona
        })

        setResults(finalResults)
        // Cache successful results to reduce API usage for repeated queries
        if (Array.isArray(finalResults) && finalResults.length > 0) {
          writeCache(cacheKey, { results: finalResults, insight: aiInsight, detectedPersona: detectedPersonaOut })
        }
        // Notify homepage to hide spotlights only when we truly have results
        try { window.dispatchEvent(new CustomEvent('ai-search-results', { detail: { hasResults: Array.isArray(finalResults) && finalResults.length > 0 } })) } catch(_) {}
        setSuggestions([])
        setSearchAnalysis(null)
        setAiSearchInsight(aiInsight)
        if (detectedPersonaOut) setDetectedPersona(detectedPersonaOut)
        saveSearchState({
          searchQuery: query,
          searchResults: finalResults,
          aiEnabled: effectiveAiEnabled,
          selectedPersona: effectiveSelectedPersona,
          detectedPersona: detectedPersonaOut || detectedPersona,
          aiSearchInsight: aiInsight
        })
        setError(null)
      } catch (err) {
        setError('Search is temporarily unavailable. Please try again later.')
        setResults([])
      } finally {
        setIsSearching(false)
      }
    }, 200)
    
    return () => clearTimeout(timeoutId)
  }, [query, searchIndex, indexLoaded, stateRestored, searchTriggered, effectiveAiEnabled, effectiveSelectedPersona])
  
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
    try { window.dispatchEvent(new CustomEvent('ai-search-results', { detail: { hasResults: false } })) } catch(_) {}
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

  // When navigating to a result, mark that we should restore on back and persist current state
  const handleResultNavigate = useCallback(() => {
    try {
      sessionStorage.setItem('ai_search_expect_restore', '1')
      saveSearchState({
        searchQuery: query,
        searchResults: results,
        aiEnabled,
        selectedPersona,
        detectedPersona,
        aiSearchInsight
      })
    } catch (_) {}
  }, [query, results, aiEnabled, selectedPersona, detectedPersona, aiSearchInsight, saveSearchState])

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
      {!hideInput && (
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
      )}
      
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
            const isSingleEnhanced = aiEnhancedProjects.length === 1;
            
            return (
              <div className="ai-enhanced-section">
                {/* Decorative background */}
                <div className="ai-enhanced-background"></div>
                
                <div className="ai-section-header">
                  <h4>Recommended for You</h4>
                  <p>Here are projects that may interest you based on your search:</p>
                </div>
                
                <div className={`spotlights-grid ai-enhanced-grid ${isSingleEnhanced ? 'ai-enhanced-grid--single' : ''}`}>
                  {aiEnhancedProjects.map((project) => (
                    <Card
                      key={`ai-${project.slug}`}
                      link={`/work/${project.slug}/`}
                      onClick={handleResultNavigate}
                      noShadow
                    >
                      <ImageBlock
                        title={project.title}
                        image={project.image}
                        caption={project.aiDescription ? project.aiDescription : project.caption}
                        sizes={config.sizes.fullToHalfAtMediumInsideMaxWidth}
                      />
                    </Card>
                  ))}
                </div>
              </div>
            );
          })()}
          
          {/* All Results Section */}
          <div className="all-results-section">
            {(() => {
              // Get AI-enhanced project slugs (up to 4) to filter out duplicates
              const aiEnhancedSlugs = aiEnabled ?
                results
                  .filter(project => project.aiDescription)
                  .slice(0, 4)
                  .map(project => project.slug) : [];

              // Filter out AI-enhanced projects from remaining results
              const remainingResults = results.filter(project => !aiEnhancedSlugs.includes(project.slug));

              // If there are no remaining results, don't render this section
              if (!remainingResults || remainingResults.length === 0) return null;

              const remainingCount = remainingResults.length;

              return (
                <>
                  {aiEnabled && aiEnhancedSlugs.length > 0 && (
                    <div className="all-results-header">
                      <h4>All Results</h4>
                      <p>Browse all {remainingCount} projects that match your search:</p>
                    </div>
                  )}

                  <div className="spotlights-grid ai-results-grid">
                    {remainingResults.map((project) => (
                      <Card key={project.slug} link={`/work/${project.slug}/`} onClick={handleResultNavigate} noShadow>
                        <ImageBlock
                          title={project.title}
                          image={project.image}
                          caption={project.caption}
                          sizes={config.sizes.fullToHalfAtMediumInsideMaxWidth}
                        />
                      </Card>
                    ))}
                  </div>

                  {/* See all work CTA (match Spotlights section styles) */}
                  <div className="container container--justify-center margin-top margin-bottom--double">
                    <Link
                      to="/work/?expanded=true"
                      className="button button--outline-primary button--padded"
                      aria-label="See all work page"
                    >
                      VIEW ALL WORK
                    </Link>
                  </div>
                </>
              );
            })()}
          </div>
          
        </div>
      )}

      {/* No Results State */}
      {query && !isSearching && results.length === 0 && (
        <div className="project-search__no-results" style={{ textAlign: 'center' }}>
          <h4 className="header--xl" style={{ fontWeight: 700, marginBottom: '12px' }}>No Results...</h4>
          <p className="text--gray" style={{ fontSize: '1.125rem', marginBottom: '12px' }}>We couldn't find projects for your search.</p>
          <div className="margin-bottom">
            <img
              src={`${config.cloudfrontUrl}/images/404/404-ai.png`}
              alt="No results illustration"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', WebkitMaskImage: 'linear-gradient(to bottom, black 93%, transparent)', maskImage: 'linear-gradient(to bottom, black 93%, transparent)', clipPath: 'inset(24px 3px 0 0)' }}
            />
          </div>
          <p className="text--gray">Try different or broader keywords, or explore featured work in <a href="#spotlights">Spotlights</a> below.</p>
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