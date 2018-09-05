import React from 'react'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'

const VisionPage = () => (
  <Layout>
    <Hero image="products/hero.png">
      <h1 className="header--xl">
        Seeing the future of health<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding"></div>
  </Layout>
)

export default VisionPage
