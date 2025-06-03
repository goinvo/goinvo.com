import React, { useState, useEffect } from 'react'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { mediaUrl } from '../helpers'

// Skeleton loader component
const SkeletonLoader = ({ className, style }) => (
  <div 
    className={`skeleton-loader ${className || ''}`}
    style={{
      backgroundColor: '#f0f0f0',
      backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      borderRadius: '4px',
      ...style
    }}
  />
)

// Loading spinner component
const LoadingSpinner = ({ size = 32 }) => (
  <div 
    style={{
      width: size,
      height: size,
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: 'auto'
    }}
  />
)

// Add CSS animations (inject into head)
if (typeof document !== 'undefined' && !document.getElementById('image-loading-styles')) {
  const style = document.createElement('style')
  style.id = 'image-loading-styles'
  style.textContent = `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .image-container {
      position: relative;
      overflow: hidden;
    }
    
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(240, 240, 240, 0.8);
      backdrop-filter: blur(2px);
      transition: opacity 0.3s ease;
    }
    
    .loading-overlay.fade-out {
      opacity: 0;
      pointer-events: none;
    }
  `
  document.head.appendChild(style)
}

// Helper function to ensure proper URL formatting
const normalizeImageUrl = (src) => {
  if (!src) return ''
  
  // If it's already a full URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }
  
  // If it starts with //, add https:
  if (src.startsWith('//')) {
    return `https:${src}`
  }
  
  // For relative paths, use mediaUrl
  return mediaUrl(src)
}

// Helper to determine if we should use CORS
const shouldUseCors = () => {
  // Only use CORS in production or when not on localhost
  if (typeof window === 'undefined') return false // SSR
  return !window.location.hostname.includes('localhost') && 
         !window.location.hostname.includes('127.0.0.1') &&
         window.location.protocol === 'https:'
}

// Enhanced external image component with loading states
export const ExternalImage = ({ 
  src, 
  alt, 
  className, 
  priority = false, 
  loadingType = 'skeleton', // 'skeleton', 'spinner', 'blur', 'none'
  placeholderColor = '#f0f0f0',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const normalizedSrc = normalizeImageUrl(src)
  const useCors = shouldUseCors()
  
  const handleLoad = () => {
    setIsLoading(false)
  }
  
  const handleError = () => {
    setIsLoading(false)
    setIsError(true)
  }
  
  const imageProps = {
    src: normalizedSrc,
    alt,
    className: `${className || ''} ${isLoading ? 'loading' : ''}`,
    loading: priority ? "eager" : "lazy",
    fetchpriority: priority ? "high" : "auto",
    onLoad: handleLoad,
    onError: handleError,
    style: {
      transition: 'opacity 0.3s ease',
      opacity: isLoading ? 0 : 1,
      ...props.style
    },
    ...props
  }

  // Only add CORS attributes in production
  if (useCors) {
    imageProps.crossOrigin = "anonymous"
    imageProps.referrerPolicy = "no-referrer-when-downgrade"
  }
  
  if (loadingType === 'none') {
    return <img {...imageProps} />
  }
  
  return (
    <div className="image-container" style={{ position: 'relative', backgroundColor: placeholderColor }}>
      <img {...imageProps} />
      
      {isLoading && !isError && (
        <div className="loading-overlay">
          {loadingType === 'skeleton' && (
            <SkeletonLoader 
              className={className}
              style={{ 
                width: '100%', 
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }} 
            />
          )}
          {loadingType === 'spinner' && <LoadingSpinner />}
          {loadingType === 'blur' && (
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: placeholderColor,
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 25%, transparent 25%)',
              backgroundSize: '20px 20px',
              animation: 'shimmer 2s infinite'
            }} />
          )}
        </div>
      )}
      
      {isError && (
        <div className="loading-overlay" style={{ backgroundColor: '#f8f8f8' }}>
          <div style={{ textAlign: 'center', color: '#888' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
            <div style={{ fontSize: '14px' }}>Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  )
}

// For local images (in src/assets/images), use this optimized component
export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  placeholder = 'BLURRED', // 'BLURRED', 'DOMINANT_COLOR', 'NONE'
  ...props 
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 90
            )
          }
        }
      }
    }
  `)

  // Find the matching image
  const imageNode = data.allFile.nodes.find(node => 
    node.relativePath === src || 
    node.relativePath === src.replace(/^\//, '') ||
    node.relativePath.endsWith(src.split('/').pop())
  )

  if (imageNode && imageNode.childImageSharp) {
    const image = getImage(imageNode.childImageSharp)
    return (
      <GatsbyImage
        image={image}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        {...props}
      />
    )
  }

  // Fallback to external image if not found locally
  return <ExternalImage src={src} alt={alt} className={className} priority={priority} {...props} />
}

// Smart image component that automatically chooses the best option
const SmartImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  loadingType = 'skeleton',
  placeholderColor = '#f0f0f0',
  ...props 
}) => {
  // For SVGs or very small images, use external
  if (src && (src.endsWith('.svg') || src.includes('.svg'))) {
    return (
      <ExternalImage 
        src={src} 
        alt={alt} 
        className={className} 
        priority={priority}
        loadingType={loadingType}
        placeholderColor={placeholderColor}
        {...props} 
      />
    )
  }

  // For local images, try optimized first (these have built-in blur placeholders)
  if (src && !src.startsWith('http') && !src.startsWith('//')) {
    return <OptimizedImage src={src} alt={alt} className={className} priority={priority} {...props} />
  }

  // Default to external with loading states
  return (
    <ExternalImage 
      src={src} 
      alt={alt} 
      className={className} 
      priority={priority}
      loadingType={loadingType}
      placeholderColor={placeholderColor}
      {...props} 
    />
  )
}

// High-priority image component for above-the-fold content
export const HeroCriticalImage = (props) => {
  return <SmartImage {...props} priority={true} loadingType="blur" />
}

// Standard lazy-loaded image for below-the-fold content
export const LazyImage = (props) => {
  return <SmartImage {...props} priority={false} loadingType="skeleton" />
}

// Spinner loading image for interactive elements
export const SpinnerImage = (props) => {
  return <SmartImage {...props} priority={false} loadingType="spinner" />
}

export default SmartImage 