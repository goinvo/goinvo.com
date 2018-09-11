import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'

import Card from './card'

class ContactForm extends Component {
  render() {
    return (
      <Card className={`contact-form ${ this.props.className ? this.props.className : ''}`}>
        <div className="pad-all">
          <h2 className="header--lg">Get in touch</h2>
          <HubspotForm
            portalId="356419"
            formId="888955e3-1618-46d8-b553-c06a855723be"
            css=""
            submitButtonClass="button button--primary button--block"
            translations={{
              en: {
                submitText: "Send"
              }
            }}
          />
        </div>
      </Card>
    )
  }
}

export default ContactForm
