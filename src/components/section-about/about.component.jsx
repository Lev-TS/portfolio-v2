import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import {
  Section,
  Avatar,
  SectionContent,
  CardContent,
  backgroundStyles,
  buttonStyles,
} from './about.styles';

import photo from '../../assets/about/photo.svg';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';

import { WindowContext } from '../../providers/window.provider';

const About = () => {
  const { isMobile } = useContext(WindowContext);
  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles}>{'<about />'}</Heading>
        <Fade right={!isMobile} bottom={isMobile} duration={1000} delay={300} distance="300px">
          <SectionContent>
            <Avatar src={photo} />
            <Comment left>
              Previously, I worked in the research industry and the skills I acquired there proved
              highly transferable to my current activities. For example, with my research and
              planning skills, I was able to reduce the upfront cost of using new technologies
            </Comment>
            <Card button={buttonStyles}>
              <CardContent>
                I’m a full-stack developer with a solid foundation in JavaScript, React, Node,
                Express, SQL, and other technologies. As I’ve applied this knowledge to my projects,
                I’ve grown as a developer and I’ve raised my standards for what’s expected of any
                software.
                <br />
                <br />
                Currently, I’m based in Vilnius, Lithuania, and I’m working full-time as a freelance
                web developer. In this role, I’ve had an opportunity to learn from senior developers
                and build products written in maintainable, scalable, and easily understandable
                code.
              </CardContent>
            </Card>
          </SectionContent>
        </Fade>
      </Layout>
    </Section>
  );
};

export default About;
