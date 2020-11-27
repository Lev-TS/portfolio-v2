import React from "react";

import {
  Section,
  Card,
  Bio,
  PhotoWrapper,
  CustomButton,
  CardWrapper,
} from "./about.styles";

import Photo from "../../assets/photo.svg";

import SectionLayout from "../layouts/section.layout";
import BackgroundShape from "../background-shape/background-shape.component";
import Comment from "../comment/comment.component";

const About = () => (
  <Section>
    <SectionLayout>
      <Comment top="420px" left>
        Previously, I worked in the consulting industry and the skills I
        acquired there proved highly transferable to my current activities. For
        example, with my research and planning skills, I was able to reduce the
        upfront cost of using new technologies
      </Comment>
      <PhotoWrapper>
        <Photo />
      </PhotoWrapper>
      <CardWrapper>
        <Card>
          <Bio>
            I’m a full-stack developer with a solid foundation in JavaScript,
            React, Node, Express, SQL, and other technologies. As I’ve applied
            this knowledge to my projects, I’ve grown as a developer and I’ve
            raised my standards for what’s expected of any software. <br />
            <br /> Currently, I’m based in Vilnius, Lithuania, and I’m working
            full-time as a freelance web developer. In this role, I’ve had an
            opportunity to learn from senior developers and build products
            written in maintainable, scalable, and easily understandable code.
          </Bio>
          <CustomButton>
            <div />
            <span>resume</span>
          </CustomButton>
        </Card>
      </CardWrapper>
    </SectionLayout>
    <BackgroundShape top='-350px' color='red'>&lt;about /&gt;</BackgroundShape>
  </Section>
);

export default About;
