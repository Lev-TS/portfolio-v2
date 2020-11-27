import React from "react";

import { CardContent, CustomButton } from "./card.styles";

const Card = ({ children, button: { title, ...config } }) => (
  <CardContent>
    {children}
    <CustomButton {...config}>
      <div />
      <span>{title}</span>
    </CustomButton>
  </CardContent>
);

export default Card;
