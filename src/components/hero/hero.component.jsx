import React from "react";

import { Section, Greeting, Intro, backgroundStyles } from "./hero.styles";
import Layout from "../layouts/section.layout";
import Heading from "../section-heading/section-heading.component";

const Hero = () => (
  <Section>
    <Layout>
      <Greeting>Hi</Greeting>
      <Intro>
        I'm <span>Levan</span> <br />
        Full Stack Developer <br />
        Freelancer and Web Designer
      </Intro>
      <Heading background={backgroundStyles} />
    </Layout>
  </Section>
);

export default Hero;
