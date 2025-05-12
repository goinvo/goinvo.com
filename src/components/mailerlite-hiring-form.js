import React, { Component } from 'react'
import Card from './card'
import Helmet from 'react-helmet'

class MailerLiteHiringForm extends Component {

  render() {    
    return (
      <div className="hiring-form">
        <Helmet>
          {/* <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
          <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251193306087052']", "https://form.jotform.com/")</script> */}
        </Helmet>

        <Card>
        <iframe
            id="JotFormIFrame-251193306087052"
            className="jotform-form hiring-form"
            title="Application"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            src="https://form.jotform.com/251193306087052"
            frameborder="0"
            scrolling="no"
          >
          </iframe>
        </Card>
      </div>
    )
  }
}

export default MailerLiteHiringForm
