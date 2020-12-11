import React from 'react';
import PropTypes from 'prop-types';

import { Container, List, Icon } from './skills-object.styles';

const SkillsObject = ({ skills: { type, skillset, icon } }) => {
  return (
    <Container>
      <Icon src={icon} alt="" />
      <p>{type} &#123;</p>
      <List>
        {skillset.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </List>
      <p>&#125;</p>
    </Container>
  );
};

SkillsObject.propTypes = {
  skills: PropTypes.exact({
    type: PropTypes.string,
    skillset: PropTypes.array,
    icon: PropTypes.node,
  }),
};

export default SkillsObject;
