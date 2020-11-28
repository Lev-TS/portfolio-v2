import React from "react";
import { nanoid } from 'nanoid';

import data from "./skills.data";

import {
  Section,
  SectionContent,
  CardContent,
  buttonStyles,
  backgroundStyles,
} from "./skills.styles";

import Layout from "../layouts/section.layout";
import Heading from "../section-heading/section-heading.component";
import Comment from "../comment/comment.component";
import Card from "../card/card.component";
import SkillsObject from "../skills-object/skills-object.component";

const Skills = () => {

  return (
  <Section>
    <Layout>
      <Heading background={backgroundStyles} left>
        _skills
      </Heading>
      <SectionContent>
        <Card button={buttonStyles}>
          <CardContent>
            {data.map(skills => <SkillsObject key={nanoid()} skills={skills}/>)}
          </CardContent>
        </Card>
        <Comment>
          Through research and practice, I've gained a solid understanding of
          some of the key technologies and concepts in software development.
          However, I’m continuously investing time and resources to improve my
          skillset.
        </Comment>
      </SectionContent>
    </Layout>
  </Section>
)};

export default Skills;