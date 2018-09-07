import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'

// TODO:
// - Categories
// - Option to specify which items to show
// - Correct sorting (by featured, date?)

const WorkPage = ({
  data: {
    allMdx: { edges },
  }
}) => {
  return (
    <Layout>
      <Hero image="home/family-doctor-visit-diabetes.jpg">
        <h1 className="header--xl">
          Patient tested<span className="text--serif text--primary">.</span><br/>
          Clinician approved<span className="text--serif text--primary">.</span>
        </h1>
      </Hero>
      { edges.map(edge => {
        const name = edge.node.parent.name;
        return (
          <li key={ name }>
            <Link to={`work/${ name }`}>{ edge.node.frontmatter.title }</Link>
          </li>
        )
      }) }
    </Layout>
  )
}

export default WorkPage

export const pageQuery = graphql`
  query MDXQuery {
    allMdx {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
