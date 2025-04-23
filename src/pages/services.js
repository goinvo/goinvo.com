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
      link: '/work/?category=healthcare',
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
      link: '/work/?category=government',
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
      link: '/work/?category=enterprise',
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
      link: '/work/?category=AI',
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
            <div className="pure-u-1 pure-u-lg-1-2">
              <p className="header--lg margin-bottom--half text--center">
                Why hire GoInvo
              </p>
              <p className="text--gray margin-bottom--half">
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

          <div>
            <h3 className="header--lg margin-bottom--none margin-top--double">
              What We Do
            </h3>
            <p className="text--gray">We design and deliver digital systems — from idea to execution. Our team joins where we're needed most, offering end-to-end product design or focused support to move things forward.</p>
            <div className="pure-g pad-bottom--double">
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double pad-vertical--double--only-lg">
                <h4 className="header--sm margin-top--none margin-bottom--half">
                  Clarify Product Strategy & Vision
                </h4>
                <p className="text--gray margin-top--half">
                  We help teams <strong>align around a clear product direction, providing experienced, unbiased input</strong> — whether you're evolving what exists, envisioning a new concept, or clarifying long-term goals.
                </p>
                <Link
                  to="/work/mitre-shr"
                  className="display--inline-block margin-right--double"
                >
                  Standard health record
                </Link>
                <Link
                  to="/vision/national-cancer-navigation"
                  className="display--inline-block margin-right--double"
                >
                  National Cancer Navigation
                </Link>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double pad-vertical--double--only-lg">
                <h4 className="header--sm margin-top--none margin-bottom--half">
                  De-risking projects
                </h4>
                <p className="text--gray margin-top--half">
                  We keep projects moving through the mess — <strong>navigating org changes, tight timelines, and shifting priorities</strong> so good ideas don't die on the whiteboard.
                </p>
                <Link
                  to="/work/mitre-flux-notes"
                  className="display--inline-block margin-right--double"
                >
                  MITRE Flux Notes
                </Link>
                <Link
                  to="/work/insidetracker-nutrition-science"
                  className="display--inline-block margin-right--double"
                >
                  InsideTracker
                </Link>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double">
                <h4 className="header--sm margin-top--none margin-bottom--half">
                  Find the right problems to solve
                </h4>
                <p className="text--gray margin-top--half">
                  Through <strong>user research, system mapping, and insight synthesis,</strong> we uncover real-world needs — guiding smarter investment and more focused solutions.
                </p>
                <Link
                  to="/work/3m-coderyte"
                  className="display--inline-block margin-right--double"
                >
                  3M Coderyte
                </Link>
                <Link
                  to="/work/mass-snap"
                  className="display--inline-block margin-right--double"
                >
                  Massachusetts SNAP
                </Link>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
                <h4 className="header--sm margin-top--none margin-bottom--half">
                  Move fast and test often
                </h4>
                <p className="text--gray margin-top--half">
                  We <strong>rapidly prototype and frequently test with real users and data</strong> — reducing risk, and informing decision-making for real-world use.
                </p>
                <Link
                  to="/work/partners-insight"
                  className="display--inline-block margin-right--double"
                >
                  Mass General Brigham IRB Insight
                </Link>
                <Link
                  to="/work/wuxi-nextcode-familycode"
                  className="display--inline-block margin-right--double"
                >
                  WuXi NextCODE FamilyCode
                </Link>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double">
                <h4 className="header--sm margin-top--none margin-bottom--half">
                  Deliver & ship
                </h4>
                <p className="text--gray margin-top--half">
                  Our dedicated team will <strong>integrate seamlessly with yours to ship better tools, improve performance, and keep strategy evolving</strong> — from concept to launch to impact.
                </p>
                <Link
                  to="/work/all-of-us"
                  className="display--inline-block margin-right--double"
                >
                  All of Us Research Program
                </Link>
                <Link
                  to="/work/3m-coderyte"
                  className="display--inline-block margin-right--double"
                >
                  3M Coderyte
                </Link>
              </div>
            </div>
            <Divider />
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
                        <p className="text--gray margin-bottom--half">{service.description}</p>
                        <ul className="ul text--gray margin-top--half">
                          {service.methods.map((method, i) => {
                            return (
                              <li key={i}>
                                {method}
                              </li>
                            )
                          })}
                        </ul>
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

        <Quote
          background="gray"
          quotee="Serban Georgescu, MD"
          quoteeSub="InfoBionic Director of Clinical Development"
        >
          With Invo, design wasn't just design. It impacted our IP portfolio. It
          changed our business.
        </Quote>

        <div className="max-width content-padding pad-vertical--double margin-bottom--double">
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
              caption="We've worked on projects across the spectrum of emerging technology from artificial intelligence for medical coding to self-documenting voice encounters and wearable devices."
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
              caption="We've built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development."
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
            >
              <div>
                <Link to="/work/inspired-ehrs/">Inspired EHRs</Link>
              </div>
              <div>
                <Link to="/work/paintrackr/">PainTrackr</Link>
              </div>
              <div>
                <Link to="/open-source-health-design/">
                  See our open source design
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
