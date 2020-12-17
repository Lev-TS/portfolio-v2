import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';
import { colors } from '../styles/colors';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';

const Section = styled.div`
  padding: 0 40px;
  background: ${colors.mediumBlue};

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

// TODO: move styles to another file

const LargeImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 50px;
  padding-bottom: 50px;
  padding-top: 150px;

  div {
    -webkit-box-shadow: 0px 0px 10px 3px ${colors.grey};
    box-shadow: 0px 0px 10px 3px ${colors.grey};
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

  div {
    -webkit-box-shadow: 0px 0px 10px 2px ${colors.grey};
    box-shadow: 0px 0px 10px 3px ${colors.grey};
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;

// TODO: check if I really need to use the hook, I remember hooks are not needed if it's a page

const Certificates = ({ data }) => {
  const images = data.allFile.nodes;
  const linkAttributes = {
    href: 'https://www.codecademy.com/profiles/levanTsutskiridze1934164281',
    target: '_blank',
    rel: 'noreferrer noopener',
  };

  return (
    <AppLayout>
      <SEO title="Certificates" />
      <Header />
      <Section id="certificates">
        <LargeImageContainer>
          <Img fluid={images[0].childImageSharp.fluid} />
          <a {...linkAttributes}>
            <Img fluid={images[1].childImageSharp.fluid} />
          </a>
        </LargeImageContainer>
        <SmallImageContainer>
          {images.slice(2).map((image) => (
            <a {...linkAttributes} key={image.id}>
              <Img fluid={image.childImageSharp.fluid} />
            </a>
          ))}
        </SmallImageContainer>
      </Section>
      <Footer scrollTo="certificates" />
    </AppLayout>
  );
};

export default Certificates;

export const query = graphql`
  query Images {
    allFile(
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
`;
