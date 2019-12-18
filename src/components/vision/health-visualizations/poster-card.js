import React, { Component } from 'react'
import { Lightbox } from 'react-modal-image'

//import Image from '../../image'
import BackgroundImage from '../../background-image'
import { mediaUrl } from '../../../helpers'

class PosterCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      previewOpen: false,
    }
  }

  openPreview = () => {
    this.setState({ previewOpen: true })
  }

  closePreview = () => {
    this.setState({ previewOpen: false })
  }

  render() {
    const { sizes, id, title, image, learnMoreLink = null } = this.props

    const downloadLink = this.props.downloadLink
      ? mediaUrl(this.props.downloadLink)
      : this.state.downloadLink

    return (
      <div className="poster-card margin-top--double">
        <div className="poster-preview" onClick={this.openPreview}>
          <div className="image-block image-block--hoverable margin-top--none">
            <div className="image-block__image-container">
              <BackgroundImage
                src={image}
                sizes={sizes}
                className="image-block__image"
                alt={id}
              />
            </div>
          </div>
        </div>
        <div className="posterInfo">
          <h4 className="header--sm margin-top--none">{title}</h4>
          <a
            href={downloadLink}
            className="button button--primary button--block"
          >
            Download
          </a>
          <p className="text--center">
            {learnMoreLink ? <a href={learnMoreLink}>Learn More</a> : null}
          </p>
        </div>
        {this.state.previewOpen && (
          <Lightbox
            large={mediaUrl(image)}
            alt={title}
            onClose={this.closePreview}
          />
        )}
      </div>
    )
  }
}

export default PosterCard
