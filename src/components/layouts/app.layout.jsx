import React from 'react';

import { ThemeProvider } from 'styled-components';
import WindowProvider from '../../providers/window.provider';

import { defaultTheme } from '../../styles/theme';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import { GlobalStyle, App, Body } from './app.layout.styles';

export default function AppLayout({ children, hideHeader, hideFooter, footerScrollsTo }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <WindowProvider>
        <App>
          <GlobalStyle />
          {!hideHeader ? <Header id="header" /> : null}
          <Body changeColor={!hideHeader}>{children}</Body>
          {!hideFooter ? <Footer scrollTo={footerScrollsTo} /> : null}
        </App>
      </WindowProvider>
    </ThemeProvider>
  );
}
