const fs = require('fs');

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
      })
    );
  });
};
