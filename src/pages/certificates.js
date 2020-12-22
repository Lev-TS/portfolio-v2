import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';

import { Section, LargeImageContainer, SmallImageContainer } from '../styles/certificates.styles';

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
