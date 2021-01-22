import React, { useState, useContext } from 'react';
import { TwitterPicker } from 'react-color';

import ColorPickerContext from '../../context/color-picker/color-picker.context';

import {
  ColorPickerContainer,
  ColorButton,
  TwitterPickerWrapper,
  Overlay,
} from './color-picker.styles';

export default function ColorPicker() {
  const { showCustomPalette, customPalette, onColorCustomization } = useContext(ColorPickerContext);
  const [showPicker, setShowPicker] = useState(false);
  const [activeColor, setActiveColor] = useState();
  const [activeKeyName, setActiveKeyName] = useState();
  const handleChangeComplete = (color) => {
    if (activeKeyName) {
      onColorCustomization(activeKeyName, color);
    }
  };

  return (
    <ColorPickerContainer show={showCustomPalette}>
      {Object.keys(customPalette).map((keyName) => (
        <ColorButton
          key={keyName}
          onClick={() => {
            setShowPicker(true);
            if (activeColor === customPalette[keyName]) setShowPicker(!showPicker);
            setActiveColor(customPalette[keyName]);
            setActiveKeyName(keyName);
          }}
          label={customPalette[keyName]}
          color={customPalette[keyName]}
          type="button"
        />
      ))}
      <TwitterPickerWrapper show={showPicker}>
        <TwitterPicker
          colors={[
            'black',
            '#03045e',
            '#023e8a',
            '#0077b6',
            '#0096c7',
            '#00b4d8',
            '#48cae4',
            '#90e0ef',
            '#ade8f4',
            '#caf0f8',
          ]}
          color={activeColor}
          triangle="hide"
          onChangeComplete={handleChangeComplete}
        />
      </TwitterPickerWrapper>
      <Overlay
        show={showPicker}
        onClick={() => {
          setShowPicker(false);
          setActiveColor();
          setActiveKeyName();
        }}
        label={activeColor}
        role="button"
      />
    </ColorPickerContainer>
  );
}
