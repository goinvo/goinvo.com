import React, { Component } from 'react'

import Image from './image'
import Logo from '../assets/images/logo-goinvo.inline.svg'

class Hero extends Component {
  render() {
    let { image, caption, isLarge, withLogo, children } = this.props;

    return (
      <div className={`hero ${isLarge ? 'hero--large' : ''}`}>
        <div className="hero__image-container">
          <Image src={image} className="hero__image" alt="" />
        </div>
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
      </div>
    )
  }
}

export default Hero
