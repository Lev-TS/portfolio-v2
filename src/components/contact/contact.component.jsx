import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  Section,
  SectionContent,
  CardContent,
  buttonStyles,
  backgroundStyles,
} from './contact.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';

const ContactMe = () => (
  <Section>
    <Layout>
      <Heading background={backgroundStyles} left>
        contact(me)
      </Heading>
      <Fade left duration={1000} delay={500} distance="300px">
        <SectionContent>
          <Card button={buttonStyles}>
            <CardContent />
          </Card>
          <Comment>
            You take the blue pill...the story ends, you wake up in your bed and believe whatever
            you want to believe. You take the red pill... and I show you how deep the rabbit hole
            goes. - Morpheus
          </Comment>
        </SectionContent>
      </Fade>
    </Layout>
  </Section>
);

export default ContactMe;
