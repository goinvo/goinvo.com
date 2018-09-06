import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import CategoriesList from '../components/categories-list'
import CaseStudyList from '../components/case-study-list'

const IndexPage = () => (
  <Layout>
    <Hero image="features/careplans/part3/hero_image.jpg" caption="We deliver beautiful and useful experiences for patients, clinicians, clinics, companies, & governments." isLarge withLogo>
      <h1 className="header--xl">
        Designing<br/>
        the future of<br/>
        healthcare<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding">
      <div className="pure-g margin-vertical--double">
        <div className="pure-u-1 pure-u-lg-1-3">
          <h2 className="header--xl margin--none">Our designs in healthcare are used every day<span className="text--serif text--primary">.</span></h2>
        </div>
        <div className="pure-u-1 pure-u-lg-2-3">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2">
              <p>
                <span className="text--bold">160 million US residents</span><br/>
                <span className="text--gray">are analyzed, care planned, and risk adjusted with the software we design.</span><br/>
              </p>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <p>
                <span className="text--bold">700,000 Massachusetts residents</span><br/>
                <span className="text--gray">count on our service design.</span><br/>
                <Link to="#">Read the case study</Link>
              </p>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <p>
                <span className="text--bold">Wikipedia</span><br/>
                <span className="text--gray">relies on our data visualization to explain complex health topics.</span><br/>
                <Link to="#">Social determinants of health</Link>
              </p>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <p>
                <span className="text--bold">1 billion prescriptions</span><br/>
                <span className="text--gray">will flow through the software we've designed in 2019.</span><br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pure-g margin-vertical--double">
        <div className="pure-u-1 pure-u-lg-1-3">
          <h2 className="header--xl margin--none">Our expertise in healthcare covers<span className="text--serif text--primary">...</span></h2>
        </div>
        <div className="pure-u-1 pure-u-lg-2-3 pad-top">
          <CategoriesList columns={2} asLinks />
        </div>
      </div>
      <CaseStudyList columns={2} />
    </div>
  </Layout>
)

export default IndexPage
