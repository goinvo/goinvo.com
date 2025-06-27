import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import ImageBlock from './image-block'
import Results from './results'
import { performEnhancedSearch } from '../utils/enhanced-search'

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
  
  // Example search queries to rotate through
  const placeholderExamples = [
    "an AI transcription platform for therapists",
    "a patient portal for chronic disease management", 
    "data visualization for clinical research",
    "mobile app for medication adherence",
    "dashboard for healthcare administrators",
    "telemedicine platform for rural patients",
    "EHR system for specialty clinics",
    "health tracking app for seniors"
  ]
  
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

  // Client-side search with debouncing
  useEffect(() => {
    if (query.trim().length < 3) {
      setResults([])
      setIsSearching(false)
      setError(null)
      setSuggestions([])
      setSearchAnalysis(null)
      return
    }
    
    if (!indexLoaded) {
      return // Wait for index to load
    }
    
    setIsSearching(true)
    setError(null)
    
    const timeoutId = setTimeout(async () => {
      try {
        // Prepare search data
        const searchData = {
          projects: searchIndex
        }
        
        // Perform enhanced search
        const searchResults = await performEnhancedSearch(query, searchData)
        
        setResults(searchResults.results || [])
        setSuggestions(searchResults.suggestions || [])
        setSearchAnalysis(searchResults.searchAnalysis || null)
        
        if (searchResults.results.length === 0) {
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
  }, [query, searchIndex, indexLoaded])
  
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  
  const handleClearSearch = () => {
    setQuery('')
    setResults([])
  }

  // Quick filter buttons for common searches
  const quickFilters = [
    { label: 'AI Projects', query: 'AI artificial intelligence machine learning' },
    { label: 'UI Design', query: 'user interface design dashboard' },
    { label: 'Healthcare', query: 'healthcare medical clinical' },
    { label: 'Enterprise', query: 'enterprise business corporate' },
    { label: 'Government', query: 'government public policy' },
    { label: 'Mobile Apps', query: 'mobile app smartphone application' }
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
      
      {isSearching && (
        <div className="project-search__loading">
          <p>🧠 Searching projects...</p>
        </div>
      )}
      
      {error && (
        <div className="project-search__error">
          <p>{error}</p>
        </div>
      )}
      
      {query && !isSearching && indexLoaded && results.length > 0 && (
        <div className="project-search__results">
          <div className="project-search__results-grid">
            {results.map((result) => (
              <div key={result.id} className="project-search__result">
                <Link to={result.link || `/work/${result.slug}`} className="project-search__result-link">
                  {result.image && (
                    <ImageBlock
                      image={result.image}
                      alt={result.title}
                      title={result.title}
                      client={result.client && result.client.toLowerCase() !== 'goinvo' ? result.client : null}
                      caption={result.caption}
                      className="project-search__image-block"
                      hoverable={true}
                    >
                      <div className="project-search__result-extras">
                        {result.snippet && (
                          <div className="project-search__ai-description">
                            <p>{result.snippet}</p>
                            {result.debug?.snippetSource && (
                              <div className="project-search__snippet-metadata">
                                <small>
                                  Source: {result.debug.snippetSource}
                                  {result.debug.snippetConfidence && ` (${Math.round(result.debug.snippetConfidence * 100)}% confidence)`}
                                </small>
                              </div>
                            )}
                          </div>
                        )}
                        {result.matchedSkills && result.matchedSkills.length > 0 && (
                          <div className="project-search__matched-skills">
                            <small>
                              Matched skills: {result.matchedSkills.slice(0, 3).join(', ')}
                              {result.matchedSkills.length > 3 && ` +${result.matchedSkills.length - 3} more`}
                            </small>
                          </div>
                        )}
                        {result.metadata && (
                          <div className="project-search__result-metadata">
                            {result.metadata.projectType && (
                              <span className="project-search__metadata-tag">
                                {result.metadata.projectType}
                              </span>
                            )}
                            {result.metadata.industry && (
                              <span className="project-search__metadata-tag">
                                {result.metadata.industry}
                              </span>
                            )}
                            {result.score && (
                              <span className="project-search__metadata-tag project-search__metadata-tag--score">
                                Match: {Math.round(result.score)}%
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </ImageBlock>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {query && !isSearching && indexLoaded && results.length === 0 && !error && (
        <div className="project-search__no-results">
          <h3>No matches found</h3>
          <p>Try adjusting your search terms.</p>
          
          {suggestions.length > 0 && (
            <div className="project-search__suggestions">
              <h4>Try these suggestions:</h4>
              <div className="project-search__suggestion-buttons">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(suggestion)}
                    className="project-search__suggestion-button"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {searchAnalysis && (
            <div className="project-search__analysis">
              <details>
                <summary>Search Analysis</summary>
                <div className="project-search__analysis-content">
                  <p><strong>Detected Domain:</strong> {searchAnalysis.domain || 'None'}</p>
                  <p><strong>Detected Product:</strong> {searchAnalysis.product || 'None'}</p>
                  <p><strong>Detected Goal:</strong> {searchAnalysis.goal || 'None'}</p>
                  {searchAnalysis.detectedSkills && (
                    <>
                      {searchAnalysis.detectedSkills.technical.length > 0 && (
                        <p><strong>Technical Skills:</strong> {searchAnalysis.detectedSkills.technical.join(', ')}</p>
                      )}
                      {searchAnalysis.detectedSkills.design.length > 0 && (
                        <p><strong>Design Skills:</strong> {searchAnalysis.detectedSkills.design.join(', ')}</p>
                      )}
                      {searchAnalysis.detectedSkills.domain.length > 0 && (
                        <p><strong>Domain Knowledge:</strong> {searchAnalysis.detectedSkills.domain.join(', ')}</p>
                      )}
                    </>
                  )}
                </div>
              </details>
            </div>
          )}
        </div>
      )}
      
      {searchAnalysis && results.length > 0 && (
        <div className="project-search__results-analysis">
          <div className="project-search__analysis-summary">
            <span>Found {results.length} results</span>
            {searchAnalysis.domain && (
              <span> • Domain: {searchAnalysis.domain}</span>
            )}
            {searchAnalysis.product && (
              <span> • Product: {searchAnalysis.product}</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectSearch 