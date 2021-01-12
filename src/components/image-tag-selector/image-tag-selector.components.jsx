import React from 'react';
import Img from 'gatsby-image';

import { GatsbyImage, NonGatsbyImage } from './image-tag-selector.styles';

export default function ImageTagSelector({ source, alt, styles = {} }) {
  if (source.childImageSharp) {
    if (source.childImageSharp.fixed)
      return (
        <Img
          fixed={source.childImageSharp.fixed}
          className={`gatsby-fixed ${styles.className}`}
          alt={alt}
        />
      );
    if (source.childImageSharp.fluid)
      return (
        <GatsbyImage
          fluid={source.childImageSharp.fluid}
          className={`gatsby-fluid ${styles.className}`}
          maxHeight={styles.maxHeight}
          maxWidth={styles.maxWidth}
          alt={alt}
        />
      );
  }
  return (
    <NonGatsbyImage
      url={source.publicURL}
      className={`none-gatsby ${styles.className}`}
      maxHeight={styles.maxHeight}
      maxWidth={styles.maxWidth}
      backgroundColor={styles.backgroundColor}
    />
  );
}
