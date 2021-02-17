import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container, ImageWrapper } from '../styles/404.styles';
import SEO from '../components/seo';

export default function NotFoundPage() {
  const data = useStaticQuery(query);

  return (
    <Container>
      <SEO seo={{ metaTitle: '404: Not found' }} />
      <h1>404: This Page doesn&#39;t exist</h1>
      <ImageWrapper>
        {data?.placeholderImage?.childImageSharp?.fluid ? (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        ) : null}
      </ImageWrapper>
    </Container>
  );
}

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
