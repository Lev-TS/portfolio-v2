import React from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';

import { Section, Greeting, Intro, backgroundStyles } from './hero.styles';
import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

const Hero = () => (
  <Section>
    <Layout>
      <Greeting>
        <RubberBand duration={1000} delay={300} cascade>
          Hi
        </RubberBand>
      </Greeting>
      <Bounce duration={1000} delay={700} distance="300px">
        <Intro>
          I'm <span>Levan</span>
          <br /> Full Stack Developer
          <br /> Freelancer and Web Designer
        </Intro>
      </Bounce>
      <Heading background={backgroundStyles} />
    </Layout>
  </Section>
);

export default Hero;
