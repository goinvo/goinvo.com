import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'

class Feature extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.iframe = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeIFrameToMatchContentHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeIFrameToMatchContentHeight)
  }

  resizeIFrameToMatchContentHeight = () => {
    this.iframe.current.scrollHeight = this.iframe.current.contentWindow.document.body.scrollHeight;
  }

  render() {
    return (
      <Layout>
        <iframe
          ref={this.iframe}
          onLoad={this.resizeIFrameToMatchContentHeight}
          frameBorder="0"
          title="GoInvo.com Feature Article"
          className="feature__iframe"
          src={`http://localhost:4567/${this.props["*"]}`}>
        </iframe>
      </Layout>
    )
  }
}

export default Feature
