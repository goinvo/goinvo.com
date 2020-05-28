import React, { Component } from 'react'
import ReactHubspotForm from 'react-hubspot-form'

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
          <ReactHubspotForm
            portalId="356419"
            formId={this.props.formId}
            css=""
            submitButtonClass="button button--secondary button--block"
            translations={{
              en: {
                required: 'Please fill out this field',
                submitText: this.props.submitButtonText,
              },
            }}
          />
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
