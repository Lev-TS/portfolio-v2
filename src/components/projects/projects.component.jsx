import React from 'react';

import {
  Section,
  SectionContent,
  CardContent,
  backgroundStyles,
  buttonStyles,
} from './projects.styles';

import Layout from '../layouts/section.layout';
import Heading from '../section-heading/section-heading.component';
import Card from '../card/card.component';

const Skills = () => (
  <Section>
    <Layout>
      <Heading background={backgroundStyles}>{'{...codes}'}</Heading>
      <SectionContent>
        <Card button={buttonStyles}>
          <CardContent />
        </Card>
      </SectionContent>
    </Layout>
  </Section>
);

export default Skills;
