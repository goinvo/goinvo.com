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
    const { title, image, client, categories, caption, className, hoverable = false } = this.props;

    return (
      <div className={`image-block ${hoverable ? 'image-block--hoverable' : ''} ${className ? className : ''}`}>
        <div className="image-block__image-container">
          <Image src={image} className="image-block__image" />
        </div>
        <div className="image-block__text">
          <p className={hoverable ? 'text--bold' : 'header--lg'}>{title}</p>
          {
            client || (categories && categories.length) ?
              <p className="text--caption">
                { client ? <span>{client}</span> : null }
                { client && (categories && categories.length) ? <span> | </span> : null }
                { (categories && categories.length) ? <span>{this.formatCategories(categories)}</span> : null }
              </p>
            : null
          }
          <p className="text--caption">{caption}</p>
        </div>
      </div>
    )
  }
}

export default ImageBlock
