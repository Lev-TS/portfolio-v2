import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../../providers/default-theme.provider';
import { Fonts } from '../../styles/theme';

import { IconWrapper, Overlay } from './theme-selector.styles';
import SettingsIcon from '../../assets/settings.inline.svg';

import Menu from '../menu/menu.component';

export default function ThemeSelector({ children, unfixMenu }) {
  const { fontName, activeColorPalette } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <Menu show={showMenu} />
      <Overlay show={showMenu} onClick={toggleMenu} />
      <ThemeProvider theme={{ colors: activeColorPalette, fonts: Fonts.getTypeface(fontName) }}>
        <IconWrapper reposition={unfixMenu}>
          <SettingsIcon onClick={toggleMenu} />
        </IconWrapper>
        {children}
      </ThemeProvider>
    </>
  );
}
