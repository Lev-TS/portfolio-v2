import React from "react";

import { Shape, HeadingWrapper } from './background-shape.styles'


const BackgroundShape = ({children, align}) => (
  <Shape {...align}>
    <HeadingWrapper>
      <span>{children}</span>
    </HeadingWrapper>
  </Shape>
);

export default BackgroundShape;