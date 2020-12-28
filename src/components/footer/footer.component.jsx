import React from 'react';

import {
  FooterContainer,
  TopHalfCointainer,
  BottomHalfCointainer,
  ScrollUp,
  CustomButton,
} from './footer.styles';

import SocialNetwork from '../social-network/social-network.component';
import ScrollUpIcon from '../../assets/footer/scroll-up-icon.inline.svg';

export default function Footer({ scrollTo }) {
  return (
    <FooterContainer>
      <TopHalfCointainer>
        <ScrollUp to={scrollTo} smooth duration={1000}>
          <ScrollUpIcon />
        </ScrollUp>
        <SocialNetwork isFooter />
      </TopHalfCointainer>
      <BottomHalfCointainer>
        <p>© 2020 - designed and coded by LevTS</p>
        <CustomButton
          href="https://github.com/Lev-TS/portfolio-v2"
          target="_blank"
          rel="noreferrer noopener"
        >
          Open Source
        </CustomButton>
      </BottomHalfCointainer>
    </FooterContainer>
  );
}
