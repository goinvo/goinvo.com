import React, { Component } from 'react'
import Card from './card'

class MailerLiteHiringForm extends Component {

  onSubmit = async (e) => {
    e.preventDefault();

    await fetch('https://assets.mailerlite.com/jsonp/1457992/forms/153043357027795998/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "fields": {
          "email": e.target.elements.email.value,
          "name": e.target.elements.name.value,
          "body": e.target.elements.body.value,
          "link": e.target.elements.fields.link.value,
        },
        "ml-submit": 1,
        "anticsrf": true
      })
    }).then(async (response) => {
      if (response.ok) {
        var formContent = document.querySelector('.ml-subscribe-form-25396746 .row-form');
        formContent.style.display = 'none';
        var formSuccess = document.querySelector('.ml-subscribe-form-25396746 .row-success');
        formSuccess.style.display = 'block';
      } else {
        console.error('Network response:', response);
        throw new Error('Network response was not ok');
      }
    }).catch((error) => {
      console.error('Error:', error);
      var formContent = document.querySelector('.ml-subscribe-form-25396746 .row-form');
      formContent.style.display = 'none';
      var formSuccess = document.querySelector('.ml-subscribe-form-25396746 .row-error');
      formSuccess.style.display = 'block';
    });
  }

  render() {
    return (
      <Card>
        <div id="mlb2-25396746" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-25396746">
          <div className="ml-form-align-center ">
            <div className="ml-form-embedWrapper embedForm">
              <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div className="ml-form-embedContent">
                    <h4>Application</h4>
                    <p>Or email us at <a href="mailto:hiring-club@goinvo.com">hiring-club@goinvo.com</a></p>
                </div>

                <form className="ml-block-form"  onSubmit={this.onSubmit}>
                  <div className="ml-form-formContent">
                    <div className="ml-form-fieldRow ">
                      <div className="ml-field-group ml-field-name ml-validate-required">
                        <input aria-label="name" aria-required="true" type="text" className="form-control" data-inputmask="" name="name" placeholder="Name" autocomplete="given-name" />
                      </div>
                    </div>

                    <div className="ml-form-fieldRow ">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="email" placeholder="Email" autocomplete="email" />
                      </div>
                    </div>

                    <div className="ml-form-fieldRow ">
                      <div className="ml-field-group ml-field-body ml-validate-required">
                        <textarea className="form-control" name="body" aria-label="body" aria-required="true" placeholder="Why are you interested in working at GoInvo?"></textarea>
                      </div>
                    </div>

                    <div className="ml-form-fieldRow ml-last-item">
                      <div className="ml-field-group ml-field-link ml-validate-required">
                        <input aria-label="link" aria-required="true" type="text" className="form-control" data-inputmask="" name="link" placeholder="Link to resume or work examples" autocomplete="" />
                      </div>
                    </div>
                  </div>

                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="ml-form-embedSubmit">
                    <button type="submit" className="primary">Send</button>
                    <button disabled="disabled" type="button" className="loading display-none">
                      <div className="ml-form-embedSubmitLoad"></div>
                      <span className="sr-only">Loading...</span>
                    </button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>

              <div className="ml-form-successBody row-success display-none">
                <div className="ml-form-successContent">
                  <h4>Thank you !</h4>
                  <p>We will try to get back to you in 2 business hours.</p>
                </div>
              </div>
              <div className="ml-form-successBody row-error display-none">
                <div className="ml-form-successContent">
                  <h4>Something went wrong...</h4>
                  <p>Please try again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default MailerLiteHiringForm
