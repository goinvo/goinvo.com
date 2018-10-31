import React, { Component } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from "@mdx-js/tag"
import Helmet from 'react-helmet'

import Layout from './layout'
import Image from '../image'
import Hero from '../hero'
import Results from '../results'
import Columns from '../columns'
import Card from '../card'
import ImageBlock from '../image-block'
import References from '../references'

import Divider from '../divider'
import Quote from '../quote'
import Video from '../video'

import { extractWorkItemLinkDetails, concatCaseStudiesAndFeatures } from '../../helpers'

import config from '../../../config'

class CaseStudyLayout extends Component {
  render() {
    // const frontmatter = this.props.pageContext.frontmatter;
    // const caseStudiesWithFeatures = concatCaseStudiesAndFeatures(data, false);

    // const meta = [];
    // if (frontmatter.description) {
    //   meta.push({ name: 'description', content: frontmatter.description })
    // }
    // if (frontmatter.keywords) {
    //   meta.push({ name: 'keywords', content: frontmatter.keywords })
    // }

    const frontmatter = {};
    const meta = [];

    return (
      <Layout>
        <Helmet
          title={`GoInvo | ${frontmatter.title}`}
          meta={meta}
        />
        <MDXProvider
          components={{
            h1: ({children, ...props}) => (
              <h1 className="header--xl margin-top--double margin-bottom--half" {...props}>{children}</h1>
            ),
            h2: ({children, ...props}) => (
              <h2 className="header--lg margin-top--double text--center" {...props}>{children}</h2>
            ),
            h3: ({children, ...props}) => (
              <h3 className="header--md margin-bottom--half" {...props}>{children}</h3>
            ),
            h4: ({children, ...props}) => (
              <h4 className="header--sm margin-bottom--half" {...props}>{children}</h4>
            ),
            p: ({children, ...props}) => (
              <p className="text--gray margin-top--none margin-bottom--double">{children}</p>
            ),
            ul:({children, ...props}) => (
              <ul className="ul margin-top--none margin-bottom--double">{children}</ul>
            ),
            img: props => <Image className="image--max-width" sizes={config.sizes.caseStudy} {...props} />,
            Divider: Divider,
            quote: Quote,
            video: Video
          }}
        >
          <div className="case-study">
            {/* <Hero image={frontmatter.image} /> */}
            <div className="max-width max-width--md content-padding">
              <MDXRenderer>{this.props.data.mdx.code.body}</MDXRenderer>
            </div>
            {
              frontmatter.results ?
                <Results stats={frontmatter.results} />
              : null
            }
            <div className="background--blue pad-vertical--double pad-bottom--quad">
              <div className="max-width content-padding">
                <h3 className="header--md">Up next</h3>
                {/* <Columns columns={3}>
                  { frontmatter.upNext.map(id => {
                    const nextItem = caseStudiesWithFeatures.find(item => item.slug === id || item.id === id);
                    const { link, externalLink, suppressNewTab } = extractWorkItemLinkDetails(nextItem)

                    return (
                      <Card key={link} link={link} externalLink={externalLink} suppressNewTab={suppressNewTab}>
                        <ImageBlock
                          title={nextItem.title}
                          image={nextItem.image}
                          caption={nextItem.caption}
                          hoverable />
                      </Card>
                    )
                  })}
                </Columns> */}
              </div>
            </div>
            {
              frontmatter.references ?
                <div className="background--gray pad-vertical">
                  <div className="max-width content-padding">
                    <References references={frontmatter.references} />
                  </div>
                </div>
              : null
            }
          </div>
        </MDXProvider>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`


// {graphql`
//   query CaseStudyQuery {
//     allMdx(
//       filter: { frontmatter: { hidden: { eq: false } } }
//     ) {
//       edges {
//         node {
//           parent {
//             ... on File {
//               name
//             }
//           }
//           frontmatter {
//             title
//             image
//             client
//             categories
//             caption
//           }
//         }
//       }
//     }
//   }
// `}

export default CaseStudyLayout
