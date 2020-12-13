import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import { colors } from '../styles/colors';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';

const Section = styled.div`
  padding: 0 40px;
  background: ${colors.mediumBlue};

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

// TODO: move styles to another file
// TODO: after updating the quality, check if I really need the paddings for the brakepoint

const LargeImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 50px;
  padding-bottom: 50px;
  padding-top: 150px;

  @media screen and (max-width: 800px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const SmallImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 20px;
  padding-bottom: 150px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;

// TODO: check if I really need to use the hook, I remember hooks are not needed if it's a page
// TODO: change pictures with better quality ones

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(
        filter: { relativeDirectory: { eq: "my-certificates" } }
        sort: { fields: birthTime, order: ASC }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <AppLayout>
      <SEO title="certificates" />
      <Section id="certificates">
        <LargeImageContainer>
          <Img fluid={data.images.nodes[0].childImageSharp.fluid} />
          <Img fluid={data.images.nodes[1].childImageSharp.fluid} />
        </LargeImageContainer>
        <SmallImageContainer>
          {data.images.nodes.slice(2).map((image) => (
            <Img key={image.id} fluid={image.childImageSharp.fluid} />
          ))}
        </SmallImageContainer>
      </Section>
    </AppLayout>
  );
};

export default IndexPage;

// <SectionLayout>
//   <Img fixed={data.image.childImageSharp.fixed} alt="Udemy REACT certificate" />
//   <Img fluid={data.image.childImageSharp.fluid} alt="Udemy REACT certificate" />
// </SectionLayout>;
