import React, { Component } from 'react'
import Image from './image'

class ImageBlock extends Component {
  formatCategories = (categories) => {
    let str = '';

    categories.map((cat, i) => {
      str += `${cat.title}${i < (categories.length - 1) ? ', ' : ''}`;
      return null;
    });

    return str;
  }

  render() {
    const { title, image, externalImage, sizes = null, alt, client, date, categories, caption, className, hoverable = false } = this.props;

    return (
      <div className={`image-block ${hoverable ? 'image-block--hoverable' : ''} ${className ? className : ''}`}>
        <div className="image-block__image-container">
          {
            externalImage ?
              <img src={externalImage} className="image-block__image" alt={alt || ""} />
            : <Image src={image} sizes={sizes} className="image-block__image" alt={alt || ""}/>
          }
        </div>
        <div className="image-block__text">
          <p className={hoverable ? 'text--bold' : 'header--lg'}>{title}</p>
          {
            client || date || (categories && categories.length) ?
              <p className="text--gray">
                { client ? <span>{client}</span> : null }
                { client && (date || (categories && categories.length)) ? <span> | </span> : null }
                { (categories && categories.length) ? <span>{this.formatCategories(categories)}</span> : null }
                { date ? <span>{date}</span> : null }
              </p>
            : null
          }
          <p className="text--gray">{caption}</p>
          {
            this.props.children ?
              <div className="margin-top">
                { this.props.children }
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default ImageBlock
