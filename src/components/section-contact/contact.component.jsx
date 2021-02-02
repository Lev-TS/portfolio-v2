import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import { ThemeContext } from 'styled-components';

import {
  Section,
  SectionContent,
  CardContent,
  BashCommand,
  ContactDetails,
  Email,
} from './contact.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Comment from '../comment/comment.component';
import Card from '../card/card.component';
import PillChoice from '../pill-choice/pill-choice.component';
import YesForm from '../form-yes-flow/yes-form.component';
import NoForm from '../form-no-flow/no-form.component';

import { WindowContext } from '../../providers/window.provider';

export default function ContactMe() {
  const { isMobile } = useContext(WindowContext);
  const { colors } = useContext(ThemeContext);
  const backgroundStyles = { height: '1000px', top: '550px', color: colors.red };
  const {
    strapiContactMe: { contactFlow },
  } = useStaticQuery(query);

  return (
    <Section>
      <Layout>
        <Heading background={backgroundStyles} left showTitleIfMobile={!contactFlow[0].quote}>
          contact(me)
        </Heading>
        <Fade
          direction={isMobile || !contactFlow[0].quote ? undefined : 'left'}
          duration={1500}
          triggerOnce
        >
          <SectionContent>
            {contactFlow[0].quote ? (
              <>
                <Card>
                  <CardContent>
                    <BashCommand>
                      <span>{'>'}</span> ~ <span>bash</span> my-network.sh
                    </BashCommand>
                    <PillChoice />
                    <YesForm />
                    <NoForm callForAction={contactFlow[0].noFormCallForAction} />
                  </CardContent>
                </Card>
                <Comment>{contactFlow[0].quote}</Comment>
              </>
            ) : (
              <ContactDetails>
                <h4>{contactFlow[0].callForAction}</h4>
                <Email href={`mailto: ${contactFlow[0].email}`}>{contactFlow[0].email}</Email>
              </ContactDetails>
            )}
          </SectionContent>
        </Fade>
      </Layout>
    </Section>
  );
}

const query = graphql`
  query strapiContactMe {
    strapiContactMe {
      contactFlow {
        callForAction
        email
        noFormCallForAction
        quote
      }
    }
  }
`;
