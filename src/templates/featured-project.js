import React from 'react';
import { graphql } from 'gatsby';

import AppLayout from '../components/layouts/app.layout';
import ProjectCarousel from '../components/other-project-carousel/other-project-carousel.component';
import ProjectStack from '../components/other-project-stack/other-project-stack.component';
import ProjectLinks from '../components/project-links/project-links.component';
import ProjectCardList from '../components/project-card-list/project-card-list.component';

import {
  Section,
  Container,
  ProjectDescription,
  Portfolio,
} from '../styles/featured-project.styles';

export default ({ location, data }) => {
  const { strapiCodes, strapiProjects } = data;
  const currentFeaturedProj = strapiCodes.featured.find(
    (el) => el.project.title === strapiProjects.title
  );
  const remFeaturedProj = strapiCodes.featured.filter((el) => el.id !== currentFeaturedProj.id);

  return (
    <AppLayout
      footerScrollsTo="featured-project-carousel"
      state={location.state}
      seo={{ ...currentFeaturedProj.seo, project: true }}
    >
      <div id="featured-project-carousel" />
      <Section>
        <ProjectCarousel images={strapiProjects.images} featured />
        <Container>
          <ProjectStack
            projectStack={strapiProjects.projectStack}
            style={{ marginTop: '55px', marginBottom: '55px' }}
          />
          <ProjectLinks liveLink={strapiProjects.liveLink} sourceLink={strapiProjects.sourceLink} />
        </Container>
        <ProjectDescription source={currentFeaturedProj.projectDescription} />
        <Portfolio>
          <h1>The Rest of Portfolio</h1>
          <ProjectCardList
            featuredProjects={remFeaturedProj}
            otherProjects={strapiCodes.other}
            doNotSaveScrollY
          />
        </Portfolio>
      </Section>
    </AppLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    strapiProjects(fields: { slug: { eq: $slug } }) {
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
    strapiCodes {
      featured {
        id
        projectDescription
        seo {
          metaTitle
          metaDescription
          shareImage {
            publicURL
          }
        }
        cardIcon {
          publicURL
          ext
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        project {
          id
          title
          excerpt
        }
      }
      other {
        id
        cardTitle
        cardDescription
        cardIcon {
          publicURL
          ext
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
