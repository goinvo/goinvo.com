import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'

class ThankYouPage extends Component {

  constructor(props) {
    super(props);

    let career = false;
    if (document.URL && document.URL.indexOf("#career") >= 0) {
      career = true
    }

    this.state = {
      message: career ? "Thank you for appyling to a position with us. We will get back to you shortly." : "Thank you for contacting us. We will get back to you as soon as possible."
    }
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="GoInvo | Thank you"
        />
        <Hero image="/images/contact/studio.jpg"></Hero>
        <div className="background--blue pad-vertical--double">
          <div className="max-width max-width--sm content-padding">
            <h1 className="header--xl">{this.state.message}</h1>
          </div>
          <noscript>
            <div style={{ display: 'inline' }}>
              <img height="1" width="1" style={{ borderStyle: 'none' }} alt="" src="//www.googleadservices.com/pagead/conversion/973476681/?label=oygPCN6t2W4QyaaY0AM&amp;guid=ON&amp;script=0"/>
            </div>
          </noscript>
        </div>
      </Layout>
    )
  }
}

export default ThankYouPage

// %script{:type => "text/javascript"}
// /* <![CDATA[ */
// var google_conversion_id = 973476681;
// var google_conversion_language = "en";
// var google_conversion_format = "3";
// var google_conversion_color = "ffffff";
// var google_conversion_label = "oygPCN6t2W4QyaaY0AM";
// var google_remarketing_only = false;
// /* ]]> */
// %script{:type => "text/javascript", :src => "//www.googleadservices.com/pagead/conversion.js"}
