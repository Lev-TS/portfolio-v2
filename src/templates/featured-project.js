import React from 'react';
import Markdown from 'react-markdown';
import { graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styled from 'styled-components';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';

import { colors } from '../styles/colors';

// const ImageWrapper = styled.div`
//   width: 500px;
//   margin: 150px auto;
// `;
// <ImageWrapper>
// <Img fluid={node.image.childImageSharp.fluid} />
// </ImageWrapper>

export const Section = styled.div`
  border: 4px solid green;
  background: ${colors.mediumBlue};
`;

export const ProjectCard = styled.div`
  max-width: 780px;
  background: ${colors.mediumBlue};
  border: 4px solid green;
`;

export const Image = styled(Img)`
  height: 400px;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
`;

export const ProjectDescription = styled(Markdown)`
  background: ${colors.black};
  color: ${colors.foreground};
  padding: 40px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.mediumBlue};
    margin: 10px 0;
  }

  p {
    padding-bottom: 20px;
  }

  > :first-child {
    margin-top: 0;
    padding-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export default ({ data, className }) => {
  const { project, projectDescription } = data.strapiCodes.featured.find(
    (featuredProjObj) => featuredProjObj.project.title === data.strapiProjects.title
  );

  return (
    <AppLayout hideFooter hideHeader>
      <SEO title={project.title} />

      <ProjectCard>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoPlay
          infiniteLoop
          stopOnHover
          useKeyboardArrows
          swipeable
          emulateTouch
        >
          {data.strapiProjects.images.map((node) => (
            <Image fluid={node.image.childImageSharp.fluid} className={className} />
          ))}
        </Carousel>
        <ProjectDescription source={projectDescription} />
      </ProjectCard>
    </AppLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    strapiProjects(fields: { slug: { eq: $slug } }) {
      id
      title
      images {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
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
`;
