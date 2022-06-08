import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/layout'
import config from '../../config'
import Image from '../components/image'

const frontmatter = {
  metaTitle: 'Open Source Health Design',
  metaDescription:
    'Healthcare needs to be open. We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development.',
}

const titleStyle = {
  fontSize: 60,
  color: '#24434D',
  lineHeight: 1.2,
  fontFamily: 'Adobe Jensen Pro',
}

const subtitleStyle = {
  fontSize: 20,
  color: '#506971',
  lineHeight: 1.8,
  fontFamily: 'Open Sans',
}

class OpenSourcePage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="max-width pad-vertical">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2 ">
              <h1 style={titleStyle}> Open Source Health Design</h1>
              <p style={subtitleStyle}>
                Bringing Trust, Openness, Innovation &amp; <br></br> Design to
                Healthcare
              </p>
              <div>
                <Link
                  to=""
                  className="button button--primary button--lg"
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
            <div className="pure-u-1 pure-u-lg-1-2">
              <Image
                src="/images/open_source/open-source.jpg"
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
