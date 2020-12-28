import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';

import { Section, LargeImageContainer, SmallImageContainer } from '../styles/certificates.styles';

export default function Certificates({ data }) {
  const certificates = data.allStrapiCertificates.edges;

  certificates.sort((a, b) => {
    const dateA = new Date(a.node.issued_on);
    const dateB = new Date(b.node.issued_on);
    return dateB - dateA;
  });

  const renderCertificate = (certificate) => (
    <a
      key={certificate.node.id}
      href={certificate.node.link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Img fluid={certificate.node.image.childImageSharp.fluid} />
    </a>
  );

  return (
    <AppLayout footerScrollsTo="certificates">
      <SEO title="Certificates" />
      <Section id="certificates">
        <LargeImageContainer>
          {certificates.map(
            (certificate) => certificate.node.enlarge && renderCertificate(certificate)
          )}
        </LargeImageContainer>
        <SmallImageContainer>
          {certificates.map(
            (certificate) => !certificate.node.enlarge && renderCertificate(certificate)
          )}
        </SmallImageContainer>
      </Section>
    </AppLayout>
  );
}

export const query = graphql`
  query allStrapiCertificates {
    allStrapiCertificates {
      edges {
        node {
          id
          enlarge
          link
          issued_on
          image {
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
`;
