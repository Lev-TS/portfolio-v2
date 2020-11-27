import React from "react";

import {
  Section,
  PhotoWrapper,
  SectionContent,
  CardContent,
} from "./about.styles";

import MyPhoto from "../../assets/photo.inline.svg";

import SectionLayout from "../layouts/section.layout";
import Background from "../background-shape/background-shape.component";
import Comment from "../comment/comment.component";
import Card from "../card/card.component";

const About = () => {
  const buttonConfig = {
    title: "resume",
    right: "60px",
    bottom: "51px",
    width: "95px",
  };

  const backgroundConfig = {
    height: '700px',
    top: "-250px",
    color: "red"
  }

  return (
    <Section>
      <SectionLayout>
        <Background align={backgroundConfig}>
          &lt;about /&gt;
        </Background>
        <SectionContent>
          <PhotoWrapper>
            <MyPhoto id='portrait'/>
          </PhotoWrapper>
          <Comment left>
            Previously, I worked in the consulting industry and the skills I
            acquired there proved highly transferable to my current activities.
            For example, with my research and planning skills, I was able to
            reduce the upfront cost of using new technologies
          </Comment>
          <Card button={buttonConfig}>
            <CardContent>
              I’m a full-stack developer with a solid foundation in JavaScript,
              React, Node, Express, SQL, and other technologies. As I’ve applied
              this knowledge to my projects, I’ve grown as a developer and I’ve
              raised my standards for what’s expected of any software. <br />
              <br /> Currently, I’m based in Vilnius, Lithuania, and I’m working
              full-time as a freelance web developer. In this role, I’ve had an
              opportunity to learn from senior developers and build products
              written in maintainable, scalable, and easily understandable code.
            </CardContent>
          </Card>
        </SectionContent>
      </SectionLayout>
    </Section>
  );
};

export default About;
