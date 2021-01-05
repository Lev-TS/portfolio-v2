const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type StrapiSkills implements Node {
      quote: String
      cardHeight: Int
      skillsObject: [SkillsObject]
      customSkillsObject: [CustomSkillsObject]
    }

    type SkillsObject {
      id: String
      category: String
      skillset: [Skillset]
    }

    type CustomSkillsObject @infer {
      id: String
      category: String
      skillset: [Skillset]
      customIcon: File @link(by: "id", from: "customIcon___NODE")
    }

    type Skillset {
      id: String
      skill: String
    }

    type StrapiSocialLinks implements Node {
      id: String
      socialLinks: [SocialLinks]
      customSocialLinks: [CustomSocialLinks]
    }

    type SocialLinks {
      id: Int
      networkName: String
      hyperLink: String
    }

    type CustomSocialLinks @infer {
      id: Int
      networkName: String
      hyperLink: String
      customIcon: File @link(by: "id", from: "customIcon___NODE")
    }
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
