import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Card from '../card/card.component';

import { WindowContext } from '../../providers/window.provider';

import { distributeCardsInRows, renderCardIcon, getSlug } from './projects.utils';
import { Section, SectionContent, Row, CardContent, Icon, Title, Excerpt } from './projects.styles';

export default function Skills() {
  const { isMobile } = useContext(WindowContext);
  const { colors } = useContext(ThemeContext);
  const { strapiCodes } = useStaticQuery(query);
  const other = strapiCodes.other ? strapiCodes.other : undefined;
  const rows = distributeCardsInRows(strapiCodes.featured, 2, other);
  const buttonStyles = { title: 'more', width: '70px' };
  const backgroundStyles = { height: '1000px', top: '-600px', color: colors.mediumBlue };

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles}>{'{...codes}'}</Heading>
        <Fade right={!isMobile} bottom={isMobile} duration={1000} delay={300} distance="300px">
          <SectionContent>
            {rows.map(({ rowId, row, inverted }) => (
              <Row key={rowId} inverted={inverted}>
                {row.map(({ id, cardIcon, title, excerpt, isFeatured }) => (
                  <Card
                    key={id}
                    buttonStyles={buttonStyles}
                    buttonLink={getSlug(title, isFeatured)}
                  >
                    <CardContent>
                      <Icon>{renderCardIcon(title, cardIcon)}</Icon>
                      <Title>{title}</Title>
                      <Excerpt>{excerpt}</Excerpt>
                    </CardContent>
                  </Card>
                ))}
              </Row>
            ))}
          </SectionContent>
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
