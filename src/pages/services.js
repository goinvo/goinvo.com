import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import Columns from '../components/columns'
import Image from '../components/image'
import ContactForm from '../components/form-contact'
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

const valueProps = [
  {
    title: 'Built for complexity',
    body: '20+ years designing software in regulated, high-stakes environments with many stakeholders and real constraints.',
  },
  {
    title: 'Delivery with momentum',
    body: 'We embed with your team to unblock progress fast, de-risk decisions, and move from strategy to shipped product.',
  },
  {
    title: 'Evidence over assumptions',
    body: 'Research, prototyping, and validation are baked into the process so ideas are tested before they become expensive.',
  },
]

const proofStats = [
  { value: '20+ years', label: 'Designing complex digital systems' },
  { value: '4 sectors', label: 'Healthcare, government, enterprise, and AI' },
  { value: 'End-to-end', label: 'From strategy to shipped product' },
]

const capabilities = [
  {
    title: 'Clarify product strategy and vision',
    description:
      'Align leadership and teams around clear direction, informed tradeoffs, and a practical roadmap.',
    links: [
      { to: '/work/mitre-shr', label: 'Standard health record' },
      {
        to: '/vision/national-cancer-navigation',
        label: 'National Cancer Navigation',
      },
    ],
  },
  {
    title: 'De-risk execution',
    description:
      'Navigate org shifts, tight timelines, and moving priorities without losing product quality or momentum.',
    links: [
      { to: '/work/mitre-flux-notes', label: 'MITRE Flux Notes' },
      {
        to: '/work/insidetracker-nutrition-science',
        label: 'InsideTracker',
      },
    ],
  },
  {
    title: 'Find the right problems',
    description:
      'Uncover real user needs through field research, system mapping, and synthesis to focus investment where it matters.',
    links: [
      { to: '/work/3m-coderyte', label: '3M Coderyte' },
      { to: '/work/mass-snap', label: 'Massachusetts SNAP' },
    ],
  },
  {
    title: 'Prototype, test, and iterate',
    description:
      'Rapid prototyping with users and data helps teams learn faster and make stronger product decisions.',
    links: [
      {
        to: '/work/partners-insight',
        label: 'Mass General Brigham IRB Insight',
      },
      {
        to: '/work/wuxi-nextcode-familycode',
        label: 'WuXi NextCODE FamilyCode',
      },
    ],
  },
  {
    title: 'Deliver and scale',
    description:
      'We partner through launch and beyond so the product keeps improving as needs evolve.',
    links: [
      { to: '/work/all-of-us', label: 'All of Us Research Program' },
      { to: '/work/3m-coderyte', label: '3M Coderyte' },
    ],
  },
]

const engagementModels = [
  {
    title: 'Embedded team',
    body: 'A cross-functional product design team that plugs into your roadmap and delivery cycle.',
  },
  {
    title: 'Focused sprint',
    body: 'A 2-6 week sprint for high-risk decisions, discovery, prototyping, and validation.',
  },
  {
    title: 'Advisory support',
    body: 'Senior guidance for strategy, UX direction, and critical product decisions.',
  },
]

const frontmatter = {
  metaTitle: 'UX Design Services in Boston - GoInvo',
  metaDescription:
    'Our UX design process is tailored to your project. Contact GoInvo today to get started in designing a beautiful UX for your product!',
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
        <div className="services-page">
          <Hero className="services-page__hero">
            <h1 className="header--xl">
              Better software design for
              <br />
              high-stakes systems
              <span className="text--serif text--primary">.</span>
            </h1>
            <p className="hero-subtitle text--gray">
              We help ambitious teams launch products that improve outcomes, reduce
              risk, and scale with confidence.
            </p>
          </Hero>

          <div className="max-width content-padding pad-vertical--double services-page__intro">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-2-3">
                <p className="header--lg margin-bottom--half">Why teams hire GoInvo</p>
                <p className="text--gray margin-top--none">
                  We help organizations ship better healthcare, government, enterprise,
                  and AI products faster, with less risk and stronger user outcomes.
                </p>
              </div>
            </div>

            <div className="services-page__cta-cluster">
              <a
                href="#calendly-open-office-hours"
                className="button button--primary services-page__cta"
              >
                Book a strategy call
              </a>
              <Link to="/work/" className="button button--outline-primary services-page__cta">
                See proof in our work
              </Link>
            </div>
            <p className="text--gray margin-top--half">
              Prefer email? <a href="mailto:info@goinvo.com">info@goinvo.com</a>
            </p>
          </div>

          <div className="services-page__proof-strip">
            <div className="max-width content-padding">
              <div className="pure-g">
                {proofStats.map((stat) => (
                  <div key={stat.value} className="pure-u-1 pure-u-lg-1-3">
                    <div className="services-page__proof-item">
                      <p className="services-page__proof-value">{stat.value}</p>
                      <p className="services-page__proof-label">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="background--gray-lightest services-page__value-band">
            <div className="max-width content-padding pad-vertical--double">
              <h3 className="header--lg margin-top--none">What you get</h3>
              <div className="pure-g">
                {valueProps.map((item) => (
                  <div key={item.title} className="pure-u-1 pure-u-lg-1-3">
                    <div className="services-page__value-card">
                      <h4 className="header--sm margin-top--none margin-bottom--half">
                        {item.title}
                      </h4>
                      <p className="text--gray margin-top--none margin-bottom--none">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-width content-padding pad-vertical--double">
            <h3 className="header--lg margin-top--none margin-bottom--half">How we help</h3>
            <p className="text--gray margin-top--none services-page__section-intro">
              End-to-end product design support, from strategy and research to execution
              and iteration.
            </p>
            <div className="pure-g services-page__capabilities">
              {capabilities.map((capability) => (
                <div key={capability.title} className="pure-u-1 pure-u-lg-1-2">
                  <div className="services-page__capability-card">
                    <h4 className="header--sm margin-top--none margin-bottom--half">
                      {capability.title}
                    </h4>
                    <p className="text--gray margin-top--none">{capability.description}</p>
                    <div className="services-page__links-row">
                      {capability.links.map((item) => (
                        <Link key={item.to} to={item.to}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-width content-padding pad-bottom--double services-page__engagements">
            <h3 className="header--lg margin-top--none margin-bottom--half">
              Engagement models
            </h3>
            <div className="pure-g">
              {engagementModels.map((model) => (
                <div key={model.title} className="pure-u-1 pure-u-lg-1-3">
                  <div className="services-page__engagement-card">
                    <h4 className="header--sm margin-top--none margin-bottom--half">
                      {model.title}
                    </h4>
                    <p className="text--gray margin-top--none margin-bottom--none">
                      {model.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-width content-padding services-page__service-rows">
            {services.map((service) => {
              return (
                <div key={service.title} className="services-page__service-card">
                  <div className="pure-g">
                    <div className="pure-u-1 pure-u-lg-1-2">
                      <div className="services-page__service-content">
                        <p className="services-page__service-kicker">Service area</p>
                        <h4 className="header--sm margin-top--none margin-bottom--half">
                          {service.title}
                        </h4>
                        <p className="text--gray margin-bottom--half">{service.description}</p>
                        <ul className="ul text--gray margin-top--half">
                          {service.methods.map((method) => {
                            return <li key={method}>{method}</li>
                          })}
                        </ul>
                        <p className="margin-bottom--none">
                          <Link to={service.example.link}>{service.example.title}</Link>
                        </p>
                      </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-2">
                      <div className="services-page__service-image-wrap">
                        <Image
                          src={service.image}
                          sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                          className="image--max-width services-page__service-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="max-width content-padding pad-bottom--double">
            <div className="services-page__conversion-panel">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-2-3">
                  <p className="header--lg margin-top--none margin-bottom--half">
                    Bring us your toughest product challenge.
                  </p>
                  <p className="text--gray margin-top--none margin-bottom--none">
                    We can help you unblock delivery, reduce product risk, and launch with
                    confidence.
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-3 services-page__conversion-actions">
                  <a href="#calendly-open-office-hours" className="button button--primary button--block">
                    Book a strategy call
                  </a>
                  <a href="mailto:info@goinvo.com" className="button button--secondary button--block">
                    Email our team
                  </a>
                </div>
              </div>
            </div>
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

        <div className="max-width content-padding pad-vertical--double margin-bottom--double services-page__calendly">
          <div className="max-width content-padding pad-vertical--double">
            <h2
              className="header--lg text--center services-page__calendly-title"
            >
              Talk with our team about your project.
            </h2>
            <div
              id="calendly-open-office-hours"
              className="calendly-inline-widget"
              data-url="https://calendly.com/goinvo/open-office-hours"
              style={{ minWidth: '320px', height: '950px' }}
            />
          </div>
        </div>

        <div className="services-page__contracts">
          <div className="max-width content-padding pad-vertical--double">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-2-3">
                <p className="margin-top--none margin-bottom--half services-page__contracts-title">
                  Trusted vendor credentials
                </p>
                <p className="text--gray margin-top--none">
                  Our contracts prequalify us for IT professional services with state and
                  federal agencies.
                </p>
              </div>
            </div>
            <ul className="ul text--gray margin-bottom--none">
              <li>State of MA: <strong>ITS81</strong></li>
              <li>Federal: <strong>GSA 47QTCA26D001W</strong></li>
            </ul>
          </div>
        </div>

        <div className="background--gray">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <ContactForm />
            </div>
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
                <a href="/vision/determinants-of-health/">
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
