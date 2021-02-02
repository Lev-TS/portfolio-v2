import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import { ThemeContext } from 'styled-components';

import MobileScroll from '../mobile-scroll/mobile-scroll.component';

import { Section, Greeting, Intro } from './hero.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

export default function Hero() {
  const { strapiHero } = useStaticQuery(query);
  const { colors } = useContext(ThemeContext);
  const backgroundStyles = { height: '80vh', top: '50vh', color: colors.red };

  return (
    <Section id="hero">
      <Layout>
        <Greeting>
          <AttentionSeeker
            triggerOnce
            cascade
            effect="rubberBand"
            delay={500}
            duration={1000}
            damping={0.2}
            className="greeting-animation"
          >
            <span>H</span>
            <span>i</span>
          </AttentionSeeker>
        </Greeting>
        <Fade triggerOnce duration={1500} delay={1000}>
          <Intro dangerouslySetInnerHTML={{ __html: strapiHero.intro }} />
        </Fade>
        <Heading background={backgroundStyles} />
        <MobileScroll />
      </Layout>
    </Section>
  );
}

const query = graphql`
  query strapiHero {
    strapiHero {
      intro
    }
  }
`;
