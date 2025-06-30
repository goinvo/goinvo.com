import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import Helmet from 'react-helmet'

import Layout from './layout'
import { HeroCriticalImage, LazyImage } from '../optimized-image'
import Results from '../results'
import Columns from '../columns'
import Card from '../card'
import ImageBlock from '../image-block'
import References from '../references'

import {
  extractWorkItemLinkDetails,
  concatCaseStudiesAndFeatures,
  findCaseStudyById,
  mediaUrl,
} from '../../helpers'

import config from '../../../config'

const CaseStudyLayout = ({ data: caseStudies, children }) => {
  const { mdx } = caseStudies

  if (!mdx || !children) {
    return
  }

  const caseStudiesWithFeatures = concatCaseStudiesAndFeatures({
    caseStudies,
    filterFeatures: false,
  })

  const caseStudy = findCaseStudyById(caseStudies, mdx.id)

  const meta = [
    {
      name: 'twitter:site',
      content: '@goinvo',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: caseStudy.frontmatter.title,
    },
    {
      name: 'twitter:image',
      content: mediaUrl(caseStudy.frontmatter.image),
    },
    {
      property: 'og:title',
      content: caseStudy.frontmatter.title,
    },
    {
      property: 'og:image',
      content: mediaUrl(caseStudy.frontmatter.image),
    },
  ]
  if (caseStudy.frontmatter.metaDescription) {
    meta.push(
      {
        name: 'description',
        content: caseStudy.frontmatter.metaDescription,
      },
      {
        name: 'twitter:description',
        content: caseStudy.frontmatter.metaDescription,
      },
      {
        property: 'og:description',
        content: caseStudy.frontmatter.metaDescription,
      }
    )
  }

  return (
    <Layout>
      <Helmet title={`${caseStudy.frontmatter.title} - GoInvo`} meta={meta} />
      <MDXProvider
        components={{
          h1: ({ children, ...props }) => (
            <h1
              className="header--xl margin-top--double margin-bottom--half"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="header--lg margin-top--double text--center"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="header--md margin-bottom--half" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="header--sm margin-bottom--half" {...props}>
              {children}
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p className="text--gray margin-top--none margin-bottom--double">
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="ul margin-top--none margin-bottom--double">
              {children}
            </ul>
          ),
          img: props => (
            <LazyImage
              className="image--max-width"
              sizes={config.sizes.fullInsideMediumMaxWidth}
              {...props}
            />
          ),
        }}
      >
        <div className={`case-study ${caseStudy.parent.name}`}>
          <div className="hero">
            <div className="hero__image-container">
              <HeroCriticalImage
                src={caseStudy.frontmatter.image}
                alt={caseStudy.frontmatter.title}
                className="hero__image"
                priority={true}
                placeholderType="blur"
                placeholderColor="#2c3e50"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className="max-width max-width--md content-padding">
            {children}
          </div>
          {caseStudy.frontmatter.results ? (
            <Results stats={caseStudy.frontmatter.results} />
          ) : null}
          <div className="background--blue pad-vertical--double pad-bottom--quad">
            <div className="max-width content-padding">
              <h3 className="header--md">Up next</h3>
              <Columns columns={3}>
                {!!caseStudiesWithFeatures.length && caseStudy.frontmatter.upNext.map(id => {
                  const nextItem = caseStudiesWithFeatures.find(
                    item => item.slug === id || item.id === id
                  )

                  const {
                    link,
                    externalLink,
                    suppressNewTab,
                  } = extractWorkItemLinkDetails(nextItem)

                  return (
                    <Card
                      key={link}
                      link={link}
                      externalLink={externalLink}
                      suppressNewTab={suppressNewTab}
                    >
                      <ImageBlock
                        title={nextItem.title}
                        image={nextItem.image}
                        caption={nextItem.caption}
                        hoverable
                      />
                    </Card>
                  )
                })}
              </Columns>
            </div>
          </div>
          {caseStudy.frontmatter.references ? (
            <div className="background--gray pad-vertical">
              <div className="max-width content-padding">
                <References references={caseStudy.frontmatter.references} />
              </div>
            </div>
          ) : null}
        </div>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CaseStudyLayoutQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
    }
    allMdx(filter: { frontmatter: { hidden: { eq: false } } }) {
      nodes {
        id
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
          results {
            stat
            description
          }
          references {
            title
            link
          }
          upNext
          metaDescription
        }
        fields {
          slug
        }
      }
    }
  }
`

export default CaseStudyLayout
