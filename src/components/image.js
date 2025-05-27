import React, { Component } from 'react'

import { mediaUrl } from '../helpers'

import config from '../../config'

class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: '',
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

  getSrc = () => {
    return typeof this.img.current.currentSrc !== 'undefined'
      ? this.img.current.currentSrc
      : this.img.current.src
  }

  render() {
    let { src, externalImage, alt, className, dimensions, sizes } = this.props
    src = externalImage ? src : mediaUrl(src)

    let srcset = dimensions.map(dimension => {
      return `${src}?w=${dimension} ${dimension}w`
    })

    return externalImage ? (
      <img
        ref={this.img}
        className={className}
        alt={alt}
        src={src}
        onLoad={this.handleLoad}
        {...this.props}
      />
    ) : (
      <img
        ref={this.img}
        className={className}
        alt={alt}
        srcSet={srcset}
        sizes={sizes}
        src={`${src}?w=800`}
        onLoad={this.handleLoad}
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
