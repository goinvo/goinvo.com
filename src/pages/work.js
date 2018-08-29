import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layouts/layout'

const WorkPage = ({
  data: {
    allMdx: { edges },
  }
}) => {
  return (
    <Layout>
      <h1 className="header--xl">Work</h1>
      { edges.map(edge => {
        const name = edge.node.parent.name;
        return (
          <li key={ name }>
            <Link to={`case-studies/${ name }`}>{ edge.node.frontmatter.title }</Link>
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
