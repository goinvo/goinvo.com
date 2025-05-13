import React, { Component } from 'react'
import Card from './card'

class MailerLiteContactForm extends Component {

  render() {
    return (
      <Card>
        <iframe
          id="JotFormIFrame-251276832519159"
          className="jotform-form contact-form"
          title="Contact"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          src="https://form.jotform.com/251276832519159"
          frameborder="0"
          scrolling="no"
        >
        </iframe>
      </Card>
    )
  }
}

export default MailerLiteContactForm
