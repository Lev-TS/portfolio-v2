import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
  <div id="app-layout" style={{ border: '3px solid green' }}>
    <Helmet>
      <script src="http://localhost:8097" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Recursive:wght@700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
