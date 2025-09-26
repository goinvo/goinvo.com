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

// Ensure minimal search index exists in public/ after build (for previews and prod)
exports.onPostBuild = async ({ reporter }) => {
  const fs = require('fs')
  const path = require('path')
  const publicIndex = path.join(__dirname, 'public', 'search-index.json')
  try {
    if (!fs.existsSync(publicIndex)) {
      reporter.info('Generating minimal search index (missing in public/)')
      const gen = path.join(__dirname, 'scripts', 'generate-minimal-search-index.js')
      if (fs.existsSync(gen)) {
        require('child_process').execFileSync(process.execPath, [gen], { stdio: 'inherit' })
      } else {
        reporter.warn('generate-minimal-search-index.js not found; skipping index generation')
      }
    } else {
      reporter.info('search-index.json already present; skipping generation')
    }
  } catch (err) {
    reporter.warn(`Failed to ensure search-index.json: ${err && err.message ? err.message : err}`)
  }
}
