import React from "react";

import { Section, Greeting, Intro } from "./hero.styles";
import SectionLayout from "../layouts/section.layout";
import BackgroundShape from "../background-shape/background-shape.component"

const Hero = () => (
  <Section>
    <SectionLayout>
      <Greeting>Hi</Greeting>
      <Intro>
        I'm <span>Levan</span> <br />
        Full Stack Developer <br />
        Freelancer and Web Designer
      </Intro>
    </SectionLayout>
    <BackgroundShape top='50vh' color='red'/>
  </Section>
);

export default Hero;
