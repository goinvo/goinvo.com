import React, { Component } from 'react'

class Columns extends Component {
  render() {
    return (
      <div className="columns">
        {this.props.children.map(item => {
          const hiddenClass =
            item.props.hidden && item.props.hidden.condition
              ? item.props.hidden.class
              : ''
          return (
            <div
              key={item.key}
              className={`columns__item columns__item--${
                this.props.columns
              } ${hiddenClass}`}
            >
              {item}
            </div>
          )
        })}
      </div>
    )
  }
}

Columns.defaultProps = {
  columns: 3,
}

export default Columns
