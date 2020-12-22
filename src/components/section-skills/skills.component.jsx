import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Fade from 'react-reveal/Fade';

import {
  Section,
  SectionContent,
  CardContent,
  buttonStyles,
  backgroundStyles,
} from './skills.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';
import SkillsObject from '../skills-object/skills-object.component';

import { WindowContext } from '../../providers/window.provider';

export default function Skills() {
  const { isMobile } = useContext(WindowContext);
  const { strapiSkills } = useStaticQuery(query);
  const { skillsObject, customSkillsObject, quote, cardHeight } = strapiSkills;
  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles} left>
          _skills
        </Heading>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={300} distance="300px">
          <SectionContent>
            <Card buttonStyles={buttonStyles} buttonLink="/certificates">
              <CardContent height={cardHeight}>
                {skillsObject.map((object) => (
                  <SkillsObject key={object.category} skillsObject={object} builtInIcon />
                ))}
                {customSkillsObject.map((object) => (
                  <SkillsObject key={object.category} skillsObject={object} />
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
