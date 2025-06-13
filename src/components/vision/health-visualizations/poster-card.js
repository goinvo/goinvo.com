//import Image from '../../image'
import { LazyImage } from '../../optimized-image'
import React, { Component } from 'react'
import { mediaUrl } from '../../../helpers'

class PosterCard extends Component {
  render() {
    const { sizes, id, title, image, learnMoreLink = null } = this.props

    const downloadLink = this.props.downloadLink
      ? mediaUrl(this.props.downloadLink)
      : this.state.downloadLink

    return (
      <div className="poster-card margin-top--double">
        <div className="poster-preview">
          <a href={downloadLink}>
            <div className="image-block image-block--hoverable margin-top--none">
              <div className="image-block__image-container">
                <LazyImage
                  src={image}
                  sizes={sizes}
                  className="image-block__image"
                  alt={id}
                  placeholderType="skeleton"
                  placeholderColor="#f0f0f0"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
              </div>
            </div>
          </a>
        </div>
        <div className="posterInfo">
          <h4 className="header--sm margin-top--none">{title}</h4>
          <a
            href={downloadLink}
            className="button button--secondary button--block"
          >
            Download
          </a>
          <p className="text--center">
            {learnMoreLink ? <a href={learnMoreLink}>Learn More</a> : null}
          </p>
        </div>
      </div>
    )
  }
}

export default PosterCard
