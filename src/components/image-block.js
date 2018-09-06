import React from 'react'
import Image from './image'

const ImageBlock = ({ title, image, client, categories, caption, hoverable = false }) => (
  <div className={`image-block ${hoverable ? 'image-block--hoverable' : ''}`}>
    <div className="image-block__image-container">
      <Image src={image} className="image-block__image" />
    </div>
    <div className="image-block__text">
      <p className={hoverable ? 'text--bold' : 'header--lg'}>{title}</p>
      {
        client || categories ?
          <p className="text--caption">
            { client ? <span>{client}</span> : null }
            { client && categories ? <span> | </span> : null }
            { categories ? <span>{categories}</span> : null }
          </p>
        : null
      }
      <p className="text--caption">{caption}</p>
    </div>
  </div>
)

export default ImageBlock
