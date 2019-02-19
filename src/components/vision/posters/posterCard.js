import React, { Component } from 'react'
//import Image from '../../image'
import BackgroundImage from '../../background-image'

class PosterCard extends Component {
  render() {
    const {
      sizes,
      id,
      title,
      image,
      downloadLink = null,
      learnMoreLink = null,
      suppressNewTab = false,
    } = this.props

    return (
      <div className="poster-card pad-vertical--double pure-u-1 pure-u-lg-1-3">
        <div className="poster-preview">
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <div className={`image-block image-block--hoverable`}>
              <div className="image-block__image-container">
                <BackgroundImage
                  src={image}
                  sizes={sizes}
                  className="image-block__image"
                  alt={id}
                />
              </div>
            </div>
          </a>
        </div>
        <div className="posterInfo">
          <h4 className="header--sm margin-top--none">{title}</h4>
          <a
            href={downloadLink}
            className="button button--primary button--block"
            target="_blank"
            rel="noopener noreferrer"
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
