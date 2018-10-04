import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/tag"

import Layout from './layout'
import Image from '../image'
import Hero from '../hero'
import Divider from '../divider'
import Results from '../results'
import Columns from '../columns'
import Card from '../card'
import ImageBlock from '../image-block'
import References from '../references'

import { extractCaseStudyDataFromQuery, findCaseStudyById } from '../../helpers'

import config from '../../../config'

class CaseStudyLayout extends Component {
  render() {
    const frontmatter = this.props.pageContext.frontmatter;

    return (
      <StaticQuery
        query={graphql`
          query CaseStudyQuery {
            allMdx(
              filter: { frontmatter: { hidden: { eq: false } } }
            ) {
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
        `}
        render={data => {
          const caseStudies = extractCaseStudyDataFromQuery(data);

          return (
            <Layout>
              <MDXProvider
                components={{
                  h1: ({children, ...props}) => (
                    <h1 className="header--xl" {...props}>{children}</h1>
                  ),
                  h2: ({children, ...props}) => (
                    <h2 className="header--lg text--center" {...props}>{children}</h2>
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
                  img: props => <Image className="image--max-width" sizes={config.sizes.caseStudy} {...props} />
                }}
              >
                <div className="case-study">
                  <Hero image={frontmatter.image} />
                  <div className="max-width max-width--md content-padding">
                    {this.props.children}
                    <Divider />
                  </div>
                  <Results stats={frontmatter.results} />
                  <div className="background--blue pad-vertical--double">
                    <div className="max-width content-padding">
                      <h3 className="header--md">Up next</h3>
                      <Columns columns={3}>
                        { frontmatter.upNext.map(id => {
                          const study = findCaseStudyById(id, caseStudies);

                          return (
                            <Card key={study.slug} link={`/work/${study.slug}`}>
                              <ImageBlock
                                title={study.title}
                                image={study.image}
                                caption={study.caption}
                                hoverable />
                            </Card>
                          )
                        })}
                      </Columns>
                    </div>
                  </div>
                  <References references={frontmatter.references} />
                </div>
              </MDXProvider>
            </Layout>
          )
        }}
      />
    )
  }
}

export default CaseStudyLayout
