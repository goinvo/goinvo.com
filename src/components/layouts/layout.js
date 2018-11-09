import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../header'
import Footer from '../footer'

class Layout extends Component {
  render() {
    return (
      <div className="app">
        <Helmet
          title="GoInvo is a Boston UX design studio focused in Healthcare"
          meta={[
            {
              name: 'description',
              content:
                'GoInvo is a Boston user experience design firm. The software we design helps progressive healthcare companies create new markets and exploit future tech.',
            },
            {
              name: 'keywords',
              content:
                'boston ux design, boston user experience design, boston ui design, boston user interface design, boston software design, healthcare ux, healthcare design',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="app__body">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
