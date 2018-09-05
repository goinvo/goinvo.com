import React from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'

const CareersPage = () => (
  <Layout>
    <Hero image="features/careplans/part3/hero_image.jpg">
      <h1 className="header--xl">
        This is our job<span className="text--serif text--primary">!</span>
      </h1>
    </Hero>
    <div className="max-width content-padding"></div>
  </Layout>
)

export default CareersPage
