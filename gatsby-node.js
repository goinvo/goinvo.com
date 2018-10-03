const fs = require('fs');
const path = require('path');

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
                  parent {
                    ... on File {
                      name
                      absolutePath
                    }
                  }
                  frontmatter {
                    hidden
                  }
                }
              }
            }
            allOldFeaturesJson {
              edges {
                node {
                  route
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
              component: node.parent.absolutePath,
              context: { absPath: node.parent.absolutePath }
            });
          }
        });

        result.data.allOldFeaturesJson.edges.forEach(({ node }) => {
          createPage({
            path: `/features/${node.route}/*`,
            component: path.resolve(`src/pages/features/index.js`),
            context: { route: node.route }
          })
        });
      })
    );
  });
};
