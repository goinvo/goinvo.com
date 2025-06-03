import React from 'react'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
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

// Helper to determine if we should use CORS
const shouldUseCors = () => {
  // Only use CORS in production or when not on localhost
  if (typeof window === 'undefined') return false // SSR
  return !window.location.hostname.includes('localhost') && 
         !window.location.hostname.includes('127.0.0.1') &&
         window.location.protocol === 'https:'
}

// For external images (from your CDN), use this component
export const ExternalImage = ({ src, alt, className, priority = false, ...props }) => {
  const normalizedSrc = normalizeImageUrl(src)
  const useCors = shouldUseCors()
  
  const imageProps = {
    src: normalizedSrc,
    alt,
    className,
    loading: priority ? "eager" : "lazy",
    fetchpriority: priority ? "high" : "auto",
    ...props
  }

  // Only add CORS attributes in production
  if (useCors) {
    imageProps.crossOrigin = "anonymous"
    imageProps.referrerPolicy = "no-referrer-when-downgrade"
  }
  
  return <img {...imageProps} />
}

// For local images (in src/assets/images), use this optimized component
export const OptimizedImage = ({ src, alt, className, priority = false, ...props }) => {
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
const SmartImage = ({ src, alt, className, priority = false, ...props }) => {
  // For SVGs or very small images, use external
  if (src && (src.endsWith('.svg') || src.includes('.svg'))) {
    return <ExternalImage src={src} alt={alt} className={className} priority={priority} {...props} />
  }

  // For local images, try optimized first
  if (src && !src.startsWith('http') && !src.startsWith('//')) {
    return <OptimizedImage src={src} alt={alt} className={className} priority={priority} {...props} />
  }

  // Default to external
  return <ExternalImage src={src} alt={alt} className={className} priority={priority} {...props} />
}

// High-priority image component for above-the-fold content
export const HeroCriticalImage = (props) => {
  return <SmartImage {...props} priority={true} />
}

// Standard lazy-loaded image for below-the-fold content
export const LazyImage = (props) => {
  return <SmartImage {...props} priority={false} />
}

export default SmartImage 