import React from 'react';

import Icons from './skills-object.utils';
import { Container, List, IconWrapper, Header } from './skills-object.styles';

const SkillsObject = ({ skillsObject }) => {
  const { category, skillset, customIcon } = skillsObject;
  return (
    <Container>
      <Header>
        <span>{category}</span>
        <IconWrapper>{Icons.getIcon(category, customIcon)}</IconWrapper>
      </Header>
      <List>
        {skillset.map((item) => (
          <li key={item.id}>{item.skill}</li>
        ))}
      </List>
    </Container>
  );
};

export default SkillsObject;
