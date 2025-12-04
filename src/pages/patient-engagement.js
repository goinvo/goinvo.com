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
            caption="We craft impactful communication that drive adoption, trust, and outcomes."
            button="Let's discuss your project"
            buttonLink="/contact/"
            isLarge
            position="top center"
          >
            <h1 className="header--xl">
              Designing patient engagement experiences that connect, educate, and empower
              <span className="text--serif text--primary">.</span>
            </h1>
          </Hero>
          <div className="background--light-orange pad-horizontal">
            <div className="max-width content-padding pad-vertical text--teal">

              <div className="margin-bottom--double">
                <p className="p-max">At GoInvo, we focus on patient engagement through human-centered experiences that meet people where they are, whether they’re navigating a chronic condition, participating in medical research, or simply trying to better understand their health data. Our approach combines empathy and research to make complex healthcare information accessible. We create digital tools and resources that empower patients, caregivers, and healthcare providers to make informed decisions and take meaningful action.</p>
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical">
            <h2 className="header--xl center margin-bottom--half">
              Our Approach
            </h2>

            <div className="container--justify-center tileRow">

              <div className="pad-horizontal pure-u-sm-1-2">
                <div className="margin-top--none">
                  <h3 className="header--sm margin-bottom--half">Human-Centered from the Start</h3>
                  <p className="margin-top--none">
                    We embed ourselves in the patient experience, becoming participants in the programs we design. We interview patients, caregivers, clinicians, and researchers to understand not just what people need, but why they need it and what barriers stand in their way.
                  </p>
                </div>
              </div>

              <div className="pad-horizontal pure-u-sm-1-2">
                <div className="margin-top--none">
                  <h3 className="header--sm margin-bottom--half">Designing for Inclusivity</h3>
                  <p className="margin-top--none">
                    We design for the full spectrum of health literacy, cultural backgrounds, physical abilities, and life circumstances. Whether creating experiences for underrepresented populations in biomedical research or developing educational tools for the 88% of US adults who lack health literacy, we ensure our solutions work for everyone.
                  </p>
                </div>
              </div>

            </div>

            <div className="container--justify-center tileRow">

              <div className="pad-horizontal pure-u-sm-1-2">
                <div className="margin-top--none">
                  <h3 className="header--sm margin-bottom--half">Evidence-Based Design</h3>
                  <p className="margin-top--none">
                    Our work is grounded in behavioral science frameworks like the Health Belief Model, educational research, and accessibility standards. We don’t guess. We design based on what research tells us will create genuine behavior change and engagement.
                  </p>
                </div>
              </div>

              <div className="pad-horizontal pure-u-sm-1-2">
                <div className="margin-top--none">
                  <h3 className="header--sm margin-bottom--half">Collaborative Partnership</h3>
                  <p className="margin-top--none">
                    We work alongside clinical teams, program offices, research groups, and technology partners to translate complex requirements into human-friendly experiences. We advocate for the patient voice in every decision, balancing user needs with policy constraints, technical feasibility, and program goals.
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="LayoutCenter text--teal">
            <div className="max-width content-padding pad-vertical">
              <div className="pad-vertical">
                <div className="hr margin-bottom--double" />
                <h3 className="header--sm center">Trusted by ambitious startups, Fortune 500's, and government agencies</h3>
                <ClientLogos patientEngagement="true" />
              </div>
            </div>

          </div>

          <div className="background--light-orange text--teal">
            <div className="max-width content-padding pad-vertical container--justify-center center">
              <div>
                <div>
                  <h2 className="header--xl margin-bottom--double">
                    Driving results for patient engagement
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
                  <Card link="/work/fastercures-health-data-basics/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          Understanding Health Data to Drive Patient Engagement
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          We helped FasterCures define what health data is and launch a patient-engagement experience that blends behavioral science and inclusive design to educate patients about their health data. Working closely with clinical and research teams, including patient advocacy groups, we created communication experiences that meet users where they are—regardless of literacy, language, or background.
                        </p>
                        <p>
                          <Link
                            to="/work/fastercures-health-data-basics/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/patient-engagement/fastercures.jpg"
                          className="image--max-width"
                          sizes={config.sizes.full}
                        />
                      </div>

                    </div>
                  </Card>
                </div>

                <div className="pure-u-1">
                  <Card link="/work/wuxi-nextcode-familycode/">
                    <div className="flip-parent">
                      <div className="pure-u-md-1-2 text--teal flip-child textCard">
                        <h4 className="header--xl headerCard">
                          Gently Communicating Carrier Status to New Parents
                        </h4>
                        <p className="header--lg margin-bottom--none">
                          For genetic services, we've simplified highly technical content for audiences with varying levels of health literacy. Our carrier screening service for WuXi NextCODE transformed industry jargon and ambiguous clinical reports into clear, human-friendly information that both patients and clinicians could understand without requiring a genomics degree.
                        </p>
                        <p>
                          <Link
                            to="/work/wuxi-nextcode-familycode/"
                          >
                            Read Case Study
                          </Link>
                        </p>
                      </div>
                      <div className="pure-u-md-1-2 flip-child imgMaxWidth caseStudyImg">
                        <Image
                          src="/images/patient-engagement/wuxi-carrier-code.jpg"
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
