import React, { Component } from 'react'

import BackgroundImage from './background-image'

// NOTE: backgroundNotResponsive prop helps fix a bug when using GradientImageColumns
// within a Carousel component. The transition on the carousel gets fucked if
// the BackgroundImage is attempting to calculate the responsive image to use.
// Oddly, it only happens when using function call slickGoTo, not the built in nav.
// I think because Slick Carousel is resetting the width of the slide when it changes slides.

class GradientImageColumns extends Component {
  render() {

    const backgroundProps = {
      notResponsive: this.props.backgroundNotResponsive ? true : false
    };

    return (
      <div className={`gradient-image-columns ${this.props.backgroundColor ? `background--${this.props.backgroundColor}` : ''} ${this.props.reverse ? 'gradient-image-columns--reverse' : ''}`}>
        <div className="max-width content-padding">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2 left">
              <div className={`gradient-image-columns__image ${this.props.gradient ? 'gradient-image-columns__gradient' : ''} ${this.props.arrow ? 'gradient-image-columns__image--arrow' : ''}`}>
                <BackgroundImage src="home/culture-2017.jpg" {...backgroundProps} />
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 right">
              <div className={`gradient-image-columns__content ${this.props.offsetContent ? 'gradient-image-columns__content--offset' : ''}`}>
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientImageColumns
