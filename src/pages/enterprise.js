import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Card from '../components/card'
import HubspotForm from '../components/hubspot-form'

const frontmatter = {
  metaTitle: 'Design for Enterprise Software',
  metaDescription:
    'Beautiful software design for the Enterprise to catapult your business forward.',
  heroImage: '/images/enterprise/enterprise-hero-1.jpg',
}

class EnterprisePage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="enterprise-design">
          <Hero
            className="hero--higher-text-contrast"
            link="/contact/"
            image="/images/enterprise/enterprise-hero-1.jpg"
            caption="Beautiful software design for the Enterprise to catapult your business forward."
            button="Let's discuss your project"
            buttonLink="/contact/"
            isLarge
            position="top center"
          >
            <h1 className="header--xl">
              Enterprise software is complicated
              <span className="text--serif text--primary">.</span><br />
              We know how to do it
              <span className="text--serif text--primary">.</span>
            </h1>
          </Hero>
          <div className="bg-light pad-horizontal">
            <div className="max-width content-padding pad-vertical LayoutCenter teal">
              <h2 className="header--xl">
                What results are you looking for?
              </h2>
              <div className="resultsRow ul">
                <li><strong>Cost savings through a more productive workforce or customers.</strong></li>
                <li><strong>Transforming software acquisitions into a seamless suite-like experience.</strong></li>
              </div>
              <div className="resultsRow ul">
                <li><strong>Re-imagining the software to meet evolving customer needs.</strong></li>
                <li><strong>Validating an idea before investing in a full development cycle.</strong></li>
              </div>
              <div className="resultsRow ul">
                <li><strong>Convincing investors.</strong></li>
                <li><strong>A vision to rally the company.</strong></li>
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical LayoutCenter teal">
            <div className="max-width content-padding pad-vertical LayoutCenter">
              <h2 className="header--xl center ">
                Why choose GoInvo?
              </h2>
            </div>

            <div className="container--justify-center tileRow">
              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/innovation.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Software Design Velocity</strong><br />
                  Start fast with a team experienced working together compared to hiring.
                </p>
                <p className="stat">
                  <span className="nbrStyle">100+</span>
                  <span>
                    software design projects since 2010
                  </span>
                </p>
              </div>
              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/public-good.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Large-Scale Enterprise Design</strong><br />
                  Make design and innovation a key influence in your organization.
                </p>
                <p className="stat">
                  <span className="nbrStyle">160M+</span>
                  <span>
                    people impacted by GoInvo designs
                  </span>
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/trust.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Feature Finding for Profits</strong><br />
                  We discover opportunities that keep clients coming back for more.
                </p>
                <p className="stat">
                  <span className="nbrStyle">90%</span>
                  <span>
                    of clients repeat business with GoInvo
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="LayoutCenter teal">
            <div>
              <div className="max-width content-padding pad-vertical">
                <div className="pad-vertical">
                  <div className="max-width content-padding">
                    <p className="center"><strong>Trusted by ambitious startups and Fortune 500's</strong></p>
                    <ClientLogos enterprise="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light teal">
            <div className="max-width content-padding pad-vertical container--justify-center center ">
              <div className="paddingBottom">
                <div>
                  <h2 className="header--xl margin-bottom--half">
                    Driving results for Enterprise software
                    <span className="text--serif text--primary">.</span>
                  </h2>
                  <Link
                    to="/contact"
                    className="button button--primary button--lg ctaLayout margin-bottom"
                  >
                    Let's discuss your project
                  </Link>
                </div>

                <div className="pure-u-1 marginTop">
                  <Card link="/work/3m-coderyte/">
                    <div className="flip-parent">
                      <div className="pure-u-lg-1-2 teal textCard flip-child">
                        <h4 className="header--xl headerCard margin-bottom--none">
                          A 200% productivity gain <br />
                          = $146M exit.
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          “We needed to make sure we could do this. Invo proved we could. We needed to make sure we could sell this. Invo gave us the tools to do that, too.”
                        </p>
                        <p className="margin-top--none">
                          George Moon<br />
                          VP of Product, CodeRyte Inc.
                        </p>
                        <p>
                          <Link
                            to="/work/3m-coderyte/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>

                      <div className=" pure-u-lg-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/case-studies/coderyte/coderyte-mockup2.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/work/infobionic-heart-monitoring/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          A vision to secure $17M Series B.
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          “We absolutely love everything GoInvo has created for us, it has by far exceeded our expectations.”
                        </p>
                        <p className="margin-top--none">
                          Serban Georgescu MD<br />
                          Director of Business and Clinical Development, InfoBionic
                        </p>
                        <p>
                          <Link
                            to="/work/infobionic-heart-monitoring/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>

                      <div className="pure-u-md-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/case-studies/infobionic/infobionic-dashboard.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light teal">
            <div className="max-width content-padding pad-vertical container--justify-center center ">
              <div className="pure-u-md-1-2">
                <p className="header--xl margin-bottom--none">
                  We ship software that works.<br />
                  Let's build together!
                </p>
                <p className="margin-top--none">
                  Reach out to learn how GoInvo can help.
                </p>

                <HubspotForm
                  formId={config.hubspotContactFormId}
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const openSourcePageQuery = graphql`
  query OpenSourcePageQuery {
    allMdx(filter: { frontmatter: { hidden: { eq: false } } }) {
      nodes {
        parent {
          ... on File {
            name
          }
        }
        frontmatter {
          title
          image
          client
          categories
          caption
        }
      }
    }
  }
`

export default EnterprisePage
