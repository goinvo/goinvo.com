import React, { Component } from 'react'

class Reference extends Component {
  // TODO: Fix header offset for link
  //
  render() {
    return (
      <a href={`#ref-${this.props.children}`}>
        <sup>{this.props.children}</sup>
      </a>
    )
  }
}

export default Reference
