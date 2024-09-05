import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Card from '../components/card'
import HubspotForm from '../components/hubspot-form'

const frontmatter = {
  metaTitle: 'Design for Enterprise Software',
  metaDescription:
    'Beautiful software design for the Enterprise to catapult your business forward.',
  heroImage: '/images/open_source/open-source.jpg',
}

class EnterprisePage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="open-source-health-design">
          <div className="pad-horizontal teal background-image ">
            <div className="max-width content-padding pad-vertical LayoutCenter">
              <div className="flip-parent container-spacing">
                <div className="flip-child container-spacing">
                  <h1 className="header--xl margin-bottom--none">
                    Enterprise is complicated<span className="text--serif text--primary">.</span><br />
                    We know how to do it
                    <span className="text--serif text--primary">.</span>
                  </h1>
                  <p className="margin-top--none">
                    Beautiful software design for the Enterprise to catapult your business forward.
                  </p>
                  <Link
                    to="/contact"
                    className="button button--primary button--lg ctaLayout marginTop"
                  >
                    Let's discuss your project
                  </Link>
                </div>

                <div className="flip-child mainImg">
                  <Image
                    src="/images/open_source/open-source-bgd.png"
                    className="image--max-width"
                    sizes={config.sizes.full}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light pad-horizontal">
            <div className="max-width content-padding pad-vertical LayoutCenter teal">
              <h2 className="header--xl">
                GoInvo enables high-growth companies to realize market-changing advances via envisioning, planning, and implementing best-in-class enterprise software, services, and experiences.
              </h2>
              <p className="margin-bottom--none">
                What results are you looking for?
              </p>
              <div className="pure-u-lg-1-2">
                <h4 className="margin-top--none">
                  Cost savings through a more productive workforce or customers.
                </h4>
                <h4>
                  Validating an idea before investing in a full development cycle.
                </h4>
                <h4>
                  Convincing investors.
                </h4>
              </div>
              <div className="pure-u-lg-1-2">
                <h4 className="margin-top--none">
                  A vision to rally the company.
                </h4>
                <h4>
                  Re-imagining the software to meet evolving customer needs. 
                </h4>
                <h4>
                  Transforming software acquisitions into a seamless suite-like experience.
                </h4>
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical LayoutCenter teal">
            <div className="max-width content-padding pad-vertical LayoutCenter">
              <h2 className="header--xl center ">
                Why choose GoInvo?
              </h2>
            </div>

          <div className="container--justify-center">
              <div className="pad-horizontal pure-u-sm-1-3">
                <Image
                  src="/images/open_source/innovation.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Software Design Velocity</strong><br />
                  Start fast with a team experienced working together compared to hiring.
                </p>
                <p>
                  <span className="nbrStyle">100+</span>
                  <span>
                    software design projects since 2010
                  </span>
                </p>
              </div>
              <div className="pad-horizontal pure-u-sm-1-3">
                <Image
                  src="/images/open_source/public-good.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Large-Scale Enterprise Design</strong><br />
                  Make design and innovation a key influence in your organization.
                </p>
                <p>
                  <span className="nbrStyle">160M+</span>
                  <span>
                    people impacted by GoInvo designs
                  </span>
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3">
                <Image
                  src="/images/open_source/trust.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Feature Finding for Profits</strong><br />
                  We discover opportunities that keep clients coming back for more.
                </p>
                <p>
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
                    <p className="center">Trusted by ambitious startups and Fortune 500's</p>
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
                  <h2 className="header--xl margin-bottom--none">
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

                <div className="pure-u-1 card marginTop">
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

                      <div className=" pure-u-lg-1-2 flip-child imgMaxWidth">
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

                      <div className="pure-u-md-1-2 flip-child imgMaxWidth">
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
                <p className="header--xl">
                  Enterprise software is broken.<br />
                  Nobody is efficient.<br />
                  You're leaving millions on the table.<br />
                  We ship software that works.
                </p>

              <h2 className="header--xl margin-bottom--none">
                  Let's build together!
                </h2>
                <p className="margin-top--none">
                  Interested in having GoInvo help your organization?<br />
                  Reach out to learn how we can help.
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
