import React, { Component } from 'react'

import { mediaUrl } from '../helpers'

import Image from './image'

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
      this.setState({ src: this.img.current.getSrc() })
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
    const backgroundImageUrl = this.props.notResponsive
      ? mediaUrl(this.props.src) + '?w=900'
      : this.state.src
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
          <Image
            src={this.props.src}
            externalImage={this.props.externalImage}
            className="background-image__image"
            sizes={this.props.sizes}
            onUpdate={this.updateSrc}
            ref={this.img}
            onLoad={this.handleLoad}
          />
        ) : null}
        {this.props.children}
      </div>
    )
  }
}

export default BackgroundImage
