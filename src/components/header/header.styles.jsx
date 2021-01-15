import styled from 'styled-components';

import ScrollUpIcon from '../../assets/footer/scroll-up-icon.inline.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.darkGrey};
  z-index: 1;
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 250ms;
  }

  &:hover {
    a {
      transform: scale(1.7);
    }
  }
`;

export const NavIcon = styled(ScrollUpIcon)`
  transform: rotate(-90deg);

  .scroll-arrow {
    fill: ${(props) => props.theme.colors.background};
  }
`;
