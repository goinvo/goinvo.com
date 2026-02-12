import React, { Component } from 'react'
import Card from './card'

class SubscribeForm extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://eocampaign1.com/form/e260d99a-9007-11f0-9271-35d5d1204339.js'
    script.async = true
    script.dataset.form = 'e260d99a-9007-11f0-9271-35d5d1204339'
    this.container.appendChild(script)
  }

  render() {
    return (
      <Card>
        <div className="form-subscribe-wrapper" style={{ marginLeft: '42px', marginRight: '42px', paddingTop: '10px' }}>
          <h2 className="header--lg">Subscribe to our newsletter</h2>
          <p>You'll receive our latest ideas, visualizations, and studio news delivered to your inbox twice a month.</p>
          <div ref={el => (this.container = el)} />
        </div>
      </Card>
    )
  }
}

export default SubscribeForm
