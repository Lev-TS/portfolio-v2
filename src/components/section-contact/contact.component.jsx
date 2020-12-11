import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import {
  Section,
  SectionContent,
  CardContent,
  backgroundStyles,
  BashCommand,
} from './contact.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';
import PillChoice from '../pill-choice/pill-choice.component';
import YesForm from '../form-yes-flow/yes-form.component';
import NoForm from '../form-no-flow/no-form.component';

import { WindowContext } from '../../providers/window.provider';

const ContactMe = () => {
  const { isMobile } = useContext(WindowContext);

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles} left>
          contact(me)
        </Heading>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={300} distance="300px">
          <SectionContent>
            <Card>
              <CardContent>
                <BashCommand>
                  <span>{'>'}</span> ~ <span>bash</span> my-network.sh
                </BashCommand>
                <PillChoice />
                <YesForm />
                <NoForm />
              </CardContent>
            </Card>
            <Comment>
              You take the blue pill...the story ends, you wake up in your bed and believe whatever
              you want to believe. You take the red pill... and I show you how deep the rabbit hole
              goes.
            </Comment>
          </SectionContent>
        </Fade>
      </Layout>
    </Section>
  );
};

export default ContactMe;
