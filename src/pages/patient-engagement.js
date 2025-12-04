import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Card from '../components/card'
import ContactForm from '../components/form-contact'

const frontmatter = {
  metaTitle: 'Designing patient engagement experiences that connect, educate, and empower',
  metaDescription:
    'We craft impactful communication that drive adoption, trust, and outcomes.',
  heroImage: '/images/case-studies/mass/snap/snap-cover.jpg',
}

class PatientEngagementPage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="patient-engagement landing-page">
          <Hero
            className="hero--higher-text-contrast"
            link="/contact/"
            image="/images/case-studies/mass/snap/snap-cover.jpg"
            caption="Beautiful software design for government and state services for smoother processes and happy residents."
            button="Let's discuss your project"
            buttonLink="/contact/"
            isLarge
            position="top center"
          >
            <h1 className="header--xl">
              Software for goverment services is complicated
              <span className="text--serif text--primary">.</span><br />
              We know how to do it
              <span className="text--serif text--primary">.</span>
            </h1>
          </Hero>
          <div className="background--light-orange pad-horizontal">
            <div className="max-width content-padding pad-vertical LayoutCenter text--teal">
              <h2 className="header--xl">
                What results are you looking for?
              </h2>
              <div className="margin-bottom--double">
                <div className="resultsRow ul">
                  <li><strong>Transformed outdated systems into cutting-edge solutions.</strong></li>
                  <li><strong>Smoother processes for happier government employees and residents.</strong></li>
                </div>
                <div className="resultsRow ul">
                  <li><strong>Re-imagined software and services to meet evolving needs at scale.</strong></li>
                  <li><strong>Validated ideas before investing in a full development cycle.</strong></li>
                </div>
                <div className="resultsRow ul">
                  <li><strong>Improved accessibility for wider resident needs.</strong></li>
                  <li><strong>Strategy and vision to rally support.</strong></li>
                </div>
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical LayoutCenter">
            <h2 className="header--xl center margin-bottom--half">
              Why choose GoInvo?
            </h2>

            <div className="container--justify-center tileRow">
              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/innovation.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Long Term Mission Support</strong><br />
                  We support your long term mission and objectives with digital tools that are scalable and increase accessibility.
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/public-good.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Transformative Change for the Public Good</strong><br />
                  We design seamless, human-centered experiences that transform complex needs into seamless and equitable services, reducing burden and building trust.
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/trust.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Rapid Iteration and Testing</strong><br />
                  Validated design, research, and rapid prototyping to showcase your agency's vision, build support, and prove value before investing time and budget.
                </p>
              </div>
            </div>

            <div className="container--justify-center tileRow">
              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <p className="stat">
                  <span className="number-large">33</span>
                  <span>
                    government-sponsored design projects since 2009
                  </span>
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <p className="stat">
                  <span className="number-large">160M+</span>
                  <span>
                    people impacted by GoInvo designs
                  </span>
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <p className="stat">
                  <span className="number-large">15</span>
                  <span>
                    agencies we've worked with
                  </span>
                </p>
              </div>
            </div>

          </div>

          <div className="LayoutCenter text--teal">
            <div className="max-width content-padding pad-vertical">
              <div className="pad-vertical">
                <div className="hr margin-bottom--double"></div>
                <p className="center"><strong>Trusted by ambitious state agencies and for-public partners</strong></p>
                <ClientLogos government="true" />
                <p>Our <strong>ITS81 contract</strong> with the Commonwealth of Massachusetts prequalifies us for IT professional services—streamlining government procurement and validating our expertise as a trusted vendor.</p>
              </div>
            </div>

          </div>

          <div className="background--light-orange text--teal">
            <div className="max-width content-padding pad-vertical container--justify-center center">
              <div>
                <div>
                  <h2 className="header--xl margin-bottom--double">
                    Our work drives results for government services
                    <span className="text--serif text--primary">.</span>
                  </h2>
                  <Link
                    to="/contact"
                    className="button button--primary button--lg ctaLayout margin-bottom--double"
                  >
                    Let's discuss your project
                  </Link>
                </div>

                <div className="pure-u-1 marginTop">
                  <Card link="/work/mass-snap/">
                    <div className="flip-parent">
                      <div className="pure-u-lg-1-2 text--teal textCard flip-child">
                        <h4 className="header--xl headerCard margin-bottom--none">
                          1,107,790 Massachusetts residents were recipients of SNAP food benefits in 2024.
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          Up from 750,000 residents in 2017. The redesigned application was deployed in July 2018, and for the first time ever at the MA DTA, the volume of online applications exceeded that of applications completed in person.
                        </p>
                        <p>
                          <Link to="/work/mass-snap/">
                            Read Case Study
                          </Link>
                        </p>
                      </div>

                      <div className=" pure-u-lg-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/case-studies/public-sector/pubDesign_SNAP.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/work/all-of-us/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          NIH's All of Us Research Program
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          Through participant-focused design leadership and research, we delivered experiences and strategies that impacted an NIH research program, aiming to build the largest medical data repository for research.
                        </p>
                        <p>
                          <Link
                            to="/work/all-of-us/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/case-studies/aou/01-hero-image-2.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/work/ahrq-cds/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          National Clinical Decision Support Tool
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          GoInvo designed CDS Connect, an AHRQ-funded (Agency for Healthcare Research and Quality) national repository for providers, health IT vendors, and researchers to create and share CDS tools (clinical decision support tools) to improve clinical decision making and quality of care.
                        </p>
                        <p>
                          <Link
                            to="/work/ahrq-cds/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/case-studies/ahrq/CDS_connect_hero-2.jpg"
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

          <div className="background--blue">
            <div className="max-width content-padding pad-vertical container--justify-center center ">
              <div className="pure-u-md-1-2 margin-bottom--double">
                <p className="header--xl margin-bottom--none">
                  We ship software that works.<br />
                  Let's build together!
                </p>
                <p className="margin-top--none">
                  Reach out to learn how GoInvo can help.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </Layout >
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

export default PatientEngagementPage
