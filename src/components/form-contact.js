import React, { useEffect, useRef } from 'react'
import Card from './card'

const JOTFORM_ID = '251276832519159'

const ContactForm = ({ showHeader = true }) => {
  const iframeRef = useRef(null)

  useEffect(() => {
    const handleMessage = (e) => {
      if (typeof e.data !== 'string') return
      const args = e.data.split(':')
      if (args[0] === 'setHeight' && args.length > 2 && args[args.length - 1] === JOTFORM_ID) {
        if (iframeRef.current) {
          iframeRef.current.style.height = args[1] + 'px'
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

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
            ref={iframeRef}
            id={`JotFormIFrame-${JOTFORM_ID}`}
            className="jotform-form contact-form"
            title="Contact"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            src={`https://form.jotform.com/${JOTFORM_ID}`}
            style={{ width: '100%', minHeight: '500px' }}
          />
        </div>
      </Card>
    </div>
  )
}

export default ContactForm
