import React, { Component } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

class Reference extends Component {
  scrollTo = e => {
    e.preventDefault()

    if (typeof window !== 'undefined') {
      window.scroll({
        top:
          document.querySelector(`#ref-${this.props.children}`).offsetTop - 55,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  render() {
    return (
      <a href={`#ref-${this.props.children}`} onClick={this.scrollTo}>
        <sup>{this.props.children}</sup>
      </a>
    )
  }
}

export default Reference
