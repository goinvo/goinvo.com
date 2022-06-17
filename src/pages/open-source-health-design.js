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

const shStyle = {
  fontSize: 30,
  color: '#24434D',
  fontFamily: 'Adobe Jensen Pro',
  fontWeight: 600,
  letterSpacing: 1,
  lineHeight: 1.4,
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
const bgStyle = {
  backgroundColor: '#FAF6F4',
  marginTop: '4rem',
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
  }

  render() {
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
            <div style={{ flex: '1 1 200px', marginTop: '5%' }}>
              <h1 className="header--xl">
                Open Source Health Design
                <span className="text--serif text--primary">.</span>
              </h1>
              <p className="text">
                Bringing Trust, Openness, Innovation &amp; Design to Healthcare
              </p>
              <Link
                to="#open-work"
                className="button button--primary button--lg "
                style={{
                  width: 'auto',
                  minWidth: 0,
                  marginTop: 20,
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
                  marginLeft: 15,
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

          <div className="pad-vertical">
            <h2 className="header--xl" style={{ textAlign: 'center' }}>
              We envision a world where patients can be cared for with a
              technology that can be trusted.
            </h2>
            <p id="open-work text" style={{ textAlign: 'center' }}>
              For the past 10 years, we’ve partner with Federal and Non-profit
              organizations to design more than 60 open source projects to the
              solve most pressing healthcare issues.
            </p>
          </div>

          <div className="pure-g container--justify-center ">
            <div className="pure-u-1-3">
              <p>
                <span style={numbersStyle}>$1.8M</span>
                <span
                  style={{
                    color: '#C9461D',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Studio internal investment <br /> in open source projects
                </span>
              </p>
            </div>
            <div className="pure-u-1-3">
              <p>
                <span style={numbersStyle}>$2.5M</span>
                <span
                  style={{
                    color: '#C9461D',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Clients investment <br /> in open source projects
                </span>
              </p>
            </div>
            <div className="pure-u-1-3">
              <p>
                <span style={numbersStyle}>65+</span>
                <span
                  style={{
                    color: '#C9461D',
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Open Source projects <br />
                  invested in since 2010
                </span>
              </p>
            </div>
          </div>

          <div
            style={{ overflowX: 'auto', marginTop: '5%', marginBottom: '5%' }}
          >
            <table style={{ width: '100%' }}>
              <tr>
                <th
                  style={{
                    padding: 8,
                    minWidth: 220,
                    maxWidth: 220,
                    color: '#24434D',
                    letterSpacing: 0.5,
                    fontFamily: 'Adobe Jensen Pro',
                    fontSize: '20px',
                  }}
                >
                  Patient Engagement
                </th>
                <th
                  style={{
                    padding: 8,
                    minWidth: 220,
                    maxWidth: 220,
                    color: '#24434D',
                    letterSpacing: 0.5,
                    fontFamily: 'Adobe Jensen Pro',
                    fontSize: '20px',
                  }}
                >
                  Public Health
                </th>
                <th
                  style={{
                    padding: 8,
                    minWidth: 220,
                    maxWidth: 220,
                    color: '#24434D',
                    letterSpacing: 0.5,
                    fontFamily: 'Adobe Jensen Pro',
                    fontSize: '20px',
                  }}
                >
                  Clinical Tools
                </th>
                <th
                  style={{
                    padding: 8,
                    minWidth: 220,
                    maxWidth: 220,
                    color: '#24434D',
                    letterSpacing: 0.5,
                    fontFamily: 'Adobe Jensen Pro',
                    fontSize: '20px',
                  }}
                >
                  Health IT
                </th>
              </tr>
              {/* Row 1 */}
              <tr>
                <td
                  style={{
                    padding: 8,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/care-cards">
                    <ImageBlockSmall
                      title="Care Cards"
                      image="/images/case-studies/goinvo/carecards/care-cards-hero.jpg"
                      hoverable
                    />
                  </Card>
                </td>
                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/features/us-healthcare/">
                    <ImageBlockSmall
                      title="Healing US healthcare"
                      image="/images/features/healing-us-healthcare/healing-us-healthcare-featured.jpg"
                      hoverable
                    />
                  </Card>
                </td>

                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/mitre-flux-notes">
                    <ImageBlockSmall
                      title="FluxNotes"
                      image="/images/case-studies/mitre/fluxnotes/fluxnotes-hero.jpg"
                      hoverable
                    />
                  </Card>
                </td>
                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/vision/virtual-care/">
                    <ImageBlockSmall
                      title="Virtual Care Matrix"
                      image="/images/features/virtual-primary-care/virtual-primary-care-hero-2.jpg"
                      hoverable
                    />
                  </Card>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/features/careplans/">
                    <ImageBlockSmall
                      title="Care Plans Design"
                      image="/images/features/care-plans/care-plans-featured2.jpg"
                      hoverable
                    />
                  </Card>
                </td>

                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/vision/determinants-of-health/">
                    <ImageBlockSmall
                      title="Determinants of Health"
                      image="/images/services/doh-preview.jpg"
                      hoverable
                    />
                  </Card>
                </td>

                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/vision/open-pro/">
                    <ImageBlockSmall
                      title="OpenPRO"
                      image="/images/features/open-pro/open-pro-hero-v2.jpg"
                      hoverable
                    />
                  </Card>
                </td>

                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/inspired-ehrs/">
                    <ImageBlockSmall
                      title="Inspired EHRs"
                      image="/images/case-studies/nih/inspired-ehrs/ehr-hero.jpg"
                      hoverable
                    />
                  </Card>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/fastercures-health-data-basics">
                    <ImageBlockSmall
                      title="Health Data Basics "
                      image="/images/case-studies/fastercures/health-data-basics/health-data-basics-hero.jpg"
                      hoverable
                    />
                  </Card>
                </td>
                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/paintrackr/">
                    <ImageBlockSmall
                      title="PainTrackr"
                      image="/images/case-studies/goinvo/paintrackr/paintrackr-paint.jpg"
                      hoverable
                    />
                  </Card>
                </td>

                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/hgraph/">
                    <ImageBlockSmall
                      title="hGraph"
                      image="/images/case-studies/goinvo/hgraph/hgraph-hero2.jpg"
                      hoverable
                    />
                  </Card>
                </td>
                <td
                  style={{
                    padding: 10,
                    minWidth: 220,
                    maxWidth: 220,
                    fontSize: 15,
                  }}
                >
                  <Card link="https://www.goinvo.com/work/mitre-shr">
                    <ImageBlockSmall
                      title="Standard Health Record"
                      image="/images/features/posters/shr-medical-encounter-journey-map.jpg"
                      hoverable
                    />
                  </Card>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="pad-vertical LayoutCenter">
          <div>
            <div className="max-width content-padding pad-vertical">
              <h2 className="header--xl">What is Open Source Health Design?</h2>
              <p className="text">
                Open Source Health Design is a benevolent initiative to design
                and build products aligned with the goals set by the US
                Department of Health and Human Services. We design and build
                orolects with partners who commit to better healthcare and
                invest in open source. This means making usable, useful and
                delightful designs available to benefit communities and society
                as a whole
              </p>
              <div className=" pad-vertical--double">
                <div className="max-width content-padding">
                  <h3 className="header--md" style={{ marginTop: 0 }}>
                    We've worked with...
                  </h3>
                  <ClientLogos openSource="true" />
                </div>
              </div>
              <h3 className="header--lg">Open Source Project Spotlight</h3>
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

        <Quote
          background="gray"
          quotee="Eric Topol"
          quoteeSub="MD, Director, Scripps Translational Science Institute"
        >
          The GoInvo studio is one of the most talented groups of designers I
          have ever met in the healthcare space. Not only are their ideas,
          designs, and graphics remarkable, but I haven’t yet figured out how
          they know so much about medicine and its future.
        </Quote>

        <div>
          <div className="max-width content-padding pad-vertical container--justify-center">
            <div style={{ textAlign: 'center', justifyContent: 'center' }}>
              <div>
                <h2 className="header--xl">
                  Open Source Health Design Projects
                </h2>
                <h3 className="header--lg">We’re looking for funding!</h3>
              </div>

              <div className="pad-horizontal pure-u-lg-1-3">
                <Image
                  src="/images/open_source/trust.png"
                  className="image--max-width"
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
                  className="image--max-width"
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
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text">
                  Invest in projects in public health and pioneer cutting-edge
                  design for the common good
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
                    className="pure-u-lg-1-2 "
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    <h4 className="header--xl">Living Health Lab</h4>
                    <p className="text">
                      Living Health Lab is a tool that helps people define and
                      explore their personal health questions by tracking and
                      visualizing their data with the support of a health buddy
                      so that they can live their healthiest life
                    </p>
                  </div>

                  <div className="pure-u-1 pure-u-lg-1-2 ">
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
                }}
              >
                <Card link="https://open-health-manager.github.io/Design/">
                  <div className="pure-u-lg-1-2 ">
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
                      paddingBottom: '5%',
                    }}
                  >
                    <h4 style={shStyle}>Health Manager</h4>
                    <p className="text">
                      Rosie is an open source Health Manager to support user
                      aggregate all their health data into a single location and
                      share that data in their community to meet their health
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
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    <h4 style={shStyle}>Health Picture</h4>
                    <p className="text">
                      Discover our open source library for visualizing health
                      data. Use hGraph for monitoring your patient population.
                      Give patients a beautiful view of their health.
                    </p>
                    {/* <a>Learn more about the project</a> */}
                  </div>

                  <div className="pure-u-lg-1-2">
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
                  <div className="pure-u-lg-1-2 ">
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
                    }}
                  >
                    <h4 style={shStyle}>Health Data Ownership</h4>
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

        <div className="max-width content-padding pad-vertical">
          <div
            className="content-padding pad-vertical textAlign"
            style={{
              marginBottom: '4em',
            }}
          >
            <h2 className="header--xl">It’s Open Source!</h2>
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

          <div>
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
        <div>
          <div className="max-width content-padding pad-vertical">
            <h2 className="header--xl">Let’s build better care together!</h2>
            <p className="text">
              We’re a growing communtiy of healthcare professionals, designers
              and engineers. Subscribe to our Open Source Health Design
              newsletter where we regularly share updates on projects and
              organize online event giving you the opportunity to connect with a
              diverse network, ask questions, show your work and exchange ideas.
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
