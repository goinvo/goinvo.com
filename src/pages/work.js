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
      Work:
      { edges.map(edge => {
        const name = edge.node.fileNode.name;
        return (
          <li key={ name }>
            <Link to={`case-studies/${ name }`}>{ name }</Link>
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
          fileNode {
            name
          }
        }
      }
    }
  }
`;
