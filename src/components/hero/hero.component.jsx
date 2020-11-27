import React from "react";

import { Section, Greeting, Intro } from "./hero.styles";
import SectionLayout from "../layouts/section.layout";
import Background from "../background-shape/background-shape.component";

const Hero = () => {
  const backgroundConfig = {
    height: '900px',
    top: "50vh",
    color: "red"
  }

  return (
    <Section>
      <SectionLayout>
        <Greeting>Hi</Greeting>
        <Intro>
          I'm <span>Levan</span> <br />
          Full Stack Developer <br />
          Freelancer and Web Designer
        </Intro>
        <Background align={backgroundConfig}/>
      </SectionLayout>
    </Section>
  );
};

export default Hero;
