import React from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'

const AboutPage = () => (
  <Layout>
    <Hero image="products/health-axioms.png">
      <h1 className="header--xl">
        A diverse team of designers, engineers, and thinkers<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding"></div>
  </Layout>
)

export default AboutPage
