import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { Container, StyledHomeIcon } from './header.styles';
import { ThemeContext } from '../../providers/default-theme.provider';

const Header = () => {
  const { fontName } = useContext(ThemeContext);
  const handleClick = async () => {
    navigate('/');
    sessionStorage.setItem('fontName', fontName);
  };

  return (
    <Container>
      <StyledHomeIcon onClick={handleClick} />
    </Container>
  );
};

export default Header;
