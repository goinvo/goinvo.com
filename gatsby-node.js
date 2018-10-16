const path = require('path');
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                  frontmatter {
                    hidden
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          if (!node.frontmatter.hidden) {
            createPage({
              path: `/work/${node.parent.name}`,
              component: componentWithMDXScope(
                path.resolve("./src/components/layouts/case-study-layout.js"),
                node.code.scope
              ),
              context: { id: node.id }
            });
          }
        });
      })
    );
  });
};
