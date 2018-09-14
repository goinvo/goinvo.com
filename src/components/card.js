import React, { Component } from 'react'

class Card extends Component {
  render() {
    const { children, className, noShadow, link = null } = this.props;

    const completeClassName = `card ${noShadow ? '' : 'card--shadow'} ${className ? className : ''}`;

    if (link) {
      return (
        <a href={link} className={completeClassName}>
          {children}
        </a>
      )
    } else {
      return (
        <div className={completeClassName}>
          {children}
        </div>
      )
    }
  }
}

export default Card
