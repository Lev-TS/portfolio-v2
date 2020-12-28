import React from 'react';
import Img from 'gatsby-image';

import Facebook from '../../assets/hero/facebook-icon.inline.svg';
import Linkedin from '../../assets/hero/linkedin-icon.inline.svg';
import Twitter from '../../assets/hero/twitter-icon.inline.svg';
import Github from '../../assets/hero/github-icon.inline.svg';

const Icons = {
  facebook: <Facebook className="social-icon" />,
  linkedin: <Linkedin className="social-icon" />,
  twitter: <Twitter className="social-icon" />,
  github: <Github className="social-icon" />,

  getIcon(link) {
    if (link.customIcon)
      return link.customIcon.ext === '.svg' ? (
        <img
          src={link.customIcon.publicURL}
          className="social-icon"
          alt={`icon for ${link.networkName}`}
        />
      ) : (
        <Img
          fixed={link.customIcon.childImageSharp.fixed}
          className="social-icon"
          alt={`icon for ${link.networkName}`}
        />
      );
    return this[link.networkName.toLowerCase()];
  },
};

export default Icons;
