import React, { Component } from 'react'

class Card extends Component {
  render() {
    const { children, className, link = null } = this.props;

    if (link) {
      return (
        <a href={link} className={`card ${className ? className : ''}`}>
          {children}
        </a>
      )
    } else {
      return (
        <div className={`card ${className ? className : ''}`}>
          {children}
        </div>
      )
    }
  }
}

export default Card
