import React, { Component } from 'react'
import Card from './card'
import Helmet from 'react-helmet'

class ContactForm extends Component {

  // onSubmit = async (e) => {
  //   e.preventDefault();

  //   await fetch('https://assets.mailerlite.com/jsonp/1457992/forms/153042566283003711/subscribe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "fields": {
  //         "email": e.target.elements.email.value,
  //         "name": e.target.elements.name.value,
  //         "body": e.target.elements.body.value,
  //       },
  //       "ml-submit": 1,
  //       "anticsrf": true
  //     })
  //   }).then(async (response) => {
  //     if (response.ok) {
  //       var formContent = document.querySelector('.ml-subscribe-form-25396323 .row-form');
  //       formContent.style.display = 'none';
  //       var formSuccess = document.querySelector('.ml-subscribe-form-25396323 .row-success');
  //       formSuccess.style.display = 'block';
  //     } else {
  //       console.error('Network response:', response);
  //       throw new Error('Network response was not ok');
  //     }
  //   }).catch((error) => {
  //     console.error('Error:', error);
  //     var formContent = document.querySelector('.ml-subscribe-form-25396323 .row-form');
  //     formContent.style.display = 'none';
  //     var formSuccess = document.querySelector('.ml-subscribe-form-25396323 .row-error');
  //     formSuccess.style.display = 'block';
  //   });
  // }

  render() {
    return (
      <div className="hiring-form">
        <Helmet>
          {/* <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
          <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251276832519159']", "https://form.jotform.com/")</script> */}
        </Helmet>
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
      </div>
    )
  }
}

export default ContactForm
