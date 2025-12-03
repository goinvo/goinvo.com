import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { normalizeImageUrl } from '../helpers'
import config from '../../config.js'

// For external images - renders exactly like the old Image component
const ExternalImage = ({
  src,
  alt,
  className,
  sizes,
  aboveTheFold = false,
  externalImage = false,
  // Filter out these props that shouldn't be HTML attributes
  placeholderColor,
  aspectRatio,
  objectFit,
  ...props
}) => {
  const normalizedSrc = normalizeImageUrl(src)

  // Build srcset for responsive images
  let srcset = null
  if (!externalImage && config.imageDimensions) {
    srcset = config.imageDimensions.map(dimension => {
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

  const imageProps = {
    src: externalImage ? normalizedSrc : `${normalizedSrc}?w=800`,
    alt,
    className,
    loading: aboveTheFold ? "eager" : "lazy",
    ...(srcset && { srcSet: srcset }),
    ...(sizes && { sizes }),
    ...htmlProps
  }

  return <img {...imageProps} style={props.style} />
}

// For local images (in src/assets/images), use Gatsby's optimized component
const OptimizedImage = ({
  src,
  alt,
  className,
  aboveTheFold = false,
  // Filter out these props that shouldn't be passed to GatsbyImage
  placeholderColor,
  aspectRatio,
  objectFit,
  sizes,
  externalImage,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { 
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/(jpg|jpeg|png|gif|webp|avif)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              quality: 90
            )
          }
        }
      }
    }
  `)

  // Find the matching image
  const safeSrc = typeof src === 'string' ? src : ''
  const imageNode = data.allFile.nodes.find(node =>
    node.relativePath === safeSrc ||
    node.relativePath === safeSrc.replace(/^\//, '') ||
    node.relativePath.endsWith((safeSrc.split('/').pop()) || '')
  )

  if (imageNode && imageNode.childImageSharp) {
    const image = getImage(imageNode.childImageSharp)
    return (
      <GatsbyImage
        image={image}
        alt={alt}
        className={className}
        loading={aboveTheFold ? "eager" : "lazy"}
        {...props}
      />
    )
  }

  // Fallback to external image if not found locally
  return <ExternalImage
    src={src}
    alt={alt}
    className={className}
    aboveTheFold={aboveTheFold}
    sizes={sizes}
    externalImage={externalImage}
    {...props}
  />
}

// Main unified Image component
const Image = ({
  src,
  alt,
  className,
  aboveTheFold = false,
  externalImage = false,
  sizes,
  // These props provide a loading placeholder for all images
  placeholder = true,
  placeholderColor = '#f0f0f0',
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
        aboveTheFold={aboveTheFold}
        externalImage={true}
        {...props}
      />
    )
  }

  // For videos, treat as external
  if (src && /\.(mp4|webm|ogg|mov)$/i.test(src)) {
    return (
      <ExternalImage
        src={src}
        alt={alt}
        className={className}
        aboveTheFold={aboveTheFold}
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
        aboveTheFold={aboveTheFold}
        externalImage={true}
        {...props}
      />
    )
  }

  // For local images, try optimized first
  if (src && !src.startsWith('http') && !src.startsWith('//')) {
    return <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      aboveTheFold={aboveTheFold}
      {...props}
    />
  }

  // Default to external with srcset
  return (
    <ExternalImage
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      aboveTheFold={aboveTheFold}
      {...props}
    />
  )
}

export default Image
