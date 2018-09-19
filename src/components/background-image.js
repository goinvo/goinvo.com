import React, { Component } from 'react'

import { imageUrl } from '../helpers'

import Image from './image'

// NOTE: notResponsive prop helps fix a bug when using BackgroundImage
// within a Carousel component. The transition on the carousel gets fucked if
// the BackgroundImage is attempting to calculate the responsive image to use.
// Oddly, it only happens when using function call slickGoTo, not the built in nav.
// I think because Slick Carousel is resetting the width of the slide when it changes slides.

class BackgroundImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: ''
    }

    this.img = React.createRef();
  }

  componentDidMount() {
    if (!this.props.notResponsive) {
      this.setState({ src: this.img.current.getSrc() });
    }
  }

  updateSrc = (src) => {
    this.setState({ src });
  }

  render() {
    return (
      <div className="background-image" style={{ backgroundImage: `url(${this.props.notResponsive ? imageUrl(this.props.src) + '?w=800' : this.state.src})` }}>
        {
          !this.props.notResponsive ?
            <Image src={ this.props.src } className="background-image__image" onUpdate={this.updateSrc} ref={this.img} />
          : null
        }
      </div>
    )
  }
}

export default BackgroundImage
