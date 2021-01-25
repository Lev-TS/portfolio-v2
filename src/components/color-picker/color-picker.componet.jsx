import React, { useEffect } from 'react';
import { TwitterPicker } from 'react-color';

import { TwitterPickerWrapper } from './color-picker.styles';

import { useColorThemeContext } from '../../providers/color-theme.provider';

export default function ColorPicker() {
  const {
    state: { showColorPicker, showCustomPalette, pickerColorOptions, pickerColor, customPalette },
    changeCustomColor,
    activateColorPalette,
    setPickerColor,
    dispatch,
  } = useColorThemeContext();

  const handleChangeComplete = (color) => {
    const payloadObj = {};
    payloadObj[pickerColor.key] = color.hex;
    dispatch(setPickerColor({ key: pickerColor.key, color: color.hex }));
    dispatch(changeCustomColor(payloadObj));
  };

  useEffect(() => {
    if (showCustomPalette) {
      dispatch(activateColorPalette(customPalette));
    }
  }, [customPalette]);

  return (
    <TwitterPickerWrapper show={showColorPicker}>
      <TwitterPicker
        colors={pickerColorOptions[pickerColor.key]}
        color={pickerColor.color}
        triangle="hide"
        onChangeComplete={handleChangeComplete}
      />
    </TwitterPickerWrapper>
  );
}
