import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import { colors } from '../../styles/colors';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Courier Prime';
    background: ${colors.background};
    color: ${colors.black};
  }

	* {
    box-sizing: border-box;
    margin: 0;
	}
`;

const AppLayout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
);

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node,
};
