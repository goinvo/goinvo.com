import React, { Component } from 'react'

import BackgroundImage from './background-image'
import Image from './image'
import Logo from '../assets/images/logo-goinvo.inline.svg'

import { mediaUrl } from '../helpers'

class Hero extends Component {
  render() {
    let { image, video, poster, fallback, caption, isLarge, withLogo, position, children } = this.props;

    return (
      <div className={`hero ${isLarge ? 'hero--large' : ''} ${video ? 'hero--video' : ''}`}>
        {
          image ?
            <div className="hero__image-container">
              <BackgroundImage src={image} className="hero__image" position={position} />
            </div>
          : null
        }
        {
          video ?
            <div className="hero__video-container">
              {
                // TODO: Add poster image / fallback here
              }
              <video className="hero__video" poster={mediaUrl(poster)} autoPlay muted playsInline>
                {video.map(src => <source key={src.format} src={mediaUrl(src.src)} type={`video/${src.format}`} />)}
                <Image src={fallback} alt="" />
              </video>
            </div>
          : null
        }
        { children ?
          <div className="hero__content max-width">
            <div className="hero__title">
              {
                withLogo ?
                  <div className="hero__logo">
                    <Logo />
                  </div>
                : null
              }
              {children}
              {
                caption ?
                  <p className="hero__caption">We deliver beautiful and useful experiences for patients, clinicians, clinics, companies, & governments.</p>
                : null
              }
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default Hero
