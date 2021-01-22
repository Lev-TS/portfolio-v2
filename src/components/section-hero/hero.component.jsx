import React, { useState, useEffect, useContext, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from 'styled-components';

import {
  Section,
  Greeting,
  Intro,
  StyledMobileScroll,
  DesktopScrollWrapper,
  StyledDesktopScroll,
  StyledSocialNetwork,
} from './hero.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

export default function Hero() {
  const element = useRef(null);
  const [showMobileScroll, setShowMobileScroll] = useState(true);
  const [showDesktopElements, setShowDesktopElements] = useState(true);
  const [desktopElementDimensions, setDesktopElementDimensions] = useState({});
  const { colors } = useContext(ThemeContext);
  const backgroundStyles = { height: '60vh', top: '50vh', color: colors.red };
  const { strapiHero } = useStaticQuery(query);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight && window.scrollY > 0;
    if (window.scrollY > 368 && showMobileScroll) setShowMobileScroll(false);
    if (window.scrollY === 0 && !showMobileScroll) setShowMobileScroll(true);
    if (isBottom && !showDesktopElements) setShowDesktopElements(false);
    if (!isBottom && !showDesktopElements) setShowDesktopElements(true);
  };

  // TODO: move useEffect for showMobileScroll and showDesktopElements to respective components;
  useEffect(() => {
    setDesktopElementDimensions({
      width: element.current.offsetWidth,
      height: element.current.offsetHeight,
    });
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
        <Heading background={backgroundStyles} />
        <StyledMobileScroll display={showMobileScroll} />
        <DesktopScrollWrapper ref={element}>
          <StyledDesktopScroll
            display={showDesktopElements}
            translateXBy={(desktopElementDimensions.width - desktopElementDimensions.height) / 2}
          />
        </DesktopScrollWrapper>
        <StyledSocialNetwork display={showDesktopElements} />
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
