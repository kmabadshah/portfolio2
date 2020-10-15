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
      for (const image of category.images) {
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
};
