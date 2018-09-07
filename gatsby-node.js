const fs = require('fs');

const CATEGORIES = require('./src/data/categories.json');

const extractCategories = (node) => {
  return node.frontmatter.categories.split(",").map(catId => {
    return CATEGORIES.find(cat => cat.id === catId.trim());
  });
}

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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const caseStudyList = [];

        result.data.allMdx.edges.forEach(({ node }) => {
          if (!node.frontmatter.hidden) {
            caseStudyList.push({
              slug: node.parent.name,
              title: node.frontmatter.title,
              image: node.frontmatter.image,
              client: node.frontmatter.client,
              categories: extractCategories(node),
              caption: node.frontmatter.caption
            });

            createPage({
              path: `/work/${node.parent.name}`,
              component: node.parent.absolutePath,
              context: { absPath: node.parent.absolutePath }
            });
          }

          const caseStudyJson = JSON.stringify(caseStudyList);

          fs.writeFile('src/data/case-study-list.json', caseStudyJson, 'utf8', function readFileCallback(err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log('Successfully wrote case study data to src/data/case-study-list.json');
            }
          })
        });
      })
    );
  });
};
