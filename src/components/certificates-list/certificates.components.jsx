import React, { useEffect, useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { WindowContext } from '../../providers/window.provider';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import { Container, LargeImageContainer, SmallImageContainer } from './certificates.styles';

const Certificates = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const images = data.allFile.nodes;
  const { showCertificates, scrollPosition, toggleCertificates } = useContext(WindowContext);
  const linkAttributes = {
    href: 'https://www.codecademy.com/profiles/levanTsutskiridze1934164281',
    target: '_blank',
    rel: 'noreferrer noopener',
  };

  useEffect(() => {
    const background = document.getElementById('app-layout');
    if (showCertificates) {
      background.style.position = 'fixed';
      return () => {
        background.style.position = 'static';
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [showCertificates]);

  return (
    <Container show={showCertificates} onClick={toggleCertificates} id="certificates">
      <Header handleClick={toggleCertificates} />
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
    </Container>
  );
};

export default Certificates;
