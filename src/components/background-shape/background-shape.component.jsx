import React from "react";

import { Shape, HeadingWrapper } from './background-shape.styles'


const BackgroundShape = ({children, ...otherProps}) => (
  <Shape {...otherProps}>
    <HeadingWrapper>
      <span>{children}</span>
    </HeadingWrapper>
  </Shape>
);

export default BackgroundShape;