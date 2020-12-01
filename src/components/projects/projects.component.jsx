import React from 'react';
import Fade from 'react-reveal/Fade';

import data from '../../data/project-banners.data';

import {
  Section,
  SectionContent,
  CardContent,
  Icon,
  Title,
  Excerpt,
  backgroundStyles,
  buttonStyles,
} from './projects.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Card from '../card/card.component';

const Skills = () => (
  <Section>
    <Layout>
      <Heading background={backgroundStyles}>{'{...codes}'}</Heading>
      <Fade right duration={1000} delay={500} distance="300px">
        <SectionContent>
          {data.map(({ icon, title, excerpt }) => (
            <Card key={title} button={buttonStyles}>
              <CardContent>
                <Icon src={icon} alt="" />
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
              </CardContent>
            </Card>
          ))}
        </SectionContent>
      </Fade>
    </Layout>
  </Section>
);

export default Skills;
