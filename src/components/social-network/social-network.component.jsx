import React from 'react';

// import { Container, Icon } from './social-network.styles';
import styled from 'styled-components';

import facebookIcon from '../../assets/hero/facebook-icon.svg';
import linkedinIcon from '../../assets/hero/linkedin-icon.svg';
import twitterIcon from '../../assets/hero/twitter-icon.svg';
import githubIcon from '../../assets/hero/github-icon.svg';

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 50px;
  right: 15px;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 15px;

  @media screen and (max-width: 1290px) {
    right: 9px;
  }
`;

const Icon = styled.img`
  transition: 250ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.7);
  }

  @media screen and (max-width: 1290px) {
    transition: 200ms;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const DesktopScroll = ({ className }) => {
  return (
    <Container className={className}>
      <Icon src={facebookIcon} alt="Facebook" />
      <Icon src={linkedinIcon} alt="linkedIn" />
      <Icon src={twitterIcon} alt="Twitter" />
      <Icon src={githubIcon} alt="GitHub" />
    </Container>
  );
};

export default DesktopScroll;
