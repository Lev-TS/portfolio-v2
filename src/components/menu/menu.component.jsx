import React, { useState, useContext, useEffect } from 'react';

import { Dropdown, Checkbox } from 'semantic-ui-react';

import { ThemeContext } from '../../providers/default-theme.provider';
import ColorPickerContext from '../../context/color-picker/color-picker.context';
import { SettingsMenu, Container, Label } from './menu.styles';

import ColorPicker from '../color-picker/color-picker.componet';

const fontOptions = [
  {
    key: 'monospace',
    text: 'Monospace',
    value: 'monospace',
  },
  {
    key: 'sans',
    text: 'Sans Serif',
    value: 'sans',
  },
  {
    key: 'serif',
    text: 'Serif',
    value: 'serif',
  },
];

const parseStorage = (storage, key) =>
  storage.getItem(key) !== null && JSON.parse(storage.getItem(key));

const setPlaceholder = (value) => {
  if (value === 'monospace') return 'Monospace';
  if (value === 'serif') return 'Serif';
  return 'Sans Serif';
};

export default function Menu({ show }) {
  const { fontName, strapiTheme, handleColorChange, handleFontChange } = useContext(ThemeContext);
  const savedCustomPalette = parseStorage(sessionStorage, 'customPalette');
  const savedDarkModeState = parseStorage(sessionStorage, 'showDarkMode');
  const savedCustomPaletteState = parseStorage(sessionStorage, 'showCustomPalette');
  const [customPalette, setCustomPalette] = useState(savedCustomPalette || strapiTheme.normalMode);
  const [showDarkMode, setShowDarkMode] = useState(savedDarkModeState || false);
  const [showCustomPalette, setShowCustomPalette] = useState(savedCustomPaletteState || false);

  const toggleDarkMode = () => {
    setShowDarkMode(!showDarkMode);
    setShowCustomPalette(false);
    sessionStorage.setItem('showDarkMode', !showDarkMode);
    sessionStorage.setItem('showCustomPalette', false);
  };

  const toggleCustomPalette = () => {
    setShowCustomPalette(!showCustomPalette);
    setShowDarkMode(false);
    sessionStorage.setItem('showCustomPalette', !showCustomPalette);
    sessionStorage.setItem('showDarkMode', false);
    sessionStorage.setItem('customPalette', JSON.stringify(customPalette));
  };

  const onColorCustomization = (keyName, color) => {
    customPalette[keyName] = color.hex;
    setCustomPalette({ ...customPalette });
  };

  useEffect(() => {
    if (showDarkMode && !showCustomPalette) handleColorChange(strapiTheme.darkPalette);
    else if (showCustomPalette && !showDarkMode) handleColorChange(customPalette);
    else handleColorChange(strapiTheme.normalMode);
  }, [showDarkMode, showCustomPalette]);

  useEffect(() => {
    if (showCustomPalette) handleColorChange(customPalette);
    sessionStorage.setItem('customPalette', JSON.stringify(customPalette));
  }, [customPalette]);

  return (
    <SettingsMenu show={show}>
      <Container>
        <Label>Fonts:</Label>
        <Dropdown
          placeholder={setPlaceholder(fontName.toLowerCase())}
          fluid
          selection
          options={fontOptions}
          onChange={handleFontChange}
        />
        <Label>Dim Mode:</Label>
        <Checkbox slider checked={showDarkMode} onChange={toggleDarkMode} type="checkbox" />
        <Label>Custom Palette:</Label>
        <Checkbox
          slider
          checked={showCustomPalette}
          onChange={toggleCustomPalette}
          type="checkbox"
        />
      </Container>
      <ColorPickerContext.Provider
        value={{ showCustomPalette, customPalette, onColorCustomization }}
      >
        <ColorPicker />
      </ColorPickerContext.Provider>
    </SettingsMenu>
  );
}
