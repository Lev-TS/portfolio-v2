import React from "react";
import { nanoid } from "nanoid";

import { Container, List, Icon } from "./skills-object.styles";

const SkillsObject = ({ skills: { type, skillset, icon } }) => (
  <Container>
    <Icon src={icon}/>
    <p>{type} &#123;</p>
    <List>
      {skillset.map(skill => (
        <li key={nanoid()}>{skill}</li>
      ))}
    </List>
    <p>&#125;</p>
  </Container>
);

export default SkillsObject;
