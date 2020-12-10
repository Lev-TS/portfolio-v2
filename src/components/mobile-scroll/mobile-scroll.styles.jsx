import styled from 'styled-components';

import { colors } from '../../styles/colors';

const ScrollIcon = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);

  width: 16px;
  height: 28px;
  border: 1px solid ${colors.background};
  border-radius: 25px;

  &:before {
    content: '';
    background: ${colors.background};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 6px;
    width: 3px;
    height: 3px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(14px);
    }
  }
`;

export default ScrollIcon;
