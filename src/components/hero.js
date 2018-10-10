import React, { Component } from 'react'

import BackgroundImage from './background-image'
import Video from './video'
import Logo from '../assets/images/logo-goinvo.inline.svg'

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
              <Video className="hero__video" sources={video} poster={poster} fallback={fallback} />
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
