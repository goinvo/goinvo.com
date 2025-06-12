import React, { Component } from 'react'
import Card from './card'
import Helmet from 'react-helmet'

class HiringForm extends Component {

  render() {
    return (
      <div className="form-wrapper">
        <Card className="form-card">
          <div className="form-header hiring-form-header">
            <h2 className="header--xl">Apply</h2>
          </div>
          <iframe
            id="JotFormIFrame-251193306087052"
            className="jotform-form hiring-form"
            title="Application"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            src="https://form.jotform.com/251193306087052"
            frameborder="0"
            scrolling="no"
          >
          </iframe>
        </Card>
      </div>
    )
  }
}

export default HiringForm
