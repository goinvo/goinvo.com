import React, { Component } from 'react'

import BackgroundImage from './background-image'

class GradientImageColumns extends Component {
  render() {
    return (
      <div className={`gradient-image-columns ${this.props.backgroundColor ? `background--${this.props.backgroundColor}` : ''} ${this.props.reverse ? 'gradient-image-columns--reverse' : ''}`}>
        <div className="max-width content-padding">
          <div className="pure-u-1 pure-u-lg-1-2 left">
            <div className={`gradient-image-columns__image ${this.props.gradient ? 'gradient-image-columns__gradient' : ''}`}>
              <BackgroundImage src="home/culture-2017.jpg" />
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 right">
            <div className={`gradient-image-columns__content ${this.props.offsetContent ? 'gradient-image-columns__content--offset' : ''}`}>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientImageColumns
