import React from 'react';

import { useColorThemeContext } from '../../providers/color-theme.provider';

import { MenuContainer, ColorButton } from './color-sub-menu.styles';

export default function ColorSubMenu() {
  const {
    state: { showColorSubMenu, customPalette },
    setShowColorPicker,
    setPickerColor,
    dispatch,
  } = useColorThemeContext();

  return (
    <MenuContainer show={showColorSubMenu}>
      {Object.keys(customPalette).map((keyName) => (
        <ColorButton
          key={keyName}
          onClick={() => {
            dispatch(setShowColorPicker(true));
            dispatch(setPickerColor({ key: keyName, color: customPalette[keyName] }));
          }}
          label={customPalette[keyName]}
          color={customPalette[keyName]}
          type="button"
        />
      ))}
    </MenuContainer>
  );
}
