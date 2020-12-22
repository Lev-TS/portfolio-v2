import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import {
  Section,
  Avatar,
  SectionContent,
  CardContent,
  backgroundStyles,
  buttonStyles,
} from './about.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';

import { WindowContext } from '../../providers/window.provider';

export default function About() {
  const { isMobile } = useContext(WindowContext);
  const { strapiAbout } = useStaticQuery(query);
  const { avatar, bio, quote, resume } = strapiAbout;

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles}>{'<about />'}</Heading>
        <Fade right={!isMobile} bottom={isMobile} duration={1000} delay={300} distance="300px">
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
