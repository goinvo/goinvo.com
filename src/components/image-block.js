import React, { Component } from 'react'
import BackgroundImage from './background-image'

import CATEGORIES_LIST from '../data/categories.json'

class ImageBlock extends Component {
  formatCategories = categories => {
    if (!categories || !Array.isArray(categories)) {
      return ''
    }

    let str = ''
    categories.map((cat, i) => {
      const categoryObj = CATEGORIES_LIST.find(CAT => CAT.id === cat)
      const catTitle = categoryObj ? categoryObj.title : cat
      str += `${catTitle}${i < categories.length - 1 ? ', ' : ''}`
      return null
    })

    return str
  }

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
    } = this.props

    return (
      <div
        className={`image-block ${hoverable ? 'image-block--hoverable' : ''} ${className ? className : ''
          }`}
      >
        <div
          className={`image-block__image-container ${isSmall ? 'image-block__image-container--small' : ''
            }`}
        >
          <BackgroundImage
            src={image}
            externalImage={externalImage}
            sizes={sizes}
            className="image-block__image"
            position={position}
            alt={alt || ''}
          />
        </div>
        <div className="image-block__text">
          <p className={`card-title ${hoverable ? 'text--bold' : 'header--lg'}`}>{title}</p>
          {client || date || (categories && categories.length) ? (
            <p className="card-data text--gray">
              {client ? <span>{client}</span> : null}
              {client && (date || (categories && categories.length)) ? (
                <span> |</span>
              ) : null}
              {categories && categories.length ? (
                <span>{this.formatCategories(categories)}</span>
              ) : null}
              {date ? <span> | {date}</span> : null}
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
