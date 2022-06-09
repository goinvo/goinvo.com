import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'
import NetworkChart from '../components/chart'

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

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NetworkChart />
          </div>
          <ClientLogos openSource="true" />
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
