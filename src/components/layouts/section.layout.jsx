import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Layout = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`;

const SectionLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

SectionLayout.propTypes = {
  children: PropTypes.node,
};

export default SectionLayout;
