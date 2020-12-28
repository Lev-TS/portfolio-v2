import React from 'react';
import Img from 'gatsby-image';

import Frontend from '../../assets/skills/frontend.inline.svg';
import Testing from '../../assets/skills/testing.inline.svg';
import Design from '../../assets/skills/design.inline.svg';
import Backend from '../../assets/skills/backend.inline.svg';
import Misc from '../../assets/skills/misc.inline.svg';

const Icons = {
  frontend: <Frontend className="skills-icon" />,
  testing: <Testing className="skills-icon" />,
  design: <Design className="skills-icon" />,
  backend: <Backend className="skills-icon" />,
  misc: <Misc className="skills-icon" />,

  getIcon(category, customIcon) {
    if (customIcon)
      return customIcon.ext === '.svg' ? (
        <img src={customIcon.publicURL} className="skills-icon" alt={`icon for ${category}`} />
      ) : (
        <Img
          fixed={customIcon.childImageSharp.fixed}
          className="skills-icon"
          alt={`icon for ${category}`}
        />
      );
    return this[category.toLowerCase()];
  },
};

export default Icons;
