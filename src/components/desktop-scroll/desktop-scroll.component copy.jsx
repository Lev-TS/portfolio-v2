import React from 'react';

import { Container, Text, RabbitIcon } from './desktop-scroll.styles';

import icon from '../../assets/hero/rabbit-icon.svg';

const DesktopScroll = ({ className }) => {
  return (
    <Container className={className}>
      <RabbitIcon src={icon} alt="scroll down" />
      <Text>Follow the rabbit</Text>
    </Container>
  );
};

export default DesktopScroll;
