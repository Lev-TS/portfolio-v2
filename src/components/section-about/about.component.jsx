import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Fade } from 'react-awesome-reveal';

import { ThemeContext } from 'styled-components';
import { WindowContext } from '../../providers/window.provider';

import { Section, Avatar, SectionContent, CardContent } from './about.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';

export default function About() {
  const { colors } = useContext(ThemeContext);
  const { isMobile } = useContext(WindowContext);
  const { strapiAbout } = useStaticQuery(query);
  const { avatar, bio, quote, resume } = strapiAbout;
  const backgroundStyles = { height: '700px', top: '-250px', color: colors.red };
  const buttonStyles = { title: 'resume', right: '60px', bottom: '51px' };

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles}>{'<about />'}</Heading>
        <Fade direction={isMobile ? 'up' : 'right'} duration={1500} triggerOnce>
          <SectionContent>
            <Avatar>
              <Img fluid={avatar.childImageSharp.fluid} />
            </Avatar>
            <Comment left>{quote}</Comment>
            <Card buttonStyles={buttonStyles} setDownload={resume}>
              <CardContent dangerouslySetInnerHTML={{ __html: bio }} />
            </Card>
          </SectionContent>
        </Fade>
      </Layout>
    </Section>
  );
}

const query = graphql`
  query strapiAbout {
    strapiAbout {
      bio
      quote
      avatar {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resume {
        publicURL
      }
    }
  }
`;
