const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const BLOG = 'blog';
const TIL = 'til';
const CONTENT = 'content';
const ALG = 'alg';
const BOOK = 'book';

function generatePage({ graphql, actions, reporter }) {
  const { createPage } = actions;
  return async function (template, prefix) {
    const postTemplate = path.resolve(`./src/templates/${template}-post.tsx`);

    const result = await graphql(
      `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "${CONTENT}/${prefix}/" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
    );

    if (result.errors) {
      reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
      return;
    }

    const posts = result.data.allMarkdownRemark.nodes;

    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostId = index === 0 ? null : posts[index - 1].id;
        const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

        createPage({
          path: `/${prefix}${post.fields.slug}`,
          component: postTemplate,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        });
      });
    }
  };
}

exports.createPages = async (props) => {
  const genPage = generatePage(props);

  await genPage(BLOG, BLOG);
  await genPage(BLOG, TIL);
  await genPage(BLOG, ALG);
  await genPage(BLOG, BOOK);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
