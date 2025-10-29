import React from 'react'
import Card from './card'

// Restored embedded JotForm contact form (from commit b9660c1...)
const ContactForm = ({ showHeader = true }) => {
  return (
    <div className="form-wrapper">
      <Card className="form-card">
        {showHeader ? (
          <div className="form-header contact-form-header">
            <h2 className="header--xl margin-bottom--none">Get in touch</h2>
            <p className="margin-top--half text--gray">or email us at <a href="mailto:info@goinvo.com">info@goinvo.com</a></p>
          </div>
        ) : null}
        <div className="contact-form-frame">
          <iframe
            id="JotFormIFrame-251276832519159"
            className="jotform-form contact-form"
            title="Contact"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            src="https://form.jotform.com/251276832519159"
            style={{ width: '100%', height: '700px' }}
          />
        </div>
      </Card>
    </div>
  )
}

export default ContactForm
