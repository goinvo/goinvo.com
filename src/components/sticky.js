import React, { Component } from 'react'
import { debounce } from '../helpers'

class Sticky extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stuck: false,
      contentHeight: 0,
    }

    this.container = React.createRef()
    this.placeholder = React.createRef()
  }

  componentDidMount() {
    this.setTargetOffset()
    this._debouncedCheck = debounce(this.checkStickyState, 50)
    this._debouncedSet = debounce(this.setTargetOffset, 50)
    window.addEventListener('scroll', this._debouncedCheck)
    window.addEventListener('resize', this._debouncedSet)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._debouncedCheck)
    window.removeEventListener('resize', this._debouncedSet)
  }

  setTargetOffset = () => {
    this.targetOffset = document.querySelector(this.props.target).offsetTop
    this.checkStickyState()
  }

  checkStickyState = () => {
    let stickyBasedOnWidth = false
    if (
      this.props.stickyUntilWidth &&
      window.innerWidth <= this.props.stickyUntilWidth
    ) {
      stickyBasedOnWidth = true
    }
    const stickyBasedOnScroll =
      window.pageYOffset + this.props.scrollOffset > this.targetOffset

    if (stickyBasedOnWidth || stickyBasedOnScroll) {
      if (!this.state.stuck) {
        this.setState(
          {
            stuck: true,
            contentHeight: stickyBasedOnWidth
              ? 0
              : this.container.current.scrollHeight,
          },
          () => {
            this.props.onStateChange(this.state.stuck, stickyBasedOnWidth)
          }
        )
      }
    } else {
      if (this.state.stuck) {
        this.setState(
          {
            stuck: false,
            contentHeight: 0,
          },
          () => {
            this.props.onStateChange(this.state.stuck, stickyBasedOnWidth)
          }
        )
      }
    }
  }

  render() {
    return (
      <div
        className={`sticky`}
        style={{ paddingTop: this.state.contentHeight }}
        ref={this.container}
      >
        <div
          className={`sticky__content ${
            this.state.stuck ? 'sticky__content--is-stuck' : ''
          }`}
          style={{
            top: this.props.top || 0,
            zIndex: this.props.zIndex || 'auto',
          }}
        >
          {this.props.children}
        </div>
        <div className="placeholder" ref={this.placeholder} />
      </div>
    )
  }
}

export default Sticky
