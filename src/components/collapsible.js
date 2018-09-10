import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: this.props.collapsed
    }

    this.myRef = React.createRef();
  }

  render() {
    const theHeight = this.props.collapsed ? 0 : this.myRef.current.scrollHeight;

    return (
      <div className="collapsible" ref={this.myRef} style={{ height: theHeight }}>
        { this.props.children }
      </div>
    )
  }
}

Collapsible.defaultProps = {
  collapsed: true
}

export default Collapsible
