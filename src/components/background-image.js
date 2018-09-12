import React, { Component } from 'react'

import Image from './image'

class BackgroundImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: ''
    }
  }

  updateSrc = (src) => {
    this.setState({ src });
  }

  render() {
    return (
      <div className="background-image" style={{ backgroundImage: `url(${this.state.src})` }}>
        <Image src={ this.props.src } className="background-image__image" onUpdate={this.updateSrc} />
      </div>
    )
  }
}

export default BackgroundImage
