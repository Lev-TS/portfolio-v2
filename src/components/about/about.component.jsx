import React from 'react';

import {
  Section,
  Avatar,
  SectionContent,
  CardContent,
  backgroundStyles,
  buttonStyles,
} from './about.styles';

import photo from './photo.svg';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';

const About = () => (
  <Section>
    <Layout>
      <Heading background={backgroundStyles}>{'<about />'}</Heading>
      <SectionContent>
        <Avatar src={photo} />
        <Comment left>
          Previously, I worked in the consulting industry and the skills I acquired there proved
          highly transferable to my current activities. For example, with my research and planning
          skills, I was able to reduce the upfront cost of using new technologies
        </Comment>
        <Card button={buttonStyles}>
          <CardContent>
            I’m a full-stack developer with a solid foundation in JavaScript, React, Node, Express,
            SQL, and other technologies. As I’ve applied this knowledge to my projects, I’ve grown
            as a developer and I’ve raised my standards for what’s expected of any software.
            <br />
            <br />
            Currently, I’m based in Vilnius, Lithuania, and I’m working full-time as a freelance web
            developer. In this role, I’ve had an opportunity to learn from senior developers and
            build products written in maintainable, scalable, and easily understandable code.
          </CardContent>
        </Card>
      </SectionContent>
    </Layout>
  </Section>
);

export default About;
