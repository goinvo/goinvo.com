import React, { Component } from 'react'

class Divider extends Component {
  render() {
    return this.props.animated ? (
      <div className="divider-animated">
        <svg viewBox="0 0 49 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path vector-effect="non-scaling-stroke" d="M1 13.6667H16.9023L18.3158 11.2037L19.7293 13.6667H20.7895L21.8496 15.4259L25.7368 1L30.3263 20L31.7395 13.6667H48" stroke-linecap="square"/>
        </svg>
      </div>
    ) : (
      <div className="divider"></div>
    )
  }
}

export default Divider
