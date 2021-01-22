import styled from 'styled-components';

import HomeIcon from '../../assets/home-icon.inline.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 3;

  a {
  }

  @media screen and (max-width: 950px) {
    background: ${(props) => props.theme.colors.mediumBlue};
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25));
  }
`;

export const StyledHomeIcon = styled(HomeIcon)`
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25));
  position: fixed;
  top: 15px;
  left: 50px;
  cursor: pointer;

  @media screen and (max-width: 1290px) {
    left: 43px;
  }

  .home-icon {
    fill: ${(props) => props.theme.colors.black};
  }
`;
