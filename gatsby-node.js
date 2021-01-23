const path = require('path');

if (typeof window !== `undefined`) {
  const module = require('module');
}

const {
  strapiSkillsSchema,
  strapiSocialLinksSchema,
  strapiCodesSchema,
  strapiProjectsSchema,
} = require('./utils/strapi-schema');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    ${strapiSkillsSchema}
    ${strapiSocialLinksSchema}
    ${strapiCodesSchema}
    ${strapiProjectsSchema}
  `;

  createTypes(typeDefs);
};

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `StrapiProjects`) {
    const slug = node.title
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
      .replace(/ /g, '-')
      .toLowerCase();
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allStrapiProjects {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      strapiCodes {
        featured {
          project {
            title
          }
          projectDescription
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.strapiCodes.featured.forEach((featuredProjObj) => {
    result.data.allStrapiProjects.edges.forEach(({ node }) => {
      if (featuredProjObj.project.title === node.title) {
        createPage({
          path: `/projects/${node.fields.slug}`,
          component: path.resolve(`./src/templates/featured-project.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      }
    });
  });
};
