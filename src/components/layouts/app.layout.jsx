import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

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
  const { strapiTheme } = useStaticQuery(query);

  const fonts = Fonts.getTypeface(useFontThemeContext().state.fontName || strapiTheme.defaultFonts);
  const colors = useColorThemeContext().state.colors || strapiTheme.normalMode;

  return (
    <WindowProvider>
      <ThemeProvider theme={{ colors, fonts }}>
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

const query = graphql`
  query strapiTheme {
    strapiTheme {
      defaultFonts
      normalMode {
        background
        red
        black
        foreground
        darkBlue
        mediumBlue
        darkGrey
        grey
        lightGrey
      }
      darkPalette {
        background
        black
        darkGrey
        darkBlue
        foreground
        grey
        lightGrey
        mediumBlue
        red
      }
    }
  }
`;
