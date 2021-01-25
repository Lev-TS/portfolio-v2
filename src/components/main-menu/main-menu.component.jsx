import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Checkbox } from 'semantic-ui-react';

import { useColorThemeContext } from '../../providers/color-theme.provider';
import { MenuContainer, Label } from './main-menu.styles';

import FontSelector from '../font-selector/font-selector.component';

export default function MainMenu({ show }) {
  const firstUpdate = useRef(true);
  const {
    state: { showDimMode, showCustomPalette, showColorPicker, customPalette },
    strapiTheme,
    dispatch,
    activateColorPalette,
    setShowDimMode,
    setShowCustomPalette,
    setShowColorSubMenu,
    setShowColorPicker,
  } = useColorThemeContext();

  const toggleDimMode = () => {
    dispatch(setShowDimMode());
    if (showColorPicker) dispatch(setShowColorPicker(false));
    if (showCustomPalette) {
      dispatch(setShowCustomPalette());
      dispatch(setShowColorSubMenu(false));
    }
  };

  const toggleCustomMode = () => {
    dispatch(setShowCustomPalette());
    dispatch(setShowColorSubMenu());
    if (showDimMode) dispatch(setShowDimMode());
    if (showColorPicker) dispatch(setShowColorPicker(false));
  };

  useEffect(() => {
    if (showDimMode) dispatch(activateColorPalette(strapiTheme.darkPalette));
    if (showCustomPalette) dispatch(activateColorPalette(customPalette));
  }, [showDimMode, showCustomPalette]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!showCustomPalette && !showDimMode) dispatch(activateColorPalette(strapiTheme.normalMode));
  }, [showCustomPalette, showDimMode]);

  return (
    <MenuContainer show={show}>
      <FontSelector />
      <Label>Dim Mode:</Label>
      <Checkbox slider checked={showDimMode} onChange={toggleDimMode} type="checkbox" />
      <Label>Custom Palette:</Label>
      <Checkbox slider checked={showCustomPalette} onChange={toggleCustomMode} type="checkbox" />
    </MenuContainer>
  );
}
