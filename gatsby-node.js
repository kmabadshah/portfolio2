/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type !== null && node.internal.type === "StrapiPortfolio") {
    for (const category of node.categories) {
      for (const project of category.projects) {
        for (const image of project["images_detail"]) {
          const fileNode = await createRemoteFileNode({
            url: "http://localhost:1337" + image.url,
            store,
            cache,
            createNode,
            createNodeId: (id) => image.id.toString(),
          });

          if (fileNode) {
            image.localFile___NODE = fileNode.id;
          }
        }
      }
    }
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allStrapiPortfolio {
        edges {
          node {
            desc
            categories {
              id
              name
              projects {
                id
                category
                client
                project_date
                project_url
                desc
                image_featured {
                  childImageSharp {
                    fluid(quality: 100, webpQuality: 100) {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                      src
                      srcSet
                      sizes
                    }
                  }
                }
                images_detail {
                  localFile {
                    childImageSharp {
                      fluid(quality: 100, webpQuality: 100) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                        src
                        srcSet
                        sizes
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  data.allStrapiPortfolio.edges[0].node.categories.forEach(({ projects }) =>
    projects.forEach((project) => {
      const slug = "/projects/" + project.id;
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/components/proj_template.js`),
        context: { ...project },
      });
    })
  );
};
