import React, { createContext, useReducer, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import randomColor from 'randomcolor';

import colorReducer from '../reducers/color-theme/color-theme.reducer';
import {
  activateColorPalette,
  setPickerColor,
  setShowColorPicker,
  setShowColorSubMenu,
  setShowDimMode,
  setShowCustomPalette,
  changeCustomColor,
} from '../reducers/color-theme/color-theme.actions ';

const parseStorage = (storage, key, initialState) => {
  const savedValue = storage.getItem(key) !== null && JSON.parse(storage.getItem(key));
  if (savedValue) return JSON.parse(storage.getItem(key));
  return initialState[key];
};

const setLumination = (key) => {
  if (key === 'background' || key === 'foreground' || key === 'lightGrey') return 'light';
  if (key === 'red' || key === 'mediumBlue' || key === 'grey') return 'bright';
  return 'dark';
};

const ColorThemeContext = createContext({
  state: {
    customPalette: {},
    showDimMode: false,
    showCustomPalette: false,
    showColorSubMenu: false,
    showColorPicker: false,
    pickerColor: {},
    pickerColorOptions: {},
  },
  dispatch: () => {},
  activateColorPalette: () => {},
  setShowDimMode: () => {},
  setShowCustomPalette: () => {},
  setShowColorSubMenu: () => {},
  setShowColorPicker: () => {},
  setPickerColor: () => {},
  setPickerColorOptions: () => {},
  changeCustomColor: () => {},
});

export default function ColorThemeProvider({ children }) {
  const { strapiTheme } = useStaticQuery(query);

  const pickerColorOptions = {};
  Object.keys(strapiTheme.normalMode).forEach((key) => {
    pickerColorOptions[key] = randomColor({
      count: 10,
      luminosity: setLumination(key),
      hue: strapiTheme.normalMode[key],
    });
  });

  if (typeof window !== 'undefined')
    sessionStorage.setItem('pickerColorOptions', JSON.stringify(pickerColorOptions));

  const initialState = {
    colors: strapiTheme.normalMode,
    customPalette: strapiTheme.normalMode,
    showDimMode: false,
    showCustomPalette: false,
    showColorSubMenu: false,
    showColorPicker: false,
    pickerColor: {},
    pickerColorOptions,
  };
  const savedState = () => {
    if (typeof sessionStorage !== `undefined`)
      return {
        colors: parseStorage(sessionStorage, 'colors', initialState),
        customPalette: parseStorage(sessionStorage, 'customPalette', initialState),
        showDimMode: parseStorage(sessionStorage, 'showDimMode', initialState),
        showCustomPalette: parseStorage(sessionStorage, 'showCustomPalette', initialState),
        pickerColorOptions: parseStorage(sessionStorage, 'pickerColorOptions', initialState),
        showColorSubMenu: initialState.showColorSubMenu,
        showColorPicker: initialState.showColorPicker,
        pickerColor: initialState.pickerColor,
      };
    return { colors: 'loading' };
  };
  const [state, dispatch] = useReducer(colorReducer, initialState, savedState);

  return (
    <ColorThemeContext.Provider
      value={{
        state,
        dispatch,
        activateColorPalette,
        setShowDimMode,
        setShowCustomPalette,
        setShowColorSubMenu,
        setShowColorPicker,
        setPickerColor,
        changeCustomColor,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

export const useColorThemeContext = () => useContext(ColorThemeContext);

const query = graphql`
  query colors {
    strapiTheme {
      normalMode {
        background
        red
        black
        foreground
        darkBlue
        mediumBlue
        darkGrey
        grey
        lightGrey
      }
      darkPalette {
        background
        black
        darkGrey
        darkBlue
        foreground
        grey
        lightGrey
        mediumBlue
        red
      }
    }
  }
`;
