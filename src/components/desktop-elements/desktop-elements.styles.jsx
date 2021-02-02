import styled, { css } from 'styled-components';

import DesktopScroll from '../desktop-scroll/desktop-scroll.component';
import SocialNetwork from '../social-network/social-network.component';

// imported component styles
const show = css`
  transform: ${(props) => (props.display ? 'scale(1)' : 'scale(0)')};
`;

const hide = css`
  transform: scale(0);
`;

export const DesktopScrollWrapper = styled.div`
  position: fixed;
  left: 12px;
  bottom: 50px;
  z-index: 5;

  @media screen and (max-width: 1290px) {
    left: 5px;
  }
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
