import React, { Component } from 'react'

class Columns extends Component {

  addColumnClassToChild = (child) => {
    const className = `${child.props.className ? child.props.className + ' ' : ''}columns--item--${this.props.columns}`;

    return React.cloneElement(child, { className });
   }

  render() {
    return (
      <div className="columns">
        { this.props.children.map(item => {
          return this.addColumnClassToChild(item);
        }) }
      </div>
    )
  }
}

Columns.defaultProps = {
  columns: 3
}

export default Columns
