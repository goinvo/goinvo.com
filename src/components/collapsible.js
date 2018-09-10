import React, { Component } from 'react'

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: this.props.collapsed
    }

    this.container = React.createRef();
  }

  render() {
    const scrollHeight = this.container.current ? this.container.current.scrollHeight : null;
    const height = this.props.collapsed ? 0 : scrollHeight ? scrollHeight : 'auto';

    return (
      <div className={`collapsible ${ this.props.suppressTransition ? '' : this.props.transitionSpeed === 'slow' ? 'collapsible--transition-slow' : 'collapsible--transition'}`}>
        <div className="collapsible__content" ref={this.container} style={{ height }}>
          { this.props.children }
        </div>
        <div className="collapsible__filler" style={{ height: this.props.preserveHeight && this.props.collapsed ? scrollHeight : 0 }}></div>
      </div>
    )
  }
}

Collapsible.defaultProps = {
  collapsed: true
}

export default Collapsible
