import React, { Component } from 'react'

class Divider extends Component {
  render() {
    return this.props.animated ? (
      <svg
        className={`divider-animated ${this.props.className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 47 22"
        fill="none"
        xmlSpace="preserve"
      >
        <defs>
          <pattern
            id="grad-animate"
            x="0%"
            y="0"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
            <animate
              attributeName="x"
              from="0%"
              to="100%"
              dur="1500ms"
              repeatCount="indefinite"
            />
          </pattern>
          <linearGradient
            id="grad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            spreadMethod="repeat"
          >
            <stop
              offset="5%"
              stopColor="rgba(255, 255, 255, 0)"
              stopOpacity="0"
            />
            <stop offset="100%" stopColor="#e36216" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          id="ekg"
          d="M1 13.6667H16.9023L18.3158 11.2037L19.7293 13.6667H20.7895L21.8496 15.4259L25.7368 1L30.3263 20L31.7395 13.6667H48"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="square"
          stroke="url(#grad-animate)"
        />
      </svg>
    ) : (
      <div className={`divider ${this.props.className}`} />
    )
  }
}

export default Divider
