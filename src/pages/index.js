import React from 'react'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <Hero image="features/careplans/part3/hero_image.jpg" caption="We deliver beautiful and useful experiences for patients, clinicians, clinics, companies, & governments." isLarge withLogo>
      <h1 className="header--xl">
        Designing<br/>
        the future of<br/>
        healthcare<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding"></div>
  </Layout>
)

export default IndexPage
