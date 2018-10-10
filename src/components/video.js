import React, { Component } from 'react'

import Image from './image'

import { mediaUrl } from '../helpers'

class Video extends Component {
  render() {
    return (
      <video className={`video ${this.props.className || null}`} poster={mediaUrl(this.props.poster)} autoPlay muted playsInline loop={this.props.loop || false}>
        {this.props.sources.map(src => <source key={src.format} src={mediaUrl(src.src)} type={`video/${src.format}`} />)}
        <Image src={this.props.fallback} alt="" />
      </video>
    )
  }
}

export default Video
