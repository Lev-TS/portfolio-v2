import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

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
  font-family: 'Recursive', cursive;
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

export const Intro = styled.p`
  font-style: italic;
  font-weight: bold;
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
    color: ${colors.background};
  }
`;

// imported component styles
const show = css`
  transform: ${(props) => !props.display && 'scale(0)'};
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

export const StyledDesktopScroll = styled(DesktopScroll)`
  ${show}

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

export const backgroundStyles = {
  height: '60vh',
  top: '50vh',
  color: colors.red,
};
