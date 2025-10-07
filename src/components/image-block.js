import React, { Component } from 'react'
import Image from './image'

import CATEGORIES_LIST from '../data/categories.json'

class ImageBlock extends Component {
  /*formatCategories = categories => {
    let str = ''

    categories.map((cat, i) => {
      const catTitle = CATEGORIES_LIST.find(CAT => CAT.id === cat).title
      str += `${catTitle}${i < categories.length - 1 ? ', ' : ''}`
      return null
    })

    return str
  }*/

  render() {
    const {
      title,
      image,
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
        </div>
        <div className="image-block__text">
          <p className={hoverable ? 'text--bold' : 'header--lg'}>{title}</p>
          {client || date || (categories && categories.length) ? (
            <p className="text--gray">
              {client ? <span>{client}</span> : null}
              {client && (date || (categories && categories.length)) ? (
                <span></span>
              ) : null}
              {categories && categories.length ? (
                <span></span>
              ) : null}
              {date ? <span> | {date}</span> : null}
            </p>

            /*<p className="text--gray">
              {client ? <span>{client}</span> : null}
              {client && (date || (categories && categories.length)) ? (
                <span> | </span>
              ) : null}
              {categories && categories.length ? (
                <span>{this.formatCategories(categories)}</span>
              ) : null}
              {date ? <span>{date}</span> : null}
            </p> */
          ) : null}
          {caption && caption.includes('<') ? (
            <p className="text--gray" dangerouslySetInnerHTML={{ __html: caption }} />
          ) : (
            <p className="text--gray">{caption}</p>
          )}
          {this.props.children ? (
            <div className="margin-top">{this.props.children}</div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ImageBlock
