import React, { Component } from 'react'
import Card from './card'

class SubscribeForm extends Component {

  onSubmit = async (e) => {
    e.preventDefault();

    await fetch('https://assets.mailerlite.com/jsonp/1457992/forms/152494406199412364/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "fields": {
          "email": e.target.elements.email.value,
          "name": e.target.elements.name.value,
        },
        "ml-submit": 1,
        "anticsrf": true
      })
    }).then(async (response) => {
      if (response.ok) {
        var formContent = document.querySelector('.ml-subscribe-form-25168203 .row-form');
        formContent.style.display = 'none';
        var formSuccess = document.querySelector('.ml-subscribe-form-25168203 .row-success');
        formSuccess.style.display = 'block';
      } else {
        throw new Error('Network response was not ok');
      }
    }).catch((error) => {
      console.error('Error:', error);
      var formContent = document.querySelector('.ml-subscribe-form-25168203 .row-form');
      formContent.style.display = 'none';
      var formSuccess = document.querySelector('.ml-subscribe-form-25168203 .row-error');
      formSuccess.style.display = 'block';
    });
  }

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

                <form className="ml-block-form" onSubmit={this.onSubmit}>
                  <div className="ml-form-formContent">
                    <div className="ml-form-fieldRow ">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="email" placeholder="Email" autocomplete="email" required />
                      </div>
                    </div>

                    <div className="ml-form-fieldRow ml-last-item">
                      <div className="ml-field-group ml-field-name">
                        <input aria-label="name" type="text" className="form-control" data-inputmask="" name="name" placeholder="Name" autocomplete="given-name" required />
                      </div>
                    </div>
                  </div>

                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="ml-form-embedSubmit">
                    <button className="primary" type="submit" >Subscribe</button>
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

export default SubscribeForm
