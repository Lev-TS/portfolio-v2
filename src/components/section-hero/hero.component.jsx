import React, { useState, useEffect } from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

import {
  Section,
  Greeting,
  Intro,
  StyledMobileScroll,
  StyledDesktopScroll,
  StyledSocialNetwork,
  backgroundStyles,
} from './hero.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

const Hero = () => {
  const [showMobileScroll, setShowMobileScroll] = useState(true);
  const [showDesktopElements, setShowDesktopElements] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 368 && showMobileScroll) setShowMobileScroll(false);
    if (window.scrollY === 0 && !showMobileScroll) setShowMobileScroll(true);
    if (window.scrollY > 3440 && showDesktopElements) setShowDesktopElements(false);
    if (window.scrollY <= 3440 && !showDesktopElements) setShowDesktopElements(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll(), showMobileScroll, showDesktopElements]);

  return (
    <Section id="hero">
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
        <StyledMobileScroll display={showMobileScroll} />
        <StyledDesktopScroll display={showDesktopElements} />
        <StyledSocialNetwork display={showDesktopElements} />
        <Heading background={backgroundStyles} />
      </Layout>
    </Section>
  );
};

export default Hero;
