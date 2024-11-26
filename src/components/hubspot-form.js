import React, { Component } from 'react'

import Card from './card'

import config from '../../config'

class HubspotForm extends Component {
  render() {
    return (
      <Card
        className={`hubspot-form ${
          this.props.inline ? 'hubspot-form--inline' : ''
        } ${this.props.breakout ? 'hubspot-form--breakout' : ''} ${
          this.props.className ? this.props.className : ''
        }`}
      >
        <div className="pad-all">
          <h2 className="header--lg">{this.props.title}</h2>
          {this.props.children}
        </div>
      </Card>
    )
  }
}

HubspotForm.defaultProps = {
  title: 'Get in touch',
  formId: config.hubspotContactFormId,
  submitButtonText: 'Send',
  inline: false,
}

export default HubspotForm
