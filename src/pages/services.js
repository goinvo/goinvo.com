import React from 'react'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'

const ServicesPage = () => (
  <Layout>
    <Hero image="team/boston-user-experience-design.jpg">
      <h1 className="header--xl">
        Disrupt from within,<br/>
        Reinvent your product,<br/>
        Change the market<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding"></div>
  </Layout>
)

export default ServicesPage
