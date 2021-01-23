import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from 'styled-components';

import MobileScroll from '../mobile-scroll/mobile-scroll.component';
import DesktopElements from '../desktop-elements/desktop-elements.component';

import { Section, Greeting, Intro } from './hero.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

export default function Hero() {
  const { strapiHero } = useStaticQuery(query);
  const { colors } = useContext(ThemeContext);
  const backgroundStyles = { height: '60vh', top: '50vh', color: colors.red };

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
        <MobileScroll />
        <DesktopElements />
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
