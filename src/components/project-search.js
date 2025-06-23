import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ImageBlock from './image-block'
import { performClientSideSemanticSearch, loadSearchIndex } from '../utils/semantic-search'

const ProjectSearch = ({ projects = [], placeholder = "e.g. I need a UI for an AI platform for therapists" }) => {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState({})
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
        const searchResults = performClientSideSemanticSearch(query, dataSource, selectedFilters)
        
        setResults(searchResults)
        
        if (searchResults.length === 0) {
          setError('No projects match your search. Try different keywords or remove filters.')
        }
      } catch (err) {
        console.error('Search error:', err)
        setError('Search encountered an error. Please try again.')
        setResults([])
      } finally {
        setIsSearching(false)
      }
    }, 300) // Faster response for client-side search
    
    return () => clearTimeout(timeoutId)
  }, [query, selectedFilters, searchIndex, projects, indexLoaded])
  
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  
  const handleClearSearch = () => {
    setQuery('')
    setResults([])
  }
  
  // Filter options based on metadata
  const filterOptions = {
    projectType: [
      'UI Design', 'UX Design', 'Data Visualization', 'Illustration', 
      'Research', 'Strategy', 'Healthcare Design'
    ],
    industry: [
      'Healthcare', 'Enterprise', 'Government', 'Finance', 
      'Education', 'Consumer', 'Non-profit'
    ],
    complexity: ['Simple', 'Moderate', 'Complex']
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
  
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value === prev[filterType] ? null : value
    }))
  }
  
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
        
        {/* Advanced Filters */}
        {(query || Object.keys(selectedFilters).length > 0) && indexLoaded && (
          <div className="project-search__filters">
            <span className="project-search__filters-label">Filter by:</span>
            
            {Object.entries(filterOptions).map(([filterType, options]) => (
              <div key={filterType} className="project-search__filter-group">
                <label className="project-search__filter-label">
                  {filterType === 'projectType' ? 'Project Type' : 
                   filterType === 'industry' ? 'Industry' : 'Complexity'}
                </label>
                <select
                  value={selectedFilters[filterType] || ''}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                  className="project-search__filter-select"
                >
                  <option value="">All</option>
                  {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {isSearching && (
        <div className="project-search__loading">
          <p>🧠 Analyzing semantic similarity...</p>
        </div>
      )}
      
      {error && (
        <div className="project-search__error">
          <p>{error}</p>
        </div>
      )}
      
      {query && !isSearching && indexLoaded && (
        <div className="project-search__results">
          {results.length > 0 ? (
            <>
              <div className="project-search__results-header">
                <h3>Found {results.length} relevant project{results.length !== 1 ? 's' : ''}</h3>
                <p className="text--gray">Projects ranked by semantic similarity:</p>
              </div>
              
              {/* Featured Results Section */}
              {results.filter(r => r.featured).length > 0 && (
                <div className="project-search__featured-section">
                  <h4 className="project-search__featured-title">
                    ⭐ High Matches
                  </h4>
                  <div className="project-search__featured-results">
                    {results.filter(r => r.featured).map((result) => (
                      <div key={result.id} className="project-search__result project-search__result--featured">
                        <div className="project-search__result-image">
                          {result.type === 'capability' ? (
                            <div className="project-search__capability-icon">
                              💡
                            </div>
                          ) : (
                            <Link to={result.link || `/work/${result.slug}`}>
                              {result.image && (
                                <ImageBlock
                                  image={result.image}
                                  alt={result.title}
                                  className="project-search__image"
                                />
                              )}
                            </Link>
                          )}
                        </div>
                        <div className="project-search__result-content">
                          <div className="project-search__result-header">
                            <h4 className="project-search__result-title">
                              {result.type === 'capability' ? (
                                <span className="project-search__capability-title">
                                  {result.title}
                                  <span className="project-search__capability-badge">Capability</span>
                                </span>
                              ) : (
                                <Link to={result.link || `/work/${result.slug}`}>
                                  {result.title}
                                </Link>
                              )}
                            </h4>
                            <div className="project-search__result-badges">
                              <span className="project-search__similarity-badge project-search__similarity-badge--high">
                                {result.similarityPercent}% match
                              </span>
                              <span className="project-search__featured-badge">High Match</span>
                            </div>
                          </div>
                          {result.client && (
                            <p className="project-search__result-client">
                              <strong>Client:</strong> {result.client}
                            </p>
                          )}
                          <p className="project-search__result-caption">
                            {result.caption || result.description}
                          </p>
                          {result.type === 'capability' && result.relatedCaseStudies && result.relatedCaseStudies.length > 0 && (
                            <div className="project-search__related-work">
                              <p><strong>Related work:</strong></p>
                              <div className="project-search__related-links">
                                {result.relatedCaseStudies.slice(0, 3).map(slug => (
                                  <Link 
                                    key={slug} 
                                    to={`/work/${slug}`} 
                                    className="project-search__related-link"
                                  >
                                    {slug.replace(/-/g, ' ')}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {result.aiDescription && (
                            <div className="project-search__ai-description">
                              <p><strong>Why this project fits your needs:</strong> {result.aiDescription}</p>
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
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* All Results Section */}
              {results.filter(r => !r.featured).length > 0 && (
                <div className="project-search__all-results">
                  <h4 className="project-search__section-title">
                    📋 Additional Matches
                  </h4>
                  <div className="project-search__results-grid">
                    {results.filter(r => !r.featured).map((result) => (
                      <div key={result.id} className="project-search__result">
                        <div className="project-search__result-image">
                          {result.type === 'capability' ? (
                            <div className="project-search__capability-icon">
                              💡
                            </div>
                          ) : (
                            <Link to={result.link || `/work/${result.slug}`}>
                              {result.image && (
                                <ImageBlock
                                  image={result.image}
                                  alt={result.title}
                                  className="project-search__image"
                                />
                              )}
                            </Link>
                          )}
                        </div>
                        <div className="project-search__result-content">
                          <div className="project-search__result-header">
                            <h5 className="project-search__result-title">
                              {result.type === 'capability' ? (
                                <span className="project-search__capability-title">
                                  {result.title}
                                  <span className="project-search__capability-badge">Capability</span>
                                </span>
                              ) : (
                                <Link to={result.link || `/work/${result.slug}`}>
                                  {result.title}
                                </Link>
                              )}
                            </h5>
                            <span className="project-search__similarity-badge">
                              {result.similarityPercent}% match
                            </span>
                          </div>
                          {result.client && (
                            <p className="project-search__result-client">
                              <strong>Client:</strong> {result.client}
                            </p>
                          )}
                          <p className="project-search__result-caption">
                            {result.caption || result.description}
                          </p>
                          {result.type === 'capability' && result.relatedCaseStudies && result.relatedCaseStudies.length > 0 && (
                            <div className="project-search__related-work">
                              <p><strong>Related work:</strong></p>
                              <div className="project-search__related-links">
                                {result.relatedCaseStudies.slice(0, 2).map(slug => (
                                  <Link 
                                    key={slug} 
                                    to={`/work/${slug}`} 
                                    className="project-search__related-link"
                                  >
                                    {slug.replace(/-/g, ' ')}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                          {result.aiDescription && (
                            <div className="project-search__ai-description">
                              <p><strong>Relevant for your project:</strong> {result.aiDescription}</p>
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
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="project-search__no-results">
              <h3>No matches found</h3>
              <p>Try adjusting your search terms or removing filters.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectSearch 