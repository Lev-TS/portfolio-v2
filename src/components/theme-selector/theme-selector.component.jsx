import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useFontThemeContext } from '../../providers/font-theme.provider';
import { useColorThemeContext } from '../../providers/color-theme.provider';
import { Fonts } from '../../styles/theme';

import { IconWrapper, Overlay } from './theme-selector.styles';
import SettingsIcon from '../../assets/settings.inline.svg';

import MainMenu from '../main-menu/main-menu.component';
import ColorSubMenu from '../color-sub-menu/color-sub-menu.component';
import ColorPicker from '../color-picker/color-picker.componet';

export default function ThemeSelector({ children, unfixMenu }) {
  const { state: fontTheme } = useFontThemeContext();
  const {
    state: { colors, showCustomPalette },
    setShowColorSubMenu,
    setShowColorPicker,
    dispatch,
  } = useColorThemeContext();

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    if (showMenu && showCustomPalette) dispatch(setShowColorSubMenu(true));
    if (!showMenu && showCustomPalette) {
      dispatch(setShowColorSubMenu(false));
      dispatch(setShowColorPicker(false));
    }
  }, [showMenu]);

  return (
    <>
      <ThemeProvider theme={{ colors, fonts: Fonts.getTypeface(fontTheme.fontName) }}>
        <IconWrapper reposition={unfixMenu}>
          <SettingsIcon onClick={toggleMenu} />
        </IconWrapper>
        <MainMenu show={showMenu} />
        <ColorSubMenu />
        <ColorPicker />
        <Overlay show={showMenu} onClick={toggleMenu} />
        {children}
      </ThemeProvider>
    </>
  );
}
