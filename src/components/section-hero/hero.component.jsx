import React, { useState, useEffect } from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

import { Section, Greeting, Intro, StyledScrollIcon, backgroundStyles } from './hero.styles';
import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

const Hero = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && show) setShow(false);
      if (window.scrollY <= 300 && !show) setShow(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show]);

  return (
    <Section>
      <Layout>
        <Greeting>
          <Fade duration={300} delay={100}>
            <RubberBand duration={1000} delay={300} cascade>
              Hi
            </RubberBand>
          </Fade>
        </Greeting>
        <Fade duration={1000} delay={800}>
          <Intro>
            I'm <span>Levan</span>
            <br /> Full Stack Developer
            <br /> Freelancer and Web Designer
          </Intro>
        </Fade>
        <StyledScrollIcon display={show} />
        <Heading background={backgroundStyles} />
      </Layout>
    </Section>
  );
};

export default Hero;
