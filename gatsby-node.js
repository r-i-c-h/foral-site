const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

/** Setup Slug if not found in frontmatter**/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    if (node.frontmatter.slugPath) {
      createNodeField({
        node, // Individual MDX node
        name: "slug", // Name of field to add
        // createFilePath returns a path with the leading "/".
        value: `${node.frontmatter.slugPath}`, // or  value: `/blog${value}`, // note missing slash
      });
    } else {
      const val = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: "slug",
        value: `${val}`,
      });
    }
  }
};

/** Create Pages: **/
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx(limit:1000){
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query:', result.errors);
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // We'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/ArticleTemplate.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id }
    });
  });
};