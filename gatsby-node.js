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
