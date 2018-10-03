import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'

class Feature extends Component {
  constructor(props) {
    super(props);

    this.iframe = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeIFrameToMatchContentHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeIFrameToMatchContentHeight)
  }

  resizeIFrameToMatchContentHeight = () => {
    if (window.iFrameResize && this.iframe) {
      // const options = {
      //   checkOrigin: false
      // }

      // window.iFrameResize(options, this.iframe.current);
    }
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
          src={`http://old-features.goinvo.com.s3-website-us-east-1.amazonaws.com/${this.props["*"]}`}>
        </iframe>
      </Layout>
    )
  }
}

export default Feature
