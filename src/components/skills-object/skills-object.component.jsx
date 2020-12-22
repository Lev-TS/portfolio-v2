import React from 'react';
import Img from 'gatsby-image';

import Icons from './skills-object.utils';
import { Container, List, IconWrapper } from './skills-object.styles';

// TODO: test with empty builtIn objects
// TODO: test one the names of builtIn object and customObject are the same
const SkillsObject = ({ builtInIcon, skillsObject }) => {
  let iconToRender;
  const { category, skillset, customIcon } = skillsObject;
  if (builtInIcon) iconToRender = Icons.getIcon(category.toLowerCase());
  if (customIcon) {
    if (customIcon.ext === '.svg')
      iconToRender = <img src={customIcon.publicURL} alt={`icon for ${category}`} />;
    else
      iconToRender = <Img fixed={customIcon.childImageSharp.fixed} alt={`icon for ${category}`} />;
  }

  return (
    <Container>
      <IconWrapper>{iconToRender}</IconWrapper>
      <p>{category} &#123;</p>
      <List>
        {skillset.map((item) => (
          <li key={item.id}>{item.skill}</li>
        ))}
      </List>
      <p>&#125;</p>
    </Container>
  );
};

export default SkillsObject;
