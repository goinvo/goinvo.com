import React, { Component } from 'react'

import Image from './image'

class GradientImageColumns extends Component {
  render() {
    return (
      <div className="pure-g gradient-image-columns">
        <div className="pure-u-1 pure-u-lg-1-2 right gradient-image-columns__gradient">
          <Image src="home/culture-2017.jpg" className="image__background" />
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 left background--black">
          <div className="gradient-image-columns__content-container">
            <div className="max-width content-padding">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="gradient-image-columns__content">
                    { this.props.children }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GradientImageColumns
