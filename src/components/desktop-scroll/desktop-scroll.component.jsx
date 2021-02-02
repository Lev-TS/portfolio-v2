import React from 'react';

import { Container, Text, StyledRabbitIcon } from './desktop-scroll.styles';

const DesktopScroll = ({ className }) => {
  return (
    <Container className={className}>
      <StyledRabbitIcon />
      <Text>Scroll</Text>
    </Container>
  );
};

export default DesktopScroll;
