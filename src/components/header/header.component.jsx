import React from 'react';
import { Link } from 'gatsby';

import { Container, NavIcon } from './header.styles';

const Header = ({ className }) => {
  return (
    <Container>
      <Link to="/">
        <NavIcon className={className}>back</NavIcon>
      </Link>
    </Container>
  );
};

export default Header;
