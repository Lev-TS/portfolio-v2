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
  const [showDesktopScroll, setShowDesktopScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 368 && showMobileScroll) setShowMobileScroll(false);
      if (window.scrollY === 0 && !showMobileScroll) setShowMobileScroll(true);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && showDesktopScroll)
        setShowDesktopScroll(false);
      if (window.scrollY === 0 && !showDesktopScroll) setShowDesktopScroll(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMobileScroll, showDesktopScroll]);

  // TODO: add display conditions for StyledSocialNetwork
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
        <StyledMobileScroll display={showMobileScroll} />
        <StyledDesktopScroll display={showDesktopScroll} />
        <StyledSocialNetwork display={true} />
        <Heading background={backgroundStyles} />
      </Layout>
    </Section>
  );
};

export default Hero;
