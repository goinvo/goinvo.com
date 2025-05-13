import React, { Component } from 'react'
import Card from './card'

class MailerLiteHiringForm extends Component {

  render() {
    return (
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
    )
  }
}

export default MailerLiteHiringForm
