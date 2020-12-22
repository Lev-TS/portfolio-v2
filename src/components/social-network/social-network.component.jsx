import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from './social-network.styles';
import Icons from './social-network.utils';

// TODO: Work in Progress
export default function SocialNetwork({ className, isFooter }) {
  const { strapiSocialLinks } = useStaticQuery(query);
  const { socialLinks, customSocialLinks } = strapiSocialLinks;

  // if not custom render this:
  // <a key={item.networkName} href={item.hyperLink} target="_blank" rel="noreferrer noopener">
  //   {Icons.getIcon(item.networkName.toLowerCase())}
  // </a>;

  // if custom and svg render this:
  // <img
  //   src={item.customIcon.publicURL}
  //   className="social-icon"
  //   alt={`icon for ${item.networkName}`}
  // />

  // if custom and not svg render this:
  // <Img
  //   fixed={item.customIcon.childImageSharp.fixed}
  //   className="social-icon"
  //   alt={`icon for ${item.networkName}`}
  // />

  return <Container className={className} isFooter={isFooter}></Container>;
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
