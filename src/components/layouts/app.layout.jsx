import React from 'react';
import { ThemeProvider } from 'styled-components';

import WindowProvider from '../../providers/window.provider';
import { useFontThemeContext } from '../../providers/font-theme.provider';
import { useColorThemeContext } from '../../providers/color-theme.provider';

import SEO from '../seo';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import DesktopScrollElements from '../desktop-elements/desktop-elements.component';
import ThemeSelector from '../theme-selector/theme-selector.component';

import { Fonts } from '../../styles/theme';

import { GlobalStyle, Content, Main } from './app.layout.styles';

export default function AppLayout({ children, hideHeader, footerScrollsTo, seo }) {
  const {
    state: { fontName },
  } = useFontThemeContext();
  const {
    state: { colors },
  } = useColorThemeContext();

  return (
    <WindowProvider>
      <ThemeProvider theme={{ colors, fonts: Fonts.getTypeface(fontName) }}>
        <SEO seo={seo} />
        <GlobalStyle />
        {!hideHeader ? <Header /> : null}
        <Main>
          <ThemeSelector unfixMenu={hideHeader} />
          <DesktopScrollElements />
          <Content changeColor={!hideHeader}>{children}</Content>
        </Main>
        <Footer scrollTo={footerScrollsTo} />
      </ThemeProvider>
    </WindowProvider>
  );
}
