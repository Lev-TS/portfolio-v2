import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import OtherProjectCard from '../components/other-project-card/other-project-card.component';

import { OtherProjectContainer } from '../styles/other-projects.styles';

export default function OtherProjects({ data }) {
  let count = 0;

  return (
    <AppLayout footerScrollsTo="other-projects">
      <SEO title="Practice Projects" />
      <div id="other-projects" />
      <OtherProjectContainer>
        {data.strapiCodes.other.projects.map((project) => {
          count += 1;
          const { node: projectData } = data.allStrapiProjects.edges.find(
            ({ node }) => project.title === node.title
          );
          return (
            <OtherProjectCard key={project.id} projectData={projectData} isOdd={count % 2 !== 0} />
          );
        })}
      </OtherProjectContainer>
    </AppLayout>
  );
}

export const query = graphql`
  query {
    strapiCodes {
      other {
        projects {
          id
          title
        }
      }
    }
    allStrapiProjects {
      edges {
        node {
          id
          excerpt
          title
          sourceLink
          liveLink
          images {
            altText
            image {
              id
              ext
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          projectStack {
            id
            toolIcon {
              ext
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
