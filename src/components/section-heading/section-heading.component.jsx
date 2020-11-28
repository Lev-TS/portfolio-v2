import React from "react";

import { Shape, HeadingWrapper, Title } from "./section-heading.styles";

const Heading = ({ background, children, left }) => (
  <Shape {...background} align={left}>
    <HeadingWrapper align={left}>
      <Title>{children}</Title>
    </HeadingWrapper>
  </Shape>
);

export default Heading;
