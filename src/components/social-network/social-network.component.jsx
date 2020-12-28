import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from './social-network.styles';
import Icons from './social-network.utils';

// TODO: Work in Progress
export default function SocialNetwork({ className, isFooter }) {
  const { strapiSocialLinks } = useStaticQuery(query);
  const { socialLinks, customSocialLinks } = strapiSocialLinks;
  const linksToRender = socialLinks.concat(customSocialLinks);

  return (
    <Container className={className} isFooter={isFooter}>
      {linksToRender.map((link) => (
        <a key={link.networkName} href={link.hyperLink} target="_blank" rel="noreferrer noopener">
          {Icons.getIcon(link)}
        </a>
      ))}
    </Container>
  );
}

const query = graphql`
  query strapiSocialLinks {
    strapiSocialLinks {
      id
      socialLinks {
        id
        networkName
        hyperLink
      }
      customSocialLinks {
        id
        networkName
        hyperLink
        customIcon {
          ext
          publicURL
          childImageSharp {
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
