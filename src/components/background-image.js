import React, { Component } from 'react'

import { mediaUrl } from '../helpers'

import { ExternalImage } from './optimized-image'

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

// NOTE: notResponsive prop helps fix a bug when using BackgroundImage
// within a Carousel component. The transition on the carousel gets fucked if
// the BackgroundImage is attempting to calculate the responsive image to use.
// Oddly, it only happens when using function call slickGoTo, not the built in nav.
// I think because Slick Carousel is resetting the width of the slide when it changes slides.

class BackgroundImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: '',
    }

    this.img = React.createRef()
  }

  componentDidMount() {
    if (!this.props.notResponsive) {
      // For the optimized image component, we'll use the normalized URL
      const src = normalizeImageUrl(this.props.src)
      this.setState({ src })
    }
  }

  updateSrc = src => {
    this.setState({ src })
  }

  handleLoad = event => {
    if (this.props.onLoad) {
      this.props.onLoad(event)
    }
  }

  render() {
    const { priority = false } = this.props
    const backgroundImageUrl = this.props.notResponsive
      ? normalizeImageUrl(this.props.src)
      : this.state.src || normalizeImageUrl(this.props.src)
    
    const backgroundProperty = `
      ${
        this.props.gradient
          ? 'linear-gradient(' +
            'to top,' +
            '#F3F1F0 0%,' +
            'rgba(237, 233, 230, 0.9932) 20%,' +
            'rgba(234, 228, 225, 0.9893) 25%,' +
            'rgba(234, 228, 225, 0.8979) 40%,' +
            'rgba(234, 228, 225, 0.82) 55%,' +
            'rgba(234, 228, 225, 0.538) 70%,' +
            'rgba(234, 228, 225, 0) 100%' +
            '), '
          : ''
      }
      url(${backgroundImageUrl})
      ${this.props.gradient ? ' top center / cover no-repeat' : ''}`
    const style = {}

    if (this.props.gradient) {
      style.background = backgroundProperty
    } else {
      style.backgroundImage = backgroundProperty
    }

    if (this.props.position) {
      style.backgroundPosition = this.props.position
    }

    return (
      <div className={`background-image ${this.props.className}`} style={style}>
        {!this.props.notResponsive ? (
          <ExternalImage
            src={this.props.src}
            className="background-image__image"
            onLoad={this.handleLoad}
            alt=""
            priority={priority}
            style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}
          />
        ) : null}
        {this.props.children}
      </div>
    )
  }
}

export default BackgroundImage
