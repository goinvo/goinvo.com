import React, { Component } from 'react'

import Image from './image'

import { mediaUrl } from '../helpers'

class Video extends Component {
  render() {
    return (
      <video
        height={this.props.height}
        width={this.props.width}
        className={`video ${this.props.className || ''}`}
        poster={mediaUrl(this.props.poster)}
        autoPlay
        muted
        playsInline
        loop={this.props.loop || false}
        style={this.props.style || {}}
      >
        {this.props.sources.map(src => (
          <source
            key={src.format}
            src={mediaUrl(src.src)}
            type={`video/${src.format}`}
          />
        ))}
        {this.props.fallback && <Image src={this.props.fallback} alt="" />}
      </video>
    )
  }
}

export default Video
