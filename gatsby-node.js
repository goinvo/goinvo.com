const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const caseStudyLayout = path.resolve(
  `./src/components/layouts/case-study-layout.js`
)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Reference {
     title: String
     link: String
    }
    type Result {
      stat: String
      description: String
    }
    type MdxFrontmatter {
      title: String
      image: String
      client: String
      caption: String
      categories: [String]
      upNext: [String]
      hidden: Boolean
      metaDescription: String
      references: [Reference]
      results: [Result]
    }
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/work${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const caseStudies = result.data.allMdx.nodes
  caseStudies.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: `${caseStudyLayout}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
