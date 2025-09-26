import React, { Component } from 'react'

class NumberListItem extends Component {
  render() {
    return (
      <div className="number-list-item">
        <div className="number-list-item--number-container">
          <div className="number-list-item--number">
            <span>{this.props.number}</span>
          </div>
        </div>
        <div className="number-list-item--content">
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }
}

export default NumberListItem
