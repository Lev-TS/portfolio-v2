import styled, { css } from 'styled-components';

import MobileScroll from '../mobile-scroll/mobile-scroll.component';
import DesktopScroll from '../desktop-scroll/desktop-scroll.component';
import SocialNetwork from '../social-network/social-network.component';

export const Section = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 0 40px;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Greeting = styled.div`
  font-family: ${(props) => props.theme.fonts.heroGreeting};
  font-weight: bolder;
  font-size: 40vh;
  line-height: 40vh;
  position: relative;
  top: 30vh;
  left: -3vh;

  @media screen and (max-width: 800px) {
    left: 0;
    font-size: calc(100px + 40vw);
    text-align: center;
  }
`;

export const Intro = styled.div`
  font-family: ${(props) => props.theme.fonts.heroIntro};
  font-style: italic;
  font-weight: bolder;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  position: relative;
  top: 40vh;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 20px;
  }

  span {
    color: ${(props) => props.theme.colors.background};
  }
`;

// imported component styles
const show = css`
  transform: ${(props) => (props.display ? 'scale(1)' : 'scale(0)')};
`;

const hide = css`
  transform: scale(0);
`;

export const StyledMobileScroll = styled(MobileScroll)`
  ${hide}

  @media screen and (max-width: 1124px) {
    ${show}
  }
`;

export const DesktopScrollWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 100px;
`;

export const StyledDesktopScroll = styled(DesktopScroll)`
  transform: ${(props) =>
    props.display ? `scale(1) rotate(-90deg) translate(0, -${props.translateXBy}px)` : 'scale(0)'};

  @media screen and (max-width: 1124px) {
    ${hide}
  }
`;

export const StyledSocialNetwork = styled(SocialNetwork)`
  ${show}

  @media screen and (max-width: 1124px) {
    ${hide}
  }
`;
