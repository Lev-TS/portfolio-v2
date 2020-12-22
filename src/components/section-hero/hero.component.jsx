import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

export default function Hero() {
  const [showMobileScroll, setShowMobileScroll] = useState(true);
  const [showDesktopElements, setShowDesktopElements] = useState(true);
  const { strapiHero } = useStaticQuery(query);

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
          <Fade duration={300} delay={300}>
            <RubberBand duration={1000} delay={300} cascade>
              {strapiHero.greeting}
            </RubberBand>
          </Fade>
        </Greeting>
        <Fade duration={1000} delay={800}>
          <Intro dangerouslySetInnerHTML={{ __html: strapiHero.intro }} />
        </Fade>
        <StyledMobileScroll display={showMobileScroll} />
        <StyledDesktopScroll display={showDesktopElements} />
        <StyledSocialNetwork display={showDesktopElements} />
        <Heading background={backgroundStyles} />
      </Layout>
    </Section>
  );
}

const query = graphql`
  query strapiHero {
    strapiHero {
      greeting
      intro
    }
  }
`;
