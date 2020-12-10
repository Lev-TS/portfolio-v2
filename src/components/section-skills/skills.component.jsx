import React from 'react';
import Fade from 'react-reveal/Fade';

import data from '../../data/skills.data';

import {
  Section,
  SectionContent,
  CardContent,
  buttonStyles,
  backgroundStyles,
} from './skills.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';
import SkillsObject from '../skills-object/skills-object.component';

const Skills = () => (
  <Section>
    <Layout>
      <Heading background={backgroundStyles} left>
        _skills
      </Heading>
      <Fade left duration={1000} delay={500} distance="300px">
        <SectionContent>
          <Card button={buttonStyles}>
            <CardContent>
              {data.map((skills) => (
                <SkillsObject key={skills.type} skills={skills} />
              ))}
            </CardContent>
          </Card>
          <Comment>
            Through research and practice, I've already gained a solid understanding of some of the
            key concepts and technologies in software development. However, I'm continuously
            investing time and resources to improve my skillset.
          </Comment>
        </SectionContent>
      </Fade>
    </Layout>
  </Section>
);

export default Skills;
