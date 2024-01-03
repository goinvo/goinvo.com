import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'

const frontmatter = {
  metaTitle: 'Thank You - GoInvo',
  metaDescription:
    'Thank you for contacting us! We will get back to your within 2 business hours.',
  heroImage: '/images/contact/studio.jpg',
}

class ThankYouPage extends Component {
  constructor(props) {
    super(props)

    let career = false
    if (
      typeof document !== 'undefined' &&
      document.URL &&
      document.URL.indexOf('#career') >= 0
    ) {
      career = true
    }

    this.state = {
      message: career
        ? 'Thank you for appyling.'
        : 'Thank you for contacting us.',
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Helmet>
          <script type="text-javascript">
            {`gtag('event', 'conversion', {'send_to': 'AW-973476681/oygPCN6t2W4QyaaY0AM'});`}
          </script>
        </Helmet>
        <Hero image={frontmatter.heroImage} />
        <div className="background--blue pad-vertical--double">
          <div className="max-width max-width--sm content-padding">
            <h1 className="header--xl">
              {this.state.message}
              <br />
              We will get back to you within 2 business hours.
            </h1>
          </div>
          <noscript>
            <div style={{ display: 'inline' }}>
              <img
                height="1"
                width="1"
                style={{ borderStyle: 'none' }}
                alt=""
                src="//www.googleadservices.com/pagead/conversion/973476681/?label=oygPCN6t2W4QyaaY0AM&amp;guid=ON&amp;script=0"
              />
            </div>
          </noscript>
        </div>
      </Layout>
    )
  }
}

export default ThankYouPage
