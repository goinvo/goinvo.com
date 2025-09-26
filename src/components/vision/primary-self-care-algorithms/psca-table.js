import React, { Component } from 'react'

class PscaTable extends Component {
  constructor() {
    super()

    this.state = {
      scrolling: false,
    }

    this.container = React.createRef()
  }

  handleScroll = () => {
    let pos = this.container.current.scrollLeft

    if (pos > 0 && !this.state.scrolling) {
      this.setState({
        scrolling: true,
      })
    } else if (pos === 0 && this.state.scrolling) {
      this.setState({
        scrolling: false,
      })
    }
  }

  render() {
    return (
      <div
        className={`psca-table-container ${
          this.state.scrolling ? 'psca-table-container--shadow' : ''
        }`}
        ref={this.container}
        onScroll={this.handleScroll}
      >
        {this.props.children}
      </div>
    )
  }
}

export default PscaTable
