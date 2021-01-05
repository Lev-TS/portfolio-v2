import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import OtherProjectCard from '../components/other-project-card/other-project-card.component';

export const OtherProjectContainer = styled.div`
  max-width: 1178px;
  margin: 150px auto;
  padding: 0 40px;
`;

export default function OtherProjects({ data }) {
  return (
    <AppLayout footerScrollsTo="other-projects">
      <SEO title="Practice Projects" />
      <div id="other-projects" />
      <OtherProjectContainer>
        {data.strapiCodes.other.projects.map((project) => {
          const { node: projectData } = data.allStrapiProjects.edges.find(
            ({ node }) => project.title === node.title
          );

          return <OtherProjectCard key={project.id} projectData={projectData} />;
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
