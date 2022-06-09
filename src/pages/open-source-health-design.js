import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import NetworkChart from '../components/chart'
import Columns from '../components/columns'
import ImageBlock from '../components/image-block'
import Card from '../components/card'
import Form from '../components/simple-form'

const frontmatter = {
  metaTitle: 'Open Source Health Design',
  metaDescription:
    'Healthcare needs to be open. We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development.',
}

const titleStyle = {
  fontSize: 58,
  color: '#24434D',
  lineHeight: 1.2,
  fontFamily: 'Adobe Jensen Pro',
  marginTop: '0.3em',
  marginBottom: '0.3em',
}

const chartStyle = {}

const subtitleStyle = {
  fontSize: 20,
  color: '#506971',
  lineHeight: 1.8,
  fontFamily: 'Open Sans',
  letterSpacing: 1,
}

const headerStyleCentered = {
  fontSize: 40,
  color: '#24434D',
  lineHeight: 1.4,
  fontFamily: 'Adobe Jensen Pro',
  textAlign: 'center',
}

const headerStyle = {
  fontSize: 40,
  color: '#24434D',
  lineHeight: 1.4,
  fontFamily: 'Adobe Jensen Pro',
}

const subheaderStyle = {
  fontSize: 30,
  color: '#24434D',
  lineHeight: 1.4,
  fontFamily: 'Adobe Jensen Pro',
  fontWeight: 200,
}
const subheaderStyleCentered = {
  fontSize: 30,
  color: '#24434D',
  lineHeight: 1.4,
  fontFamily: 'Adobe Jensen Pro',
  fontWeight: 200,
  textAlign: 'center',
}

const npStyleCentered = {
  fontSize: 16,
  color: '#506971',
  lineHeight: 1.8,
  fontFamily: 'Open Sans',
  textAlign: 'center',
  letterSpacing: 1,
}

const npStyle = {
  fontSize: 16,
  color: '#C9461D',
  lineHeight: 1.8,
  fontFamily: 'Open Sans',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  letterSpacing: 1,
}

const pStyle = {
  fontSize: 16,
  color: '#506971',
  lineHeight: 1.8,
  fontFamily: 'Open Sans',
  letterSpacing: 1,
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
  marginTop: '4em',
  marginBottom: '4em',
  paddingTop: '0.01em',
  paddingBottom: '1em',
  paddingLeft: '3em',
  paddingRight: '3em',
}

const projectSpotlight = [
  {
    link: '/vision/determinants-of-health/',
    image: '/images/services/doh-preview.jpg',
    title: 'Determinants of Health',
    caption:
      '89% of health occurs outside of the clinical space through our genetics, behavior, environment, and social circumstances. These factors are known as the social determinants of health.',
  },
  {
    link: '/vision/determinants-of-health/',
    image: '/images/services/doh-preview.jpg',
    title: 'Determinants of Health',
    caption:
      '89% of health occurs outside of the clinical space through our genetics, behavior, environment, and social circumstances. These factors are known as the social determinants of health.',
  },
  {
    link: '/vision/determinants-of-health/',
    image: '/images/services/doh-preview.jpg',
    title: 'Determinants of Health',
    caption:
      '89% of health occurs outside of the clinical space through our genetics, behavior, environment, and social circumstances. These factors are known as the social determinants of health.',
  },
]

class OpenSourcePage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="max-width content-padding pad-vertical ">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2 ">
              <h1 style={titleStyle}> Open Source Health Design</h1>
              <p style={subtitleStyle}>
                Bringing Trust, Openness, Innovation &amp; Design to Healthcare
              </p>
              <div>
                <Link
                  to=""
                  className="button button--primary button--lg "
                  style={{
                    width: 'auto',
                    minWidth: 0,
                    marginRight: 15,
                    marginTop: 20,
                  }}
                >
                  Discover our projects
                </Link>
                <Link
                  to=""
                  className="button button--tertiary button--lg "
                  style={{ width: 'auto', minWidth: 0, marginTop: 20 }}
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 ">
              <Image
                src="/images/open_source/open-source.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
          </div>

          <div className="pad-vertical pad-horizontal--double">
            <h2 style={headerStyleCentered}>
              We envision a world where patients can be cared for with a
              technology that can be trusted.
            </h2>
            <p style={npStyleCentered}>
              For the past 10 years, we’ve partner with Federal and Non-profit
              organizations to design more than 60 open source projects to the
              solve most pressing healthcare issues.
            </p>
          </div>

          <div className="pure-g">
            <div className="pure-u-1-3 ">
              <p>
                <span className="" style={numbersStyle}>
                  $1.8M
                </span>
                <span className="" style={npStyle}>
                  Studio internal investment <br /> in open source projects
                </span>
              </p>
            </div>
            <div className=" pure-u-1-3">
              <p>
                <span className="" style={numbersStyle}>
                  $2.5M
                </span>
                <span className="" style={npStyle}>
                  Clients investment <br /> in open source projects
                </span>
              </p>
            </div>
            <div className="pure-u-1-3">
              <p>
                <span className="" style={numbersStyle}>
                  65+
                </span>
                <span className="" style={npStyle}>
                  Open Source projects <br />
                  invested in since 2010
                </span>
              </p>
            </div>
          </div>

          <div className="pad-vertical--double" style={chartStyle}>
            <NetworkChart />
          </div>
          <ClientLogos openSource="true" />

          <div style={bgStyle}>
            <h2 style={headerStyle}>What is Open Source Health Design?</h2>
            <p style={pStyle}>
              Open Source Health Design is a benevolent initiative to design and
              build products aligned with the goals set by the US Department of
              Health and Human Services. We design and build orolects with
              partners who commit to better healthcare and invest in open
              source. This means making usable, useful and delightful designs
              available to benefit communities and society as a whole
            </p>
            <h3 style={subheaderStyle}>Open Source Project Spotlight</h3>

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

          <div>
            <h2 style={headerStyleCentered}>A Word From Our Partners</h2>
            <p style={npStyleCentered}>
              The GoInvo studio is one of the most talented groups of designers
              I have ever met in the healthcare space. Not only are their ideas,
              designs, and graphics remarkable, but I haven’t yet figured out
              how they know so much about medicine and its future.
              <br /> - Eric Topol
              <br /> MD, Director, Scripps Translational Science Institute
            </p>
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '4em',
              marginBottom: '4em',
              paddingTop: '0.01em',
              paddingBottom: '1em',
              paddingLeft: '3em',
              paddingRight: '3em',
              backgroundColor: '#FAF6F4',
            }}
          >
            <div>
              <h2 style={headerStyleCentered}>Open Health Projects</h2>
              <h3 style={subheaderStyleCentered}>We’re looking for funding!</h3>

              <p style={npStyleCentered}>
                Build trust and make healthcare truly accessible and open to a
                large community.
              </p>

              <p style={npStyleCentered}>
                Innovate by leveraging validated, user-centric design that has
                been improving for years.
              </p>

              <p style={npStyleCentered}>
                Invest in projects in public health and pioneer cutting-edge
                design for the common good
              </p>

              <Link
                to=""
                className="button button--tertiary button--lg "
                style={{ width: 'auto', minWidth: 0, marginTop: 20 }}
              >
                Get in touch
              </Link>

              <Link
                to=""
                className="button button--tertiary button--lg "
                style={{ width: 'auto', minWidth: 0, marginTop: 20 }}
              >
                See more of our open work
              </Link>
            </div>

            <div></div>
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '4em',
              marginBottom: '4em',
              paddingTop: '0.01em',
              paddingBottom: '1em',
              paddingLeft: '3em',
              paddingRight: '3em',
            }}
          >
            <h2 style={headerStyle}>It’s Open Source!</h2>
            <p style={pStyle}>
              Our design work, health research and code are open-source. They
              are freely available for anyone to see, download, change, and
              redistribute. By democratizing health technologies, we grant easy
              access to highly developed and tested tools for improving medical
              practice.
              <br />
              <p style={{ color: '#C9461D', marginTop: '1.5em' }}>
                We support and onboard individuals and organizations to use our
                open source work.
              </p>
            </p>

            <Link
              to=""
              className="button button--secondary button--lg "
              style={{ width: 'auto', minWidth: 0, marginTop: 20 }}
            >
              Let's chat, we're here to help!
            </Link>
          </div>

          <div>
            <h3 style={subheaderStyle}>Open Health Design Conversations</h3>

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

          <div style={bgStyle}>
            <h2 style={headerStyle}>Let’s build better care together!</h2>
            <p style={pStyle}>
              We’re a growing communtiy of healthcare professionals, designers
              and engineers bringing our collective mind power together to
              design products and policies to make our healthcare system better.
              We regularly share updates on projects and organize online event
              where you can connect with a diverse network, ask questions, share
              designs, show your work and exchange ideas. Subscribe to our Open
              Source Health Design newsletter!
            </p>
            <div className="pad-vertical">
              <Form />
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
