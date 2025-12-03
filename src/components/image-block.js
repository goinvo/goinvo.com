import React, { Component } from 'react'
import Image from './image'
import Video from './video'

class ImageBlock extends Component {
  isVideo = (src) => {
    if (!src) return false
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov']
    return videoExtensions.some(ext => src.toLowerCase().endsWith(ext))
  }

  getVideoFormat = (src) => {
    if (!src) return 'mp4'
    const extension = src.split('.').pop().toLowerCase()
    return extension
  }

  render() {
    const {
      title,
      image,
      video, // Add explicit video prop
      externalImage,
      sizes,
      alt,
      client,
      date,
      categories,
      caption,
      className,
      position,
      isSmall = false,
      hoverable = false,
      workCard = false,
      objectFit = 'cover',
    } = this.props

    // Use explicit video prop or check if image is a video
    const videoSrc = video || (this.isVideo(image) ? image : null)

    // Prepare video sources array for Video component
    const videoSources = videoSrc ? [{
      format: this.getVideoFormat(videoSrc),
      src: videoSrc
    }] : null

    return (
      <div
        className={`image-block ${hoverable ? 'image-block--hoverable' : ''} ${className || ''
          }`}
      >
        <div
          className={`image-block__image-container ${isSmall ? 'image-block__image-container--small' : ''
            } ${workCard ? 'image-block__image-container--work-card' : ''}`}
          style={{ height: '260px' }}
        >
          {videoSources ? (
            <Video
              sources={videoSources}
              className="image-block__image"
              loop={true}
              poster={image || null}
              fallback={image || null}
              style={{
                width: '100%',
                height: '100%',
                objectFit: objectFit,
                objectPosition: position || 'center center'
              }}
            />
          ) : (
            <Image
              src={image}
              alt={alt}
              className="image-block__image"
              sizes={sizes}
              externalImage={externalImage}
              style={{
                width: '100%',
                height: '100%',
                objectFit: objectFit,
                objectPosition: position || 'center center'
              }}
            />
          )}
        </div>
        <div className="image-block__text">
          <p className={hoverable ? 'text--bold' : 'header--lg'}>{title}</p>
          {client || date ? (
            <p className="text--gray">
              {client ? <span>{client}</span> : null}
              {client && date ? <span> | </span> : null}
              {date ? <span>{date}</span> : null}
            </p>
          ) : null}
          {caption && <p className="text--gray">{caption}</p>}
          {this.props.children ? (
            <div className="margin-top">{this.props.children}</div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ImageBlock
