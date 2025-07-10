import React, { Component } from 'react'
import Card from './card'

class ContactForm extends Component {

  render() {
    return (
      <div className="form-wrapper">
        <Card className="form-card">
          <div className="form-header contact-form-header">
            <h2 className="header--xl margin-bottom--none">Get in touch</h2>
            <p className="margin-top--half text--gray">or email us at <a href="info@goinvo.com">info@goinvo.com</a></p>
          </div>
          <div className="contact-form-frame">
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
          </div>
        </Card>
      </div>
    )
  }
}

export default ContactForm
