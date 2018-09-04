import React, { Component } from 'react'

import { imageUrl } from '../helpers'

class Image extends Component {
  render() {
    let { src, alt, className, dimensions, sizes } = this.props;
    src = imageUrl(src);

    let srcset = dimensions.map(dimension => {
      return `${src}?w=${dimension} ${dimension}w`
    })

    return (
      <img
        className={className}
        alt={alt}
        srcset={srcset}
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
