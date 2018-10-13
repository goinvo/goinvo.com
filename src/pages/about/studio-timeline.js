import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'

class StudioTimelinePage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Helmet
            title="GoInvo | Studio Timeline"
            meta={[
              { name: 'description', content: 'An interactive timeline of Invo\'s history.' },
              { name: 'keywords', content: 'ui, ux, design, studio, history, timeline' },
            ]}
          />
          <Hero image="/images/about/studio-timeline/bookshelf.jpg">
            <h1 className="header--xl">
              Our studio timeline<span className="text--serif text--primary">.</span>
            </h1>
          </Hero>
          <div className="max-width content-padding pad-vertical--double">
            <iframe
              title="Invo Studio Timeline"
              src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1em1JKKCs47bf4bS54Arq2BYA-q8CbLEwW4K0-JZDQA8&font=Default&lang=en&initial_zoom=2&height=650'
              width='100%'
              height='650'
              webkitAllowFullscreen
              mozAllowFullscreen
              allowFullscreen
              frameBorder='0'>
            </iframe>
          </div>
        </Layout>
      </div>
    )
  }
}

export default StudioTimelinePage
