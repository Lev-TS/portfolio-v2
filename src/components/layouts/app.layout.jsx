import React from 'react';

import WindowProvider from '../../providers/window.provider';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import DesktopElements from '../desktop-elements/desktop-elements.component';
import ThemeSelector from '../theme-selector/theme-selector.component';

import { GlobalStyle, App, Body } from './app.layout.styles';

export default function AppLayout({ children, hideHeader, hideFooter, footerScrollsTo }) {
  return (
    <WindowProvider>
      <ThemeSelector unfixMenu={hideHeader}>
        <DesktopElements />
        <App>
          <GlobalStyle />
          {!hideHeader ? <Header id="header" /> : null}
          <Body changeColor={!hideHeader}>{children}</Body>
          {!hideFooter ? <Footer scrollTo={footerScrollsTo} /> : null}
        </App>
      </ThemeSelector>
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
