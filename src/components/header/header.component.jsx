import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import { colors } from '../../styles/colors';

import ScrollUpIcon from '../../assets/footer/scroll-up-icon.inline.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${colors.darkGrey};
  z-index: 1;
`;

export const NavIcon = styled(ScrollUpIcon)`
  transition: 250ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.7);
  }
`;

const Header = ({ className, handleClick }) => (
  <Container>
    <Link to="/">
      <NavIcon type="button" className={className} onClick={handleClick}>
        back
      </NavIcon>
    </Link>
  </Container>
);

export default Header;
