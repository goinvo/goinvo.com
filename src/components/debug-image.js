import React, { useState } from 'react'
import { mediaUrl } from '../helpers'

const DebugImage = ({ src, alt, ...props }) => {
  const [loadState, setLoadState] = useState('loading')
  const [error, setError] = useState(null)
  
  const normalizedSrc = src?.startsWith('http') || src?.startsWith('//') 
    ? src 
    : mediaUrl(src)

  // Helper to determine if we should use CORS
  const shouldUseCors = () => {
    if (typeof window === 'undefined') return false
    return !window.location.hostname.includes('localhost') && 
           !window.location.hostname.includes('127.0.0.1') &&
           window.location.protocol === 'https:'
  }

  const useCors = shouldUseCors()

  const handleLoad = () => {
    setLoadState('loaded')
    console.log('✅ Image loaded successfully:', normalizedSrc)
  }

  const handleError = (e) => {
    setLoadState('error')
    setError(e.type)
    console.error('❌ Image failed to load:', normalizedSrc, e)
  }

  const imageProps = {
    src: normalizedSrc,
    alt,
    onLoad: handleLoad,
    onError: handleError,
    style: { maxWidth: '200px', display: 'block' },
    ...props
  }

  // Only add CORS in production
  if (useCors) {
    imageProps.crossOrigin = "anonymous"
  }

  return (
    <div style={{ border: `2px solid ${loadState === 'loaded' ? 'green' : loadState === 'error' ? 'red' : 'orange'}`, padding: '10px', margin: '10px' }}>
      <div style={{ fontSize: '12px', marginBottom: '5px' }}>
        <strong>Status:</strong> {loadState} | <strong>CORS:</strong> {useCors ? 'enabled' : 'disabled (localhost)'}<br/>
        <strong>URL:</strong> {normalizedSrc}
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      </div>
      <img {...imageProps} />
    </div>
  )
}

export default DebugImage 