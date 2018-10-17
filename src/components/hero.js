import React, { Component } from 'react'
import { Link } from 'gatsby'

import BackgroundImage from './background-image'
import Video from './video'
import Logo from '../assets/images/logo-goinvo.inline.svg'

class Hero extends Component {
  renderHeroMedia = () => {
    const { image, video, poster, fallback, position } = this.props;

    if (image) {
      return (
        <div className="hero__image-container">
          <BackgroundImage src={image} className="hero__image" position={position} />
        </div>
      )
    }
    if (video) {
      return (
        <div className="hero__video-container">
          <Video className="hero__video" sources={video} poster={poster} fallback={fallback} />
        </div>
      )
    }
  }

  renderHeroBlock = () => {
    const { link = null, externalLink = false, suppressNewTab = false } = this.props;

    if (link) {
      if (externalLink) {
        return (
          <a href={link} target={suppressNewTab ? null : '_blank'} rel={suppressNewTab ? null : 'noopener noreferrer'} className="hero__link">
            { this.renderHeroMedia() }
          </a>
        )
      } else {
        return (
          <Link to={link} className="hero__link">
            { this.renderHeroMedia() }
          </Link>
        )
      }
    } else {
      return this.renderHeroMedia()
    }
  }

  render() {
    const { video, caption, isLarge, withLogo, children } = this.props;

    return (
      <div className={`hero ${isLarge ? 'hero--large' : ''} ${video ? 'hero--video' : ''}`}>
        { this.renderHeroBlock() }
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
