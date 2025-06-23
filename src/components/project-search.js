import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ImageBlock from './image-block'
import { performClientSideSemanticSearch, loadSearchIndex } from '../utils/semantic-search'

const ProjectSearch = ({ projects = [], placeholder = "Find the perfect project for your needs" }) => {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [searchIndex, setSearchIndex] = useState([])
  const [indexLoaded, setIndexLoaded] = useState(false)
  
  // Load search index on component mount
  useEffect(() => {
    const initializeSearch = async () => {
      try {
        const index = await loadSearchIndex()
        setSearchIndex(index)
        setIndexLoaded(true)
        console.log('🔍 Search system initialized')
      } catch (error) {
        console.warn('⚠️ Search index failed to load, using fallback')
        setSearchIndex([])
        setIndexLoaded(true)
      }
    }
    
    initializeSearch()
  }, [])

  // Client-side search with debouncing
  useEffect(() => {
    if (query.trim().length < 3) {
      setResults([])
      setIsSearching(false)
      setError(null)
      return
    }
    
    if (!indexLoaded) {
      return // Wait for index to load
    }
    
    setIsSearching(true)
    setError(null)
    
    const timeoutId = setTimeout(() => {
      try {
        // Use search index if available, otherwise fall back to projects prop
        const dataSource = searchIndex.length > 0 ? searchIndex : projects
        const searchResults = performClientSideSemanticSearch(query, dataSource)
        
        setResults(searchResults)
        
        if (searchResults.length === 0) {
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
  }, [query, searchIndex, projects, indexLoaded])
  
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
            placeholder={placeholder}
            className="project-search__input"
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
                        {result.aiDescription && (
                          <div className="project-search__ai-description">
                            <p>{result.aiDescription}</p>
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
        </div>
      )}
    </div>
  )
}

export default ProjectSearch 