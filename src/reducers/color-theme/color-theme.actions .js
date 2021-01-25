import ColorThemeActionTypes from './color-theme.types';

export const activateColorPalette = (colors) => ({
  type: ColorThemeActionTypes.ACTIVATE_COLOR_PALETTE,
  payload: colors,
});

export const setShowDimMode = () => ({
  type: ColorThemeActionTypes.SET_SHOW_DIM_MODE,
});

export const setShowCustomPalette = () => ({
  type: ColorThemeActionTypes.SET_SHOW_CUSTOM_PALETTE,
});

export const setShowColorSubMenu = (boolean) => ({
  type: ColorThemeActionTypes.SET_SHOW_COLOR_SUB_MENU,
  payload: boolean,
});

export const setShowColorPicker = (boolean) => ({
  type: ColorThemeActionTypes.SET_SHOW_COLOR_PICKER,
  payload: boolean,
});

export const setPickerColor = ({ key, color }) => ({
  type: ColorThemeActionTypes.SET_PICKER_COLOR,
  payload: { key, color },
});

export const changeCustomColor = (obj) => ({
  type: ColorThemeActionTypes.CHANGE_CUSTOM_COLOR,
  payload: obj,
});
