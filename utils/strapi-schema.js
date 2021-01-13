exports.strapiSkillsSchema = `
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
`;

exports.strapiSocialLinksSchema = `
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

exports.strapiCodesSchema = `
  type StrapiCodes implements Node {
    featured: [Featured]
    other: Other
  }

  type Featured @infer {
    id: Int
    projectDescription: String
    cardIcon: File @link(by: "id", from: "cardIcon___NODE")
    project: Project
  }

  type Project {
    id: Int
    title: String
    excerpt: String
    liveLink: String
    sourceLink: String
  }

  type Other {
    id: Int
    cardTitle: String
    cardDescription: String
    cardIcon: File @link(by: "id", from: "cardIcon___NODE")
    projects: [Project]
  }
`;

exports.strapiProjectsSchema = `
  type StrapiProjectsSchema implements Node {
    id: Int
    excerpt: String
    title: String
    sourceLink: String
    liveLink: String
    images: [Images]
    projectStack: [ProjectStack]
  }

  type Images @infer {
    altText: String
    image: File @link(by: "id", from: "image___NODE")
  }

  type ProjectStack @infer {
    id: Int
    toolIcon: File @link(by: "id", from: "toolIcon___NODE")
  }
`;
