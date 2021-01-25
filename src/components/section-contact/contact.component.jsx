import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ThemeContext } from 'styled-components';

import { Section, SectionContent, CardContent, BashCommand } from './contact.styles';

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
  const { colors } = useContext(ThemeContext);
  const backgroundStyles = { height: '1000px', top: '550px', color: colors.red };

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles} left>
          contact(me)
        </Heading>
        <Fade direction={isMobile ? 'up' : 'left'} duration={1500} triggerOnce>
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
