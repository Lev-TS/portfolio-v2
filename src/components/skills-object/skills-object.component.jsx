import React from 'react';

import Icons from './skills-object.utils';
import { Container, List, IconWrapper } from './skills-object.styles';

// TODO: test with empty builtIn objects
const SkillsObject = ({ skillsObject }) => {
  const { category, skillset, customIcon } = skillsObject;
  return (
    <Container>
      <IconWrapper>{Icons.getIcon(category, customIcon)}</IconWrapper>
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
