import React, { useState } from 'react'
import Card from './card'

const ContactForm = ({ showHeader = true }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError(null)
    try {
      const res = await fetch('/.netlify/functions/acumbamail-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed')
      }
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error('Contact submit error:', err)
      setError('We could not send your message. Please email info@goinvo.com')
      setStatus('error')
    }
  }

  return (
    <div className="form-wrapper">
      <Card className="form-card">
        {showHeader ? (
          <div className="form-header contact-form-header">
            <h2 className="header--xl margin-bottom--none">Get in touch</h2>
            <p className="margin-top--half text--gray">or email us at <a href="mailto:info@goinvo.com">info@goinvo.com</a></p>
          </div>
        ) : null}
        <form onSubmit={handleSubmit} className="contact-form form">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2 pad-right--only-lg">
              <label htmlFor="contact-name" className="label">Your name</label>
              <input id="contact-name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="pure-u-1 pure-u-md-1-2 pad-left--only-lg">
              <label htmlFor="contact-email" className="label">Your email</label>
              <input id="contact-email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="pure-u-1">
              <label htmlFor="contact-message" className="label">How can we help?</label>
              <textarea id="contact-message" rows="6" className="form-control form-control--textarea" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <div className="pure-u-1">
              <button type="submit" className="button button--primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send'}
              </button>
              {status === 'success' && (
                <span className="text--gray" role="status" style={{ marginLeft: '12px' }}>Thanks! We’ll be in touch shortly.</span>
              )}
              {error && (
                <span className="text--gray" role="alert" style={{ marginLeft: '12px' }}>{error}</span>
              )}
            </div>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default ContactForm
