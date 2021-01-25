import ColorThemeActionTypes from './color-theme.types';

export default function colorReducer(state, action) {
  switch (action.type) {
    case ColorThemeActionTypes.SET_SHOW_DIM_MODE: {
      sessionStorage.setItem('showDimMode', !state.showDimMode);
      return { ...state, showDimMode: !state.showDimMode };
    }
    case ColorThemeActionTypes.SET_SHOW_CUSTOM_PALETTE: {
      sessionStorage.setItem('showCustomPalette', !state.showCustomPalette);
      return { ...state, showCustomPalette: !state.showCustomPalette };
    }
    case ColorThemeActionTypes.SET_SHOW_COLOR_SUB_MENU: {
      return typeof action.payload === 'boolean'
        ? { ...state, showColorSubMenu: action.payload }
        : { ...state, showColorSubMenu: !state.showColorSubMenu };
    }
    case ColorThemeActionTypes.SET_SHOW_COLOR_PICKER: {
      return typeof action.payload === 'boolean'
        ? { ...state, showColorPicker: action.payload }
        : { ...state, showColorPicker: !state.showColorPicker };
    }
    case ColorThemeActionTypes.SET_PICKER_COLOR: {
      return { ...state, pickerColor: action.payload };
    }
    case ColorThemeActionTypes.ACTIVATE_COLOR_PALETTE: {
      sessionStorage.setItem('colors', JSON.stringify(action.payload));
      return { ...state, colors: action.payload };
    }
    case ColorThemeActionTypes.CHANGE_CUSTOM_COLOR: {
      const customPalette = { ...state.customPalette, ...action.payload };
      sessionStorage.setItem('customPalette', JSON.stringify(customPalette));
      return { ...state, customPalette };
    }
    default: {
      return state;
    }
  }
}
