import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';

import { WindowContext } from '../../providers/window.provider';

import { Section, StyledProjectCardList } from './projects.styles';

export default function Skills() {
  const { isMobile } = useContext(WindowContext);
  const { colors } = useContext(ThemeContext);
  const { strapiCodes } = useStaticQuery(query);
  const backgroundStyles = { height: '1000px', top: '-600px', color: colors.mediumBlue };
  const other = strapiCodes.other ? strapiCodes.other : undefined;

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles}>{'{...codes}'}</Heading>
        <Fade direction={isMobile ? 'up' : 'right'} duration={1500} triggerOnce>
          <StyledProjectCardList featuredProjects={strapiCodes.featured} otherProjects={other} />
        </Fade>
      </Layout>
    </Section>
  );
}

const query = graphql`
  query strapiCodes {
    strapiCodes {
      featured {
        id
        cardIcon {
          publicURL
          ext
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        project {
          id
          title
          excerpt
        }
      }
      other {
        id
        cardTitle
        cardDescription
        cardIcon {
          publicURL
          ext
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
