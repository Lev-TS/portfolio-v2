import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';

export default function NotFoundPage() {
  const data = useStaticQuery(query);

  return (
    <div>
      <SEO seo={{ metaTitle: '404: Not found' }} />
      <h1>404: This Page is Lost in Space</h1>
      {data?.placeholderImage?.childImageSharp?.fluid ? (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      ) : null}
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
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
