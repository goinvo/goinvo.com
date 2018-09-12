import React, { Component } from 'react'

import Image from './image'

class BackgroundImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: ''
    }

    this.img = React.createRef();
  }

  componentDidMount() {
    this.setState({ src: this.img.current.getSrc() });
  }

  updateSrc = (src) => {
    this.setState({ src });
  }

  render() {
    return (
      <div className="background-image" style={{ backgroundImage: `url(${this.state.src})` }}>
        <Image src={ this.props.src } className="background-image__image" onUpdate={this.updateSrc} ref={this.img} />
      </div>
    )
  }
}

export default BackgroundImage
