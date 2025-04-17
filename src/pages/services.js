import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import Columns from '../components/columns'
import Image from '../components/image'
import Divider from '../components/divider'

import IconComplexity from '../assets/images/icon-complexity.inline.svg'
import IconHealthcare from '../assets/images/icon-healthcare.inline.svg'
import IconTeam from '../assets/images/icon-team.inline.svg'
import IconVision from '../assets/images/icon-vision.inline.svg'

import config from '../../config'

const services = [
  {
    title: 'Design for Healthcare',
    description:
      'We design software that improves care, reduces friction, and drives better outcomes — from clinical decision support to policy-driven health data systems. With 20+ years of experience, we navigate clinical complexity, policy constraints, and stakeholder needs to make health systems work better for everyone.',
    methods: [
      'Clinical decision support design',
      'EHR integrations & patient workflows',
      'Public health dashboards',
      'Data visualization for policy and advocacy'
    ],
    image: '/images/services/hgraph-gold.jpg',
    color: '#EEE0CA',
    example: {
      link: '/work/hgraph',
      title: 'Explore our healthcare work →',
    },
  },
  {
    title: 'Design for Government',
    description:
      'We design public services that are more modern, usable, equitable, and human. We partner with federal, state, and local agencies to transform services that matter — from applications that help residents get the benefits they need to digital tools for policy makers.',
    methods: [
      'Public benefits service design',
      'Inclusive research & accessibility audits',
      'Prototyping for civic tech and policy',
      'Legacy system UX modernization'
    ],
    image: '/images/services/gov_snap.jpg',
    color: '#CBE7F4',
    example: {
      link: 'work/mass-snap',
      title: 'Explore our government work →',
    },
  },
  {
    title: 'Design for Enterprise',
    description:
      'We streamline internal tools and systems that power big organizations for better alignment, efficiency, and insight. We work with large teams to improve internal platforms, streamline complex workflows, and align business and user goals — delivering better tools quickly and collaboratively to reduce friction and boost efficiency.',
    methods: [
      'Internal platforms & dashboards',
      'Enterprise UX audits & redesigns',
      'Workflow optimization & team alignment',
      'Strategic design for regulated environments'
    ],
    image: '/images/services/enterprise_cotiviti.jpg',
    color: '#C0EEEC',
    example: {
      link: '/work/mitre-shr',
      title: 'Explore our enterprise work →',
    },
  },
  {
    title: 'Design for AI',
    description:
      'We design AI-powered tools that connect humans and machines, ensuring they work together seamlessly. We create human-centered interactions that make intelligent tools clear, explainable, and usable, aligned with human needs from day one.',
    methods: [
      'UX for ML-powered products',
      'Human-AI interaction design',
      'Explainability & trust-building interfaces',
      'Ethical frameworks & transparency in design'
    ],
    image: '/images/services/ai_augment.jpg',
    color: '#CFD6FF',
    example: {
      link: '/vision/augmented-clinical-decision-support',
      title: 'Explore our AI work →',
    },
  }
]

const frontmatter = {
  metaTitle: 'UX Design Services in Boston - GoInvo',
  metaDescription:
    'Our UX design process is tailored to your project. Contact GoInvo today to get started in designing a beautiful UX for your product!',
  heroImage: '/images/services/hand-drawing.jpg',
}

const calendlyScriptId = 'calendly-script'

class ServicesPage extends Component {
  componentDidMount() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    )
    script.setAttribute('id', calendlyScriptId)
    head.appendChild(script)
  }

  componentWillUnmount() {
    const head = document.querySelector('head')
    const script = document.getElementById(calendlyScriptId)

    head.removeChild(script)
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="center top">
          <h1 className="header--xl">
            Disrupt from within,
            <br />
            Reinvent your product,
            <br />
            Change the market
            <span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <div className="max-width content-padding pad-vertical--double--only-lg">
          <div className="container container--column container--align-center">
            <div className="pure-u-1 pure-u-lg-1-2 text--center">
              <p className="header--lg margin-bottom--half">
                Design for complexity. Build for impact.
              </p>
              <p className="text--gray">
                We help you move fast, reduce risk, and deliver better systems — across healthcare, government, enterprise, and AI. Let's talk about your project and how GoInvo can help.
              </p>
              <Link
                to="#calendly-open-office-hours"
                className="button button--secondary button--block margin-bottom--double"
              >
                Schedule a chat
              </Link>
            </div>
          </div>
          <div className="equal-height-rows">
            {services.map((service, i) => {
              return (
                <div key={service.title} className="pure-g">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-right--only-lg margin-bottom">
                      <div className="pad-bottom--double--only-lg">
                        <h4 className="header--sm margin-bottom--none">
                          {service.title}
                        </h4>
                        <hr
                          className="hr hr--thick"
                          style={{ backgroundColor: service.color }}
                        />
                        <p className="text--gray">{service.description}</p>
                        <p className="text--gray">
                          <ul>
                            {service.methods.map((method, i) => {
                              return (
                                <li key={i} className="margin-bottom--half">
                                  {method}
                                </li>
                              )
                            })}
                          </ul>
                        </p>
                        <p className="text--gray">
                          <Link to={service.example.link}>
                            {service.example.title}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <div className="pad-left--only-lg">
                      <div className="pad-vertical--double">
                        <Image
                          src={service.image}
                          sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                          className="image--max-width"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-width content-padding pad-vertical--double margin-bottom--double">
          <Divider />
          <h3 className="header--md margin-bottom--none margin-top--double">
            Approach
          </h3>
          <div className="pure-g pad-bottom--double">
            <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double pad-vertical--double--only-lg">
              <h4 className="header--sm margin-top--none margin-bottom--half">
                Clarify Product Strategy & Vision
              </h4>
              <p className="text--gray margin-top--half">
                We align user needs, business goals, and technical realities to define what matters, what to build first, and why. We help our clients leverage emerging technologies, envision future products and services, and realize long-term goals.
              </p>
              <Link to="/work/">View all sectors</Link>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double pad-vertical--double--only-lg">
              <h4 className="header--sm margin-top--none margin-bottom--half">
                Design for Real People with Deep Research
              </h4>
              <p className="text--gray margin-top--half">
                We lead user research, system mapping, and insight synthesis to uncover pain points and deliver grounded solutions that work. We design for accessibility and inclusivity from the start — not as an afterthought.
              </p>
              <Link
                to="/work/hgraph/"
                className="display--inline-block margin-right--double"
              >
                Your health in one picture
              </Link>
              <a
                href="https://www.goinvo.com/features/careplans"
                className="display--inline-block"
              >
                Care plans
              </a>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double">
              <h4 className="header--sm margin-top--none margin-bottom--half">
                Craft Usable, Scalable Experiences
              </h4>
              <p className="text--gray margin-top--half">
                We design intuitive, accessible, and trustworthy software — especially for high-stakes systems with complex tasks and real-world users. Working side by side with our clients, we turn messy problems into structured strategies and scalable solutions.
              </p>
              <Link
                to="/work/mitre-shr"
                className="display--inline-block margin-right--double"
              >
                Standard health record
              </Link>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
              <h4 className="header--sm margin-top--none margin-bottom--half">
                Prototype and Test Quickly
              </h4>
              <p className="text--gray margin-top--half">
                We move fast, rapidly prototyping and frequently testing with real users to reduce risk and optimize for real-world use. Rapid iteration brings us closer to a solution that's both usable and impactful.
              </p>
              <Link
                to="/work/partners-insight"
                className="display--inline-block"
              >
                Partners Insight IRB
              </Link>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double">
              <h4 className="header--sm margin-top--none margin-bottom--half">
                Deliver with impact
              </h4>
              <p className="text--gray margin-top--half">
                We collaborate closely with in-house teams, adapt fast, and integrate seamlessly into product and engineering workflows. You’ll get a dedicated design team that helps you delivery and ship smarter tools and see real results.
              </p>
              <Link to="/about/">Team biographies</Link>
            </div>
          </div>

          <Quote
            background="gray"
            quotee="Serban Georgescu, MD"
            quoteeSub="InfoBionic Director of Clinical Development"
          >
            With Invo, design wasn't just design. It impacted our IP portfolio. It
            changed our business.
          </Quote>

          <div className="max-width content-padding pad-vertical--double">
            <h2
              className="header--lg text--center"
              style={{ marginBottom: '-50px' }}
            >
              Choose a time to talk about your project.
            </h2>
            <div
              id="calendly-open-office-hours"
              className="calendly-inline-widget"
              data-url="https://calendly.com/goinvo/open-office-hours"
              style={{ minWidth: '320px', height: '950px' }}
            />
          </div>

        </div>

        <div className="max-width content-padding pad-vertical--double">
          <Columns columns={3}>
            <ImageBlock
              key={'1'}
              image="/images/services/emerging-tech-shr-layers.jpg"
              title="Emerging technology"
              caption="We’ve worked on projects across the spectrum of emerging technology from artificial intelligence for medical coding to self-documenting voice encounters and wearable devices."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <a href="https://www.goinvo.com/features/from-bathroom-to-healthroom/">
                  From bathroom to healthroom
                </a>
              </div>
              <div>
                <Link to="/work/wuxi-nextcode-familycode/">WuXi NextCODE</Link>
              </div>
            </ImageBlock>
            <ImageBlock
              key={'2'}
              image="/images/services/doh-preview.jpg"
              title="Information visualizations"
              caption="We create beautiful printed and interactive health-related data visualizations that span payment dashboards to visualizing the social determinants of health to clinical practice guidelines for Zika."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <a href="https://www.goinvo.com/features/determinants-of-health/">
                  Determinants of Health
                </a>
              </div>
              <div>
                <a href="https://www.goinvo.com/features/ebola-care-guideline/">
                  Clinical Practice Guidelines for Zika
                </a>
              </div>
            </ImageBlock>
            <ImageBlock
              key={'3'}
              image="/images/services/inspired-ehrs-book.jpg"
              title="Open source healthcare products"
              caption="We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <Link to="/work/inspired-ehrs/">Inspired EHRs</Link>
              </div>
              <div>
                <Link to="/work/paintrackr/">PainTrackr</Link>
              </div>
              <div>
                <Link to="/work/?category=open-source">
                  See all open source products
                </Link>
              </div>
            </ImageBlock>
          </Columns>
        </div>
      </Layout>
    )
  }
}

export default ServicesPage
