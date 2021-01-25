import React from 'react';
import { navigate } from 'gatsby';

import { Container, StyledHomeIcon } from './header.styles';

const Header = () => {
  const handleClick = async () => navigate('/');

  return (
    <Container>
      <StyledHomeIcon onClick={handleClick} />
    </Container>
  );
};

export default Header;
