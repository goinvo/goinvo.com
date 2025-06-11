import React, { useState, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { mediaUrl } from '../helpers'

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

// Skeleton loader component
const SkeletonLoader = ({ className }) => (
  <div 
    className={`skeleton-loader ${className || ''}`}
    style={{
      backgroundColor: '#f0f0f0',
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'loading 1.5s infinite',
      width: '100%',
      height: '100%',
      minHeight: '200px'
    }}
  />
)

// Enhanced external image component that renders exactly like the old Image component
export const ExternalImage = ({ 
  src, 
  alt, 
  className, 
  sizes,
  dimensions = [600, 900, 1200, 1500, 2000],
  priority = false,
  externalImage = false,
  // Filter out these props that shouldn't be HTML attributes
  placeholderColor,
  aspectRatio,
  objectFit,
  ...props 
}) => {
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [isError, setIsError] = useState(false)
  const normalizedSrc = normalizeImageUrl(src)
  
  // Hide skeleton after a short delay to allow natural image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 100) // Very short delay, just enough to show skeleton briefly
    
    return () => clearTimeout(timer)
  }, [])
  
  // Build srcset exactly like the old component
  let srcset = null
  if (!externalImage && dimensions) {
    srcset = dimensions.map(dimension => {
      return `${normalizedSrc}?w=${dimension} ${dimension}w`
    }).join(',')
  }
  
  // Filter out React-specific props that shouldn't be on the HTML element
  const { 
    placeholderType, 
    loadingType, 
    borderRadius,
    ...htmlProps 
  } = props

  const handleLoad = () => {
    // Image is fully loaded, make sure skeleton is hidden
    setShowSkeleton(false)
    if (props.onLoad) {
      props.onLoad()
    }
  }

  const handleError = () => {
    setIsError(true)
    setShowSkeleton(false)
  }
  
  const imageProps = {
    src: externalImage ? normalizedSrc : `${normalizedSrc}?w=800`,
    alt,
    className,
    loading: priority ? "eager" : "lazy",
    onLoad: handleLoad,
    onError: handleError,
    ...(srcset && { srcSet: srcset }),
    ...(sizes && { sizes }),
    ...htmlProps
  }
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {showSkeleton && !isError && <SkeletonLoader className={className} />}
      <img {...imageProps} style={props.style} />
    </div>
  )
}

// For local images (in src/assets/images), use Gatsby's optimized component
export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  // Filter out these props that shouldn't be passed to GatsbyImage
  placeholderColor,
  aspectRatio,
  objectFit,
  sizes,
  dimensions,
  externalImage,
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
        {...props}
      />
    )
  }

  // Fallback to external image if not found locally
  return <ExternalImage 
    src={src} 
    alt={alt} 
    className={className} 
    priority={priority} 
    sizes={sizes}
    dimensions={dimensions}
    externalImage={externalImage}
    {...props} 
  />
}

// Smart image component that automatically chooses the best option
const SmartImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  externalImage = false,
  sizes,
  dimensions,
  ...props 
}) => {
  // If explicitly marked as external or is a full URL, use external
  if (externalImage || (src && (src.startsWith('http') || src.startsWith('//')))) {
    return (
      <ExternalImage 
        src={src} 
        alt={alt} 
        className={className} 
        sizes={sizes}
        dimensions={dimensions}
        priority={priority}
        externalImage={true}
        {...props} 
      />
    )
  }

  // For SVGs, treat as external but don't add query params
  if (src && (src.endsWith('.svg') || src.includes('.svg'))) {
    return (
      <ExternalImage 
        src={src} 
        alt={alt} 
        className={className} 
        priority={priority}
        externalImage={true}
        {...props} 
      />
    )
  }

  // For local images, try optimized first
  if (src && !src.startsWith('http') && !src.startsWith('//')) {
    return <OptimizedImage src={src} alt={alt} className={className} priority={priority} {...props} />
  }

  // Default to external with srcset
  return (
    <ExternalImage 
      src={src} 
      alt={alt} 
      className={className} 
      sizes={sizes}
      dimensions={dimensions}
      priority={priority}
      {...props} 
    />
  )
}

// High-priority image component for above-the-fold content
export const HeroCriticalImage = (props) => {
  return <SmartImage {...props} priority={true} />
}

// Standard lazy-loaded image for below-the-fold content  
export const LazyImage = (props) => {
  return <SmartImage {...props} priority={false} />
}

// Spinner loading image for interactive elements
export const SpinnerImage = (props) => {
  return <SmartImage {...props} priority={false} />
}

export default SmartImage 