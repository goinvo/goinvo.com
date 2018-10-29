import React, { Component } from 'react'
import { debounce } from '../helpers'

class Sticky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stuck: false,
      contentHeight: 0,
    }

    this.container = React.createRef();
    this.placeholder = React.createRef();
  }

  componentDidMount() {
    this.setTargetOffset();
    window.addEventListener("scroll", debounce(this.checkStickyState, 50));
    window.addEventListener("resize", debounce(this.setTargetOffset, 50));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", debounce(this.checkStickyState, 50));
    window.removeEventListener("resize", debounce(this.setTargetOffset, 50));
  }

  setTargetOffset = () => {
    this.targetOffset = document.querySelector(this.props.target).offsetTop;
    this.checkStickyState();
  }

  checkStickyState = () => {
    let stickyBasedOnWidth = false;
    if (this.props.stickyUntilWidth && window.innerWidth <= this.props.stickyUntilWidth) {
      stickyBasedOnWidth = true;
    }
    const stickyBasedOnScroll = window.pageYOffset + this.props.scrollOffset > this.targetOffset;

    if (stickyBasedOnWidth || stickyBasedOnScroll) {
      if (!this.state.stuck) {
        this.setState({
          stuck: true,
          contentHeight: stickyBasedOnWidth ? 0 : this.container.current.scrollHeight
        }, () => {
          this.props.onStateChange(this.state.stuck, stickyBasedOnWidth);
        });
      }
    } else {
      if (this.state.stuck) {
        this.setState({
          stuck: false,
          contentHeight: 0
        }, () => {
          this.props.onStateChange(this.state.stuck, stickyBasedOnWidth);
        });
      }
    }
  }

  render() {
    return (
      <div className={`sticky`} style={{ paddingTop: this.state.contentHeight }} ref={this.container}>
        <div className={`sticky__content ${this.state.stuck ? 'sticky__content--is-stuck' : ''}`}
             style={{
              top: this.props.top || 0,
              zIndex: this.props.zIndex || 'auto'
             }}>
          { this.props.children }
        </div>
        <div className="placeholder" ref={this.placeholder}></div>
      </div>
    )
  }
}

export default Sticky
