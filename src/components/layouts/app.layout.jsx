import React from 'react';

import DefaultThemeProvider from '../../providers/default-theme.provider';
import WindowProvider from '../../providers/window.provider';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import ThemeSelector from '../theme-selector/theme-selector.component';

import { GlobalStyle, App, Body } from './app.layout.styles';

export default function AppLayout({ children, hideHeader, hideFooter, footerScrollsTo }) {
  return (
    <WindowProvider>
      <DefaultThemeProvider>
        <ThemeSelector unfixMenu={hideHeader}>
          <App>
            <GlobalStyle />
            {!hideHeader ? <Header id="header" /> : null}
            <Body changeColor={!hideHeader}>{children}</Body>
            {!hideFooter ? <Footer scrollTo={footerScrollsTo} /> : null}
          </App>
        </ThemeSelector>
      </DefaultThemeProvider>
    </WindowProvider>
  );
}

console.log(`
##     ## ######## ##    ##    ######## ##     ## ######## ########  ########     ##  ###   
##     ## ##        ##  ##        ##    ##     ## ##       ##     ## ##          ####   ##  
##     ## ##         ####         ##    ##     ## ##       ##     ## ##           ##     ## 
######### ######      ##          ##    ######### ######   ########  ######              ## 
##     ## ##          ##          ##    ##     ## ##       ##   ##   ##           ##     ## 
##     ## ##          ##          ##    ##     ## ##       ##    ##  ##          ####   ##  
##     ## ########    ##          ##    ##     ## ######## ##     ## ########     ##  ###   

`);
