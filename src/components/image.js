import React, { Component } from 'react'

import { imageUrl } from '../helpers'

class Image extends Component {
  constructor(props){
    super(props);

    this.state = {
      src: ''
    }

    this.img = React.createRef();
  }

  componentDidMount() {
    if (this.props.onUpdate) {
      this.img.current.addEventListener('load', this.handleUpdate);
    }
  }

  componentWillUnmount() {
    if (this.props.onUpdate) {
      this.img.current.removeEventListener('load', this.handleUpdate);
    }
  }

  handleUpdate = () => {
    const src = this.getSrc();

    if (this.state.src !== src) {
      this.setState({src});
      this.props.onUpdate(src);
    }
  }

  getSrc = () => {
    return typeof this.img.current.currentSrc !== 'undefined' ? this.img.current.currentSrc : this.img.current.src;
  }

  render() {
    let { src, alt, className, dimensions, sizes } = this.props;
    src = imageUrl(src);

    let srcset = dimensions.map(dimension => {
      return `${src}?w=${dimension} ${dimension}w`
    })

    return (
      <img
        ref={this.img}
        className={className}
        alt={alt}
        srcSet={srcset}
        sizes={sizes}
        src={`${src}?w=800`} />
    )
  }
}

Image.defaultProps = {
  dimensions: [ 320, 480, 600, 900, 1200 ],
  sizes: ['(max-width: 1200px) 100vw', '1200px']
}

export default Image
