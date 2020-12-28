import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { colors } from '../../styles/colors';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

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

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  flex-grow: 1;
`;

export default function AppLayout({ children, withoutHeader, footerScrollsTo }) {
  return (
    <App>
      <GlobalStyle />
      {!withoutHeader ? <Header id="header" /> : null}
      <Body style={!withoutHeader ? { background: colors.mediumBlue } : null}>{children}</Body>
      <Footer scrollTo={footerScrollsTo} />
    </App>
  );
}
