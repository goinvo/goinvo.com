import React, { Component } from 'react'

import Card from './card'

import config from '../../config'

class MailerLiteForm extends Component {
  render() {
    return (
      <Card>
        <div id="mlb2-25168203" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-25168203">
          <div className="ml-form-align-center ">
            <div className="ml-form-embedWrapper embedForm">
              <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div className="ml-form-embedContent">
                  <h4>Subscribe to our newsletter</h4>
                  <p>You'll receive our latest ideas, visualizations, and studio news delivered to your inbox twice a month.</p>
                </div>

                <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/1457992/forms/152494406199412364/subscribe" data-code="" method="post" target="_blank">
                  <div className="ml-form-formContent">
                    <div className="ml-form-fieldRow ">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" />
                      </div>
                    </div>

                    <div className="ml-form-fieldRow ml-last-item">
                      <div className="ml-field-group ml-field-name">
                        <input aria-label="name" type="text" className="form-control" data-inputmask="" name="fields[name]" placeholder="Name" autocomplete="given-name" />
                      </div>
                    </div>
                  </div>

                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="ml-form-embedSubmit">
                    <button type="submit" className="primary">Subscribe</button>
                    <button disabled="disabled" type="button" className="loading">
                      <div className="ml-form-embedSubmitLoad"></div>
                      <span className="sr-only">Loading...</span>
                    </button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>

              </div>

              <div className="ml-form-successBody row-success display-none">
                <div className="ml-form-successContent">
                  <h4>Thank you!</h4>
                  <p>You have successfully joined our subscriber list.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Card >
    )
  }
}

export default MailerLiteForm
