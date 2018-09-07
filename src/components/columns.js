import React, { Component } from 'react'

class Columns extends Component {
  render() {
    return (
      <div className="columns">
        { this.props.children.map(item => {
          return (
            <div className={`columns__item columns__item--${this.props.columns}`}>
              { item }
            </div>
          )
        }) }
      </div>
    )
  }
}

Columns.defaultProps = {
  columns: 3
}

export default Columns
