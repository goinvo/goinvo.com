import React, { Component } from 'react'

class Card extends Component {
  render() {
    const { children, link = null } = this.props;

    if (link) {
      return (
        <a href={link} className="card">
          {children}
        </a>
      )
    } else {
      return (
        <div className="card">
          {children}
        </div>
      )
    }
  }
}

export default Card
