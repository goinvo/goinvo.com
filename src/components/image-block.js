import React from 'react'

import { imageUrl } from '../helpers'

const ImageBlock = ({ image, title, caption, clickable = false }) => (
  <div className={`image-block ${clickable ? 'image-block--clickable' : ''}`}>
    <div className="image-block__image-container">
      <div className="image-block__image" style={{backgroundImage: `url(${imageUrl(image)})`}}></div>
    </div>
    <p className={clickable ? 'text--bold' : 'header--lg'}>{title}</p>
    <p className="text--caption">{caption}</p>
  </div>
)

export default ImageBlock
