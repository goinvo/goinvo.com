import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import HubspotForm from '../components/hubspot-form'
import Columns from '../components/columns'
import ImageBlock from '../components/image-block'
import ImageBlockSmall from '../components/image-block-small'
import Card from '../components/card'
import Quote from '../components/quote'

const frontmatter = {
  metaTitle: 'Open Source Health Design',
  metaDescription:
    'Healthcare needs to be open. We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development.',
}

const numbersStyle = {
  fontSize: 32,
  color: '#C9461D',
  fontFamily: 'Adobe Jensen Pro',
  letterSpacing: 1,
  lineHeight: 1.8,
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
}

//Data
const projectSpotlight = [
  {
    link: '/vision/determinants-of-health/',
    image: '/images/services/doh-preview.jpg',
    title: 'Determinants of Health',
    caption:
      '89% of health occurs outside of the clinical space through our genetics, behavior, environment, and social circumstances. These factors are known as the social determinants of health.',
  },
  {
    link: 'https://www.goinvo.com/work/hgraph',
    image: '/images/case-studies/goinvo/hgraph/hgraph-hero2.jpg',
    title: 'hGraph',
    caption:
      'hGraph, your health in one picture, improves health and healthcare with agile design and big data analytics',
  },
  {
    link: 'https://www.goinvo.com/work/fastercures-health-data-basics',
    image:
      '/images/case-studies/fastercures/health-data-basics/health-data-basics-hero.jpg',
    title: 'Health Data Basics',
    caption:
      'Discover a project to educate and engage patients about health data through, posters, icons, and app designs in partnership with FasterCures.',
  },
]
const openSourceConversations = [
  {
    link: 'https://designmuseumfoundation.org/open-source-healthcare/',
    image: '/images/open_source/Artboard-1_4-techtalks.jpg',
    title: 'It’s Time for Open Source Healthcare',
    caption:
      'Designers can and should shape the future of healthcare, from how products and systems work to the underlying infrastructure and standards these products and services are built upon.',
  },
  {
    link: 'https://www.youtube.com/watch?v=vvnE6HyMY3E',
    image: '/images/open_source/Artboard-1_3-techtalks.jpg',
    title: 'NEHIMSS 2019 ANNUAL CONFERENCE Juhan Sonin',
    caption:
      'We demand open source healthcare.Because healthcare is too important to be closed. We, the atomic units of the health system,can bend it back to the light.',
  },
  {
    link:
      'https://opensourcehealthcare.org/static/open-source-healthcare-journal-557dd9ec213f654508564592e1ec74e8.pdf',
    image:
      '/images/features/open-source-healthcare/open-source-healthcare-featured.jpg',
    title: 'Open Source Healthcare Journal',
    caption:
      'The debut issue of our Open Source Healthcare Journal, advocating innovative open source ideas to change healthcare for the better',
  },
]

class OpenSourcePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDesktop: false,
    }

    this.updateValue = this.updateValue.bind(this)
  }

  componentDidMount() {
    this.updateValue()
    window.addEventListener('resize', this.updateValue)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateValue)
  }

  updateValue() {
    this.setState({ isDesktop: window.innerWidth > 500 })
  }

  render() {
    const isDesktop = this.state.isDesktop

    return (
      <Layout frontmatter={frontmatter}>
        <div className="max-width content-padding pad-vertical LayoutCenter">
          <div
            className="pad-horizontal"
            style={{
              display: 'flex',
              flexWrap: 'wrap-reverse',
              marginTop: '5%',
              marginBottom: '5%',
            }}
          >
            <div style={{ flex: '1 1 200px', marginTop: '5%', color: '#' }}>
              <h1 className="header--xl " style={{ color: '#24434D' }}>
                Open Source Health Design
                <span className="text--serif text--primary">.</span>
              </h1>
              <p className="text" style={{ color: '#24434D' }}>
                Bringing Trust, Openness, Innovation &amp; Design to Healthcare
              </p>
              <Link
                to="#open-work"
                className="button button--primary button--lg "
                style={{
                  width: 'auto',
                  minWidth: 0,
                  marginTop: 20,
                  marginRight: 15,
                }}
              >
                Discover our projects
              </Link>
              <Link
                to="/contact/"
                className="button button--tertiary button--lg "
                style={{
                  width: 'auto',
                  minWidth: 0,
                  marginTop: 20,
                  marginRight: 15,
                }}
              >
                Get Involved
              </Link>
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <Image
                src="/images/open_source/open-source.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#FAF6F4' }}>
          <div className="max-width content-padding pad-vertical LayoutCenter">
            <div className="pure-u-lg-1-2">
              <h2
                className="header--xl "
                style={{
                  color: '#24434D',
                  paddingRight: '2%',
                  marginBottom: 0,
                }}
              >
                We envision a world where patients can be cared for with a
                technology that can be trusted
                <span className="text--serif text--primary">.</span>
              </h2>
            </div>
            <div
              className="pure-u-lg-1-2"
              style={{
                paddingTop: '2%',
                color: '#24434D',
                paddingLeft: '2%',
                paddingBottom: '4%',
              }}
            >
              <p className="text">
                Our open source health design mission is to make our designs
                (patterns, code, scripts, graphics, ideas, documents) available
                to any designer, to any engineer, to any world citizen, to use
                and modify without restriction.
                <p style={{ marginTop: '3%' }}>
                  We demand open source health design. <br /> Because healthcare
                  is too important to be closed. <br />
                  When you use a healthcare service, <br />
                  you don't know how it works,
                  <br /> why it works,
                  <br /> who it works best for, and if the results are true.
                </p>
                It's our health. Our very lives are at stake.
              </p>
            </div>

            <div
              className="container--justify-center"
              style={{ paddingBottom: '3%' }}
            >
              <div className="pure-u-lg-1-3">
                <p>
                  <span style={numbersStyle}>$1.8M</span>
                  <span
                    style={{
                      color: '#C9461D',
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      color: '#24434D',
                    }}
                  >
                    GoInvo investment <br /> in open source projects
                  </span>
                </p>
              </div>
              <div className="pure-u-lg-1-3">
                <p>
                  <span style={numbersStyle}>$2.5M</span>
                  <span
                    style={{
                      color: '#C9461D',
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      color: '#24434D',
                    }}
                  >
                    Clients investment <br /> in open source projects
                  </span>
                </p>
              </div>
              <div className="pure-u-lg-1-3">
                <p>
                  <span style={numbersStyle}>65+</span>
                  <span
                    style={{
                      color: '#C9461D',
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      color: '#24434D',
                    }}
                  >
                    Sponsored open source
                    <br />
                    projects since 2010
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="open-work text"
          className="max-width content-padding pad-vertical LayoutCenter"
        >
          <h2
            className="header--xl"
            style={{ textAlign: 'center', color: '#24434D' }}
          >
            Open Source Health Design Projects
            <span className="text--serif text--primary">.</span>
          </h2>
          <p
            className="text--gray pad-horizontal--double"
            style={{
              paddingBottom: '2%',
              textAlign: 'center',
              color: '#24434D',
            }}
          >
            For the past 10 years, we’ve partnered with Federal and nonprofit
            organizations to design more than 65 open source projects to solve
            most pressing healthcare issues.
          </p>
          <div style={{ width: '80%', display: 'block', margin: 'auto' }}>
            <Image
              src={
                isDesktop
                  ? '/images/open_source/open-source-projects-desktop.jpg'
                  : '/images/open_source/open-source-projects-mobile.jpg'
              }
              className="image--max-width"
            />
          </div>
        </div>

        <div className="LayoutCenter">
          <div style={{ backgroundColor: '#FAF6F4', color: '#24434D' }}>
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl">What is Open Source Health Design?</h2>
              <p className="text">
                Open Source Health Design is a benevolent initiative to design
                and build products aligned with the goals set by the US
                Department of Health and Human Services. We design and build
                projects with partners who commit to better healthcare and
                invest in open source. This means making usable, useful and
                delightful designs available to benefit communities and society
                as a whole.
              </p>
              <div className="pad-vertical--double">
                <div className="max-width content-padding">
                  <h3 className="header--md" style={{ marginTop: 0 }}>
                    We've worked with...
                  </h3>
                  <ClientLogos openSource="true" />
                </div>
              </div>
              <h3 className="header--lg">
                Open Source Project Spotlight
                <span className="text--serif text--primary">.</span>
              </h3>

              <Columns columns={3}>
                {projectSpotlight.map(item => {
                  return (
                    <Card
                      key={item.link}
                      link={item.link}
                      externalLink={item.externalLink}
                      suppressNewTab={item.suppressNewTab}
                    >
                      <ImageBlock
                        title={item.title}
                        image={item.image}
                        caption={item.caption}
                        sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        hoverable
                      />
                    </Card>
                  )
                })}
              </Columns>
            </div>
          </div>
        </div>

        <div className="pad-vertical--double" style={{ color: '#24434D' }}>
          <Quote
            background=""
            quotee="Eric Topol"
            quoteeSub="MD, Director, Scripps Translational Science Institute"
          >
            The GoInvo studio is one of the most talented groups of designers I
            have ever met in the healthcare space. Not only are their ideas,
            designs, and graphics remarkable, but I haven’t yet figured out how
            they know so much about medicine and its future.
          </Quote>
        </div>

        <div style={{ backgroundColor: '#FAF6F4', color: '#24434D' }}>
          <div className="max-width content-padding pad-vertical container--justify-center">
            <div
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                paddingBottom: '4%',
              }}
            >
              <div>
                <h2 className="header--xl">We're looking for funding</h2>
                {/* <h3 className="header--lg">We’re looking for funding!</h3> */}
              </div>

              <div className="pad-horizontal pure-u-lg-1-3">
                <Image
                  src="/images/open_source/trust.png"
                  className="image--max-width-medium"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text">
                  Build trust and make healthcare truly accessible and open to a
                  large community.
                </p>
              </div>
              <div className="pad-horizontal pure-u-lg-1-3">
                <Image
                  src="/images/open_source/innovation.png"
                  className="image--max-width-medium"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text">
                  Innovate by leveraging validated, user-centric design that has
                  been improving for years.
                </p>
              </div>

              <div className="pad-horizontal pure-u-lg-1-3">
                <Image
                  src="/images/open_source/public-good.png"
                  className="image--max-width-medium"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text">
                  Invest in projects in public health and pioneer cutting-edge
                  design for the common good.
                </p>
              </div>

              <Link
                to="/contact/"
                className="button button--tertiary button--lg "
                style={{
                  width: 'auto',
                  minWidth: 0,
                  marginTop: 20,

                  marginBottom: 40,
                }}
              >
                Get in touch
              </Link>

              <div
                className="pure-u-1"
                style={{
                  textAlign: 'left',
                  backgroundColor: 'white',
                  marginBottom: 35,
                }}
              >
                <Card link="/">
                  <div
                    className="pure-u-lg-1-2"
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingTop: '2%',
                      color: '#24434D',
                    }}
                  >
                    <h4 className="header--xl" style={{ marginBottom: 20 }}>
                      Living Health Lab
                    </h4>
                    <p className="text">
                      Living Health Lab is a tool that helps people define and
                      explore their personal health questions by tracking and
                      visualizing their data with the support of a health buddy
                      so that they can live their healthiest life
                    </p>
                  </div>

                  <div
                    className="pure-u-1 pure-u-lg-1-2 "
                    style={{ maxWidth: 400 }}
                  >
                    <Image
                      src="/images/open_source/health-lab.png"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </div>
                </Card>
              </div>

              <div
                className="pure-u-1"
                style={{
                  textAlign: 'left',
                  backgroundColor: 'white',
                  marginBottom: 35,
                  color: '#24434D',
                }}
              >
                <Card link="https://open-health-manager.github.io/Design/">
                  <div className="pure-u-lg-1-2 " style={{ maxWidth: 400 }}>
                    <Image
                      src="/images/open_source/health-manager.png"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </div>

                  <div
                    className="pure-u-lg-1-2"
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingBottom: '2%',
                      paddingTop: '2%',
                      color: '#24434D',
                    }}
                  >
                    <h4 className="header--xl" style={{ marginBottom: 20 }}>
                      Health Manager
                    </h4>
                    <p className="text">
                      Rosie is an open source Health Manager to support people
                      aggregate all their health data into a single location and
                      share that data in their care team to meet their health
                      goals.
                      <br />
                    </p>
                  </div>
                </Card>
              </div>

              <div
                className="pure-u-1"
                style={{
                  textAlign: 'left',
                  backgroundColor: 'white',
                  marginBottom: 35,
                }}
              >
                <Card link="/">
                  <div
                    className="pure-u-lg-1-2"
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingTop: '2%',
                      color: '#24434D',
                    }}
                  >
                    <h4 className="header--xl" style={{ marginBottom: 20 }}>
                      Health Picture
                    </h4>
                    <p className="text">
                      Discover our open source library for visualizing health
                      data. Use hGraph for monitoring your patient population.
                      Give patients a beautiful view of their health.
                    </p>
                  </div>

                  <div className="pure-u-lg-1-2" style={{ maxWidth: 400 }}>
                    <Image
                      src="/images/open_source/health-picture.png"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </div>
                </Card>
              </div>

              <div
                className="pure-u-1"
                style={{
                  textAlign: 'left',
                  backgroundColor: 'white',
                  marginBottom: 35,
                }}
              >
                <Card link="https://goinvo.com/vision/own-your-health-data/">
                  <div className="pure-u-lg-1-2" style={{ maxWidth: 400 }}>
                    <Image
                      src="/images/open_source/health-data-ownership.png"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </div>

                  <div
                    className="pure-u-lg-1-2"
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingBottom: '5%',
                      color: '#24434D',
                    }}
                  >
                    <h4 className="header--xl" style={{ marginBottom: 20 }}>
                      Health Data Ownership
                    </h4>
                    <p className="text">
                      We need patient data ownership rights to protect patient
                      care. We've mapped out the needs for owning your health
                      data and have illustrated them to be digestible for policy
                      makers and the general public
                    </p>
                  </div>
                </Card>
              </div>

              <Link
                to="#open-work"
                className="button button--tertiary button--lg "
                style={{
                  width: 'auto',
                  minWidth: 0,
                  marginTop: 20,
                }}
              >
                See more of our open work
              </Link>
            </div>

            <div></div>
          </div>
        </div>

        <div>
          <div className=" max-width content-padding pad-vertical textAlign">
            <h2 className="header--xl" style={{ color: '#24434D' }}>
              It’s Open Source!
            </h2>
            <p className="text">
              Our design work, health research and code are open-source. They
              are freely available for anyone to see, download, change, and
              redistribute. By democratizing health technologies, we grant easy
              access to highly developed and tested tools for improving medical
              practice.
              <br />
              <p
                className="text"
                style={{ color: '#C9461D', marginTop: '1.5em' }}
              >
                We support and onboard individuals and organizations to use our
                open source work.
              </p>
            </p>

            <Link
              to="/contact/"
              className="button button--secondary button--lg "
              style={{ width: 'auto', minWidth: 0, marginTop: 20 }}
            >
              Let's chat, we're here to help!
            </Link>
          </div>
        </div>
        <div className="max-width content-padding pad-vertical">
          <div style={{ paddingBottom: '4%', color: '#24434D' }}>
            <h3 className="header--lg">Open Health Design Conversations</h3>
            <Columns columns={3}>
              {openSourceConversations.map(item => {
                return (
                  <Card
                    key={item.link}
                    link={item.link}
                    externalLink={item.externalLink}
                    suppressNewTab={item.suppressNewTab}
                  >
                    <ImageBlockSmall
                      title={item.title}
                      image={item.image}
                      caption={item.caption}
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                      hoverable
                    />
                  </Card>
                )
              })}
            </Columns>
          </div>
        </div>

        {/* CTA for the community  */}
        <div style={{ backgroundColor: '#FAF6F4', color: '#24434D' }}>
          <div className="max-width content-padding pad-vertical">
            <h2 className="header--xl">Let’s build better care together!</h2>
            <p className="text">
              We’re a growing communitiy of healthcare professionals, designers
              and engineers. Subscribe to our Open Source Health Design
              newsletter where we regularly share updates on projects and
              organize online events giving you the opportunity to connect with
              a diverse network, ask questions, show your work, and exchange
              ideas..
            </p>

            <div className="pure-u-lg-1-2" style={{ marginTop: '4%' }}>
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title=""
                submitButtonText="Subscribe"
              />
            </div>

            <div className="pure-u-lg-1-2 hidden--sm">
              <Image
                src="/images/open_source/cta-community.png"
                className="image--max-width"
                sizes={config.sizes.full}
              />
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
      edges {
        node {
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
  }
`

export default OpenSourcePage
