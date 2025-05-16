import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Card from '../components/card'
import HubspotForm from '../components/hubspot-form'
import Divider from '../components/divider'

import bracketDown from '../assets/images/bracket-down.svg'

const frontmatter = {
  metaTitle: 'Software Design for AI Services',
  metaDescription:
    'Beautiful software design for AI experiences, bridging human-centered design with AI capabilities.',
  heroImage: '/images/homepage/ai-hero-augmented-clinical-decision-support.jpg',
}

class AIPage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="ai-design landing-page">
          <Hero
            className="hero--higher-text-contrast"
            link="/contact/"
            image="/images/homepage/ai-hero-augmented-clinical-decision-support.jpg"
            caption="We design tools and experiences with AI so people and machines can skillfully work together."
            button="Let's discuss your project"
            buttonLink="/contact/"
            isLarge
            position="top center"
          >
            <h1 className="header--xl">
              Designing AI-Powered Experiences for People and Organizations
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
                  <li><strong>Efficiency & savings:</strong> Streamline workflows, reduce manual effort, and drive measurable cost reductions.</li>
                  <li><strong>Innovation:</strong> Quickly generate more out-of-the-box ideas that work and elevate product vision.</li>
                </div>
                <div className="resultsRow ul">
                  <li><strong>Rapid experimentation:</strong> Validate ideas quickly before committing major resources.</li>
                  <li><strong>Risk Reduction:</strong> Early-stage design and testing uncover challenges before they escalate.</li>
                </div>
                <div className="resultsRow ul">
                  <li><strong>Seamless integration: </strong>AI experiences for real-world use.</li>
                </div>
              </div>
            </div>
          </div>

          <div className="goinvo-ai-fit max-width content-padding">
            
            <div className="row text-row">
              <div className="col width-80">
                <p className="margin-bottom--none text--lg">In the land of AI products, designers will split time between problem solving, facilitation, and bending AI services</p>
              </div>
            </div>
            <div className="row text-row">
              <div className="col width-80">
                <p className="margin-top--none margin-bottom--none text--lg">versus</p>
              </div>
              <div className="col width-20">
                <p  className="margin-top--none text--lg">tooling the individual GenAI and agentic services.</p>
              </div>
            </div>

            <div className="desktop-stat-stack">
              <div className="row text-row stat-text">
                <div className="col width-80">
                  <p className="text--lg text--serif">
                    Most design will live here in the <span className="inline-number">80<span className="inline-percentage">%</span></span>
                    <br />using AI services to facilitate, problem solve, drive better decisions, and productionize products
                  </p>
                </div>
                <div className="col width-20">
                  <p  className=" text--lg text--serif"><span className="inline-number">20<span className="inline-percentage">%</span></span> Tooling</p>
                </div>
              </div>
            </div>

            <div className="row arrow-row">
                <div className="col width-80">
                  <div className="arrow arrow-80">
                    <div className="arrow-line"></div>
                    <div className="arrow-vtop-left"></div>
                    <div className="arrow-vtop-right"></div>
                  </div>
                </div>
                <div className="col width-20">
                  <div className="arrow arrow-20">
                    <div className="arrow-line"></div>
                    <div className="arrow-vtop-left"></div>
                    <div className="arrow-vtop-right"></div>
                  </div>
                </div>
              </div>

            <div className="mobile-stat-stack">
              <div className="row stat-text-80">
                <div className="col col-left">
                  <span className="text--serif  inline-number">80<span className="inline-percentage">%</span></span>
                </div>
                <div className="col col-right">
                  <p className="text--lg text--serif">
                    Most design will live here in the using AI services to facilitate, problem solve, drive better decisions, and productionize products
                  </p>
                </div>
              </div>

              <div className="stat-text-20">
                <div className="col col-left">
                  <span className="text--serif inline-number">20<span className="inline-percentage">%</span></span>
                </div>
                <div className="col col-right">
                  <p className="text--lg text--serif margin-top--none margin-bottom--none">Tooling</p>
                </div>
              </div>
            </div>

            <div className="goinvo-lives-container">
              <div className="goinvo-lives">
                <div className="row">
                  <div className="bracket">
                    <img
                      className="bracket-icon"
                      src={bracketDown}
                      alt="bracket pointed down"
                    />  
                  </div> 
                </div>
                
                <div className="goinvo-lives-text">
                  <div className="row">
                    <p className="text--lg text--serif">GoInvo lives here as toolmakers and service shapers.</p>
                  </div>
                  
                  <div className="row list">
                    <div className="col width-80">
                      <ul className="list--unstyled">
                        <li>Problem exploration & definition using genAI and humans in the loop.</li>
                        <li>Gather insights, analyze & synthesize. What is the right problem to solve?</li>
                      </ul>
                    </div>
                    <div className="col width-20">
                      <ul className="list--unstyled">
                        <li>Tuning/feedback loops</li>
                        <li>Contextual memory, memory UI (what the agent knows, remembers, forgets, history panels)</li>
                        <li>Visual thinking (showing the why/how of the person and machine’s thinking)</li>
                        <li>Agent behavior</li>
                        <li>Confidence loops, ethical rails, debuggability/inspections</li>
                        <li>Call chaining, routing, flow-builders and task decompositionMultimodal interfaces</li>
                        <li>Validate concepts to refine the AI interaction model</li>
                        <li>Rapid prototyping plugins and specific services for enterprise</li>
                      </ul>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>

            
          </div>
          
          

            

          <div className="max-width content-padding pad-vertical LayoutCenter">
            <Divider />
            <h2 className="header--xl center margin-bottom--half">
              Why choose GoInvo?
            </h2>

            <div className="container--justify-center tileRow">
              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/public-good.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Bridging Human Needs with Machine Capabilities</strong><br />
                  We ensure AI enhances human capabilities rather than becoming a barrier, delivering meaningful and relevant insights to users and deliver intuitive workflows that align with user goals.
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/trust.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Simplifying Complexity</strong><br />
                  We design seamless AI services that transform complex needs into intuitive human-centered experiences that are reliable, useful, and trustworthy.
                </p>
              </div>

              <div className="pad-horizontal pure-u-sm-1-3 reason-tile">
                <Image
                  src="/images/open_source/innovation.png"
                  className="image--max-width-80"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text margin-top--none">
                  <strong>Rapid Ideation and Prototyping</strong><br />
                  Using AI, we experiment to develop more workable ideas outside of the box. Rapid prototypes and proofs of concept for early validation before more investment.
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
                <HubspotForm
                  formId={config.hubspotContactFormId}
                  title=""
                />
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

export default AIPage
