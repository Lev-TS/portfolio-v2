import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import { ThemeContext } from 'styled-components';

import { Section, SectionContent, CardContent } from './skills.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';
import SkillsObject from '../skills-object/skills-object.component';

import { WindowContext } from '../../providers/window.provider';

export default function Skills() {
  const { isMobile } = useContext(WindowContext);
  const { colors } = useContext(ThemeContext);
  const { strapiSkills } = useStaticQuery(query);
  const { skillsObject, customSkillsObject, quote, cardHeight } = strapiSkills;
  const skillsObjectToRender = skillsObject.concat(customSkillsObject);
  const backgroundStyles = { height: '1000px', top: '550px', color: colors.mediumBlue };

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles} left>
          _skills
        </Heading>
        <Fade direction={isMobile ? undefined : 'left'} duration={1500} triggerOnce>
          <SectionContent>
            <Card buttonStyles={{ title: 'certificates' }} buttonLink="/certificates">
              <CardContent height={cardHeight}>
                {skillsObjectToRender.map((object) => (
                  <SkillsObject key={object.category} skillsObject={object} builtInIcon />
                ))}
              </CardContent>
            </Card>
            <Comment>{quote}</Comment>
          </SectionContent>
        </Fade>
      </Layout>
    </Section>
  );
}

const query = graphql`
  query strapiSkills {
    strapiSkills {
      quote
      cardHeight
      skillsObject {
        id
        category
        skillset {
          id
          skill
        }
      }
      customSkillsObject {
        id
        category
        skillset {
          id
          skill
        }
        customIcon {
          ext
          publicURL
          childImageSharp {
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
