import React, { Component } from 'react'

import { mediaUrl } from '../helpers'

import config from '../../config'

class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: '',
      useLocalFallback: false,
      hasError: false,
    }

    this.img = React.createRef()
  }

  componentDidMount() {
    if (this.props.onUpdate) {
      this.img.current.addEventListener('load', this.handleUpdate)
    }
  }

  componentWillUnmount() {
    if (this.props.onUpdate) {
      this.img.current.removeEventListener('load', this.handleUpdate)
    }
  }

  handleUpdate = () => {
    const src = this.getSrc()

    if (this.state.src !== src) {
      this.setState({ src })
      this.props.onUpdate(src)
    }
  }

  handleLoad = event => {
    if (this.props.onLoad) {
      this.props.onLoad(event)
    }
  }

  // Handle image load errors and fallback to local
  handleError = () => {
    if (!this.state.useLocalFallback && !this.props.externalImage) {
      console.warn(`Image service failed for ${this.props.src}, falling back to local`)
      this.setState({
        useLocalFallback: true,
        hasError: false
      })
    } else {
      console.error(`Image failed to load: ${this.props.src}`)
      this.setState({ hasError: true })
    }
  }

  getSrc = () => {
    return typeof this.img.current.currentSrc !== 'undefined'
      ? this.img.current.currentSrc
      : this.img.current.src
  }

  render() {
    let { src, externalImage, alt, className, dimensions, sizes } = this.props

    // Determine which source to use
    let imageSrc
    let srcset = null
    //src = externalImage ? src : mediaUrl(src)

    if (externalImage) {
      // External images remain unchanged
      imageSrc = src
    } else if (this.state.useLocalFallback) {
      // Use local fallback - serve directly from public folder
      imageSrc = src.startsWith('/') ? src : `/${src}`
    } else {
      // Use image service
      imageSrc = mediaUrl(src)
      if (dimensions && dimensions.length > 0) {
        srcset = dimensions.map(dimension => {
          return `${imageSrc}?w=${dimension} ${dimension}w`
        }).join(', ')
      }
    }

    // Show error state if image completely failed to load
    if (this.state.hasError) {
      return (
        <div
          className={`${className || ''} image-error`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100px',
            backgroundColor: '#f5f5f5',
            color: '#999'
          }}
        >
          Image failed to load
        </div>
      )
    }

    return externalImage ? (
      <img
        ref={this.img}
        className={className}
        alt={alt}
        src={src}
        onLoad={this.handleLoad}
        onError={this.handleError}
        {...this.props}
      />
    ) : (
      <img
        ref={this.img}
        className={className}
        alt={alt}
        srcSet={srcset}
        sizes={sizes}
        src={this.state.useLocalFallback ? imageSrc : `${imageSrc}?w=800`}
        onLoad={this.handleLoad}
        onError={this.handleError}
        {...this.props}
      />
    )
  }
}

Image.defaultProps = {
  dimensions: [600, 900, 1200, 1500, 2000],
  sizes: config.sizes.full,
}

export default Image
