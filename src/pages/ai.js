import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import Card from '../components/card'
import ContactForm from '../components/form-contact'
import Divider from '../components/divider'

import bracketDown from '../assets/images/bracket-down.svg'

const frontmatter = {
  metaTitle: 'Software Design for AI Services',
  metaDescription:
    'Beautiful software design for AI experiences, bridging human-centered design with AI capabilities.',
  heroImage: '/images/ai/ai_hero_2.jpg',
}

class AIPage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="ai-design landing-page">
          <Hero
            className="hero--higher-text-contrast"
            link="/contact/"
            image="/images/ai/ai_hero_2_sm.jpg"
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

          <div className="background--light-orange text--teal">
            <div className="max-width content-padding pad-vertical container--justify-center center">
              <div>
                <div>
                  <h2 className="header--xl margin-bottom--double">
                    Driving results services with AI
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
                  <Card link="/work/ipsos-facto/">
                    <div className="flip-parent">
                      <div className="pure-u-lg-1-2 text--teal textCard flip-child">
                        <h4 className="header--xl headerCard margin-bottom--none">
                          The Future of Research Intelligence
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          Designing AI-powered platform that transforms siloed data into actionable insights using deep research and advanced models.
                        </p>
                        <p>
                          <Link to="/work/ipsos-facto/">
                            Read Case Study
                          </Link>
                        </p>
                      </div>

                      <div className=" pure-u-lg-1-2 flip-child caseStudyImg fill-image-container">
                        <Image
                          src="/images/ai/ai_hero.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1 marginTop">
                  <Card link="/vision/national-cancer-navigation/">
                    <div className="flip-parent">
                      <div className="pure-u-lg-1-2 text--teal textCard flip-child">
                        <h4 className="header--xl headerCard margin-bottom--none">
                          Rewriting the Cancer Journey
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          How AI and human navigators are reshaping patient and family support for the nation
                        </p>
                        <p>
                          <Link to="/vision/national-cancer-navigation/">
                            Read Case Study
                          </Link>
                        </p>
                      </div>

                      <div className=" pure-u-lg-1-2 flip-child fill-image-container caseStudyImg">
                        <Image
                          src="/images/features/national-cancer-navigation/hero.png"
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
                          Real-time Clinical Guidance for Mobile Health Workers
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          Augmented decision support and guidance for mobile health workers, to better training and repeatable health outcomes.
                        </p>
                        <p>
                          <Link
                            to="/vision/augmented-clinical-decision-support/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child fill-image-container caseStudyImg">
                        <Image
                          src="/images/features/augmented-clinical-decision-support/augmented-clinical-decision-support-hero-1.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/vision/healthcare-ai/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          The AI Healthcare Future We Need
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          Exploring the AI healthcare opportunities and unexpected outcomes.
                        </p>
                        <p>
                          <Link
                            to="/vision/healthcare-ai/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child fill-image-container caseStudyImg">
                        <Image
                          src="/images/features/healthcare-ai/healthcare-ai-hero-5.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/vision/eligibility-engine/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          Transforming Service Access in Massachusetts
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          A centralized MA resident database for better service accessibility.
                        </p>
                        <p>
                          <Link
                            to="/vision/eligibility-engine/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child fill-image-container caseStudyImg">
                        <Image
                          src="/images/features/eligibility/hero-image.jpg"
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

          <div className="goinvo-ai-fit max-width content-padding">

            <div className="fit-text-top text--serif">
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
                  <p className="margin-top--none text--lg">tooling the individual GenAI and agentic services.</p>
                </div>
              </div>
            </div>

            <div className="diagram-desktop">
              <div className="stat-stack">
                <div className="row text-row stat-text">
                  <div className="col width-80">
                    <p className="text--lg text--serif">
                      Most design will live here in the <span className="inline-number">80<span className="inline-percentage">%</span></span>
                      <br />using AI services to facilitate, problem solve, drive better decisions, and productionize products
                    </p>
                  </div>
                  <div className="col width-20">
                    <p className=" text--lg text--serif"><span className="inline-number">20<span className="inline-percentage">%</span></span> Tooling</p>
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

              <div className="goinvo-lives-container">
                <div className="goinvo-lives">
                  <div className="row bracket-row">
                    <div className="bracket">
                      <img
                        className="bracket-icon"
                        src={bracketDown}
                        alt="bracket pointed down"
                      />
                    </div>
                  </div>

                  <div className="goinvo-lives-text">
                    <div className="row lg-only">
                      <p className="text--lg text--serif">GoInvo lives here as toolmakers and service shapers.</p>
                    </div>

                    {/* <div className="row list">
                      <div className="col width-80">
                        <ul className="list--unstyled">
                          <li>Problem exploration & definition using genAI and humans in the loop.</li>
                          <li>Interview and identify pain points. How do people interact with AI?</li>
                          <li>Gather insights, analyze & synthesize. What is the right problem to solve?</li>
                          <li>Problem definition</li>
                          <li>User testing and gathering feedback</li>
                          <li>Design and concept development</li>
                        </ul>
                      </div>
                      <div className="col sm-only">
                        <p className="text--lg text--serif">GoInvo lives here as toolmakers and service shapers.</p>
                      </div>
                      <div className="col width-20">
                        <ul className="list--unstyled">
                          <li>Tuning/feedback loops</li>
                          <li>Contextual memory, memory UI (what the agent knows, remembers, forgets, history panels)</li>
                          <li>Visual thinking (showing the why/how of the person and machine's thinking)</li>
                          <li>Agent behavior</li>
                          <li>Confidence loops, ethical rails, debuggability/inspections</li>
                          <li>Call chaining, routing, flow-builders and task decomposition</li>
                          <li>Multimodal interfaces</li>
                          <li>Validate concepts to refine the AI interaction model</li>
                          <li>Rapid prototyping plugins and specific services for enterprise</li>
                        </ul>
                      </div>
                    </div> */}

                  </div>

                </div>

              </div>

            </div>

            <div className="diagram-mobile">

              <div className="arrow-stack">
                <div className="arrow-column-80">
                  <div className="arrow-vert arrow-80">
                    <div className="arrow-line"></div>
                    <div className="arrow-vtop-left"></div>
                    <div className="arrow-vtop-right"></div>
                  </div>
                </div>
                <div className="arrow-column-20">
                  <div className="arrow-vert arrow-20">
                    <div className="arrow-line"></div>
                    <div className="arrow-vtop-left"></div>
                    <div className="arrow-vtop-right"></div>
                  </div>
                </div>
              </div>



              <div className="goinvo-lives-container">
                <div className="goinvo-lives">
                  <div className="row bracket-row">
                    <div className="bracket">
                      <img
                        className="bracket-icon"
                        src={bracketDown}
                        alt="bracket pointed down"
                      />
                    </div>
                  </div>

                  <div className="stat-stack">
                    <div className="row text-row stat-text">
                      <div className="col width-80">
                        <p className="text--lg text--serif">
                          Most design will live here in the <span className="inline-number">80<span className="inline-percentage">%</span></span>
                          <br />using AI services to facilitate, problem solve, drive better decisions, and productionize products
                        </p>
                      </div>
                      <div className="goinvo-lives-text">
                        <div className="row">
                          <p className="text--lg text--serif">GoInvo lives here as toolmakers and service shapers.</p>
                        </div>
                      </div>
                      <div className="col width-20">
                        <p className="text--lg text--serif"><span className="inline-number">20<span className="inline-percentage">%</span></span> Tooling</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="goinvo-lives-text">
                    <div className="row">
                      <p className="text--lg text--serif">GoInvo lives here as toolmakers and service shapers.</p>
                    </div> 
                    <div className="row list">
                      <div className="col width-80">
                        <ul className="list--unstyled">
                          <li>Problem exploration & definition using genAI and humans in the loop.</li>
                          <li>Interview and identify pain points. How do people interact with AI?</li>
                          <li>Gather insights, analyze & synthesize. What is the right problem to solve?</li>
                          <li>Problem definition</li>
                          <li>User testing and gathering feedback</li>
                          <li>Design and concept development</li>
                        </ul>
                      </div>
                      <div className="col sm-only">
                        <p className="text--lg text--serif">GoInvo lives here as toolmakers and service shapers.</p>
                      </div>
                      <div className="col width-20">
                        <ul className="list--unstyled">
                          <li>Tuning/feedback loops</li>
                          <li>Contextual memory, memory UI (what the agent knows, remembers, forgets, history panels)</li>
                          <li>Visual thinking (showing the why/how of the person and machine's thinking)</li>
                          <li>Agent behavior</li>
                          <li>Confidence loops, ethical rails, debuggability/inspections</li>
                          <li>Call chaining, routing, flow-builders and task decompositionMultimodal interfaces</li>
                          <li>Validate concepts to refine the AI interaction model</li>
                          <li>Rapid prototyping plugins and specific services for enterprise</li>
                        </ul>
                      </div>
                    </div> 
                  </div>*/}
                </div>
              </div>
            </div>

          </div>
          <div className="background--light-orange text--teal">
            <div className="max-width content-padding pad-vertical container--justify-center center">

              <div className="pure-u-1">
                <Card link="/vision/eligibility-engine/">
                  <div className="flip-parent">
                    <div className="pure-u-md-1-2 text--teal flip-child textCard">
                      <h4 className="header--xl headerCard">
                        Reimagining Visual Storytelling with GenAI
                      </h4>
                      <p className="header--lg margin-bottom--none">
                        GenAI accelerates our design process and enhances our ability to tell compelling stories through visuals.
                      </p>
                      <p>
                        <Link
                          to="/vision/visual-storytelling-with-genai/"
                        >
                          Read Case Study
                        </Link>
                      </p>
                    </div>
                    <div className="pure-u-md-1-2 flip-child fill-image-container caseStudyImg">
                      <Image
                        src="/images/features/visual-storytelling-with-genai/genai-hero-3.jpg"
                        className="image--max-width"
                        sizes={config.sizes.full}
                      />
                    </div>
                  </div>
                </Card>
              </div>

            </div>
          </div>

          <div className="LayoutCenter text--teal">
            <div className="max-width content-padding pad-vertical">
              <div className="pad-vertical">
                <div className="hr margin-bottom--double"></div>
                <p className="text--center"><strong>Trusted by ambitious startups, Fortune 500's, and government agencies</strong></p>
                <ClientLogos ai="true" />
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

export default AIPage
