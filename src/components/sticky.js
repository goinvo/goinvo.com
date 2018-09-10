import React, { Component } from 'react'

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
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.setTargetOffset);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.setTargetOffset);
  }

  setTargetOffset = () => {
    this.targetOffset = document.querySelector(this.props.target).offsetTop;
  }

  // TODO: Should probably throttle this
  handleScroll = () => {
    if (window.pageYOffset + this.props.scrollOffset > this.targetOffset) {
      if (!this.state.stuck) {
        this.setState({
          stuck: true,
          contentHeight: this.container.current.scrollHeight
        }, () => {
          this.props.onStateChange(this.state.stuck);
        });
      }
    } else {
      if (this.state.stuck) {
        this.setState({
          stuck: false,
          contentHeight: 0
        }, () => {
          this.props.onStateChange(this.state.stuck);
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
