import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../header'
import Footer from '../footer'

import { mediaUrl } from '../../helpers'

class Layout extends Component {
  render() {
    const frontmatter = Object.assign(
      {
        metaTitle:
          'GoInvo is a Boston UX design agency dedicated to healthcare innovation',
        metaDescription:
          'GoInvo is a Boston user experience design firm. The software we design helps progressive healthcare companies create new markets and exploit future tech.',
        heroImage: '/images/homepage/doh-hero-fallback.jpg',
      },
      this.props.frontmatter
    )

    return (
      <div className={`app ${this.props.isHomepage ? 'homepage' : ''}`}>
        <Helmet
          title={frontmatter.metaTitle}
          meta={[
            {
              name: 'description',
              content: frontmatter.metaDescription,
            },
            {
              name: 'twitter:site',
              content: '@goinvo',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:image',
              content: mediaUrl(frontmatter.heroImage),
            },
            {
              name: 'twitter:title',
              content: frontmatter.metaTitle,
            },
            {
              name: 'twitter:description',
              content: frontmatter.metaDescription,
            },
            {
              property: 'og:image',
              content: mediaUrl(frontmatter.heroImage),
            },
            {
              property: 'og:title',
              content: frontmatter.metaTitle,
            },
            {
              property: 'og:description',
              content: frontmatter.metaDescription,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header transparent={this.props.isHomepage} />
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
