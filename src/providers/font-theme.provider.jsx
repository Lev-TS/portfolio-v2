import React, { createContext, useReducer, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import fontReducer from '../reducers/font-theme/font-theme.reducer';
import { selectFont } from '../reducers/font-theme/font-theme.actions';

const FontContext = createContext();

const parseStorage = (storage, key, initialState) => {
  const savedValue = storage.getItem(key) !== null && JSON.parse(storage.getItem(key));
  if (savedValue) return JSON.parse(storage.getItem(key));
  return initialState[key];
};

export default function FontProvider({ children }) {
  const { strapiTheme } = useStaticQuery(query);
  const initialState = { fontName: strapiTheme.defaultFonts };
  const savedState = () => {
    if (typeof sessionStorage !== `undefined`)
      return { fontName: sessionStorage.getItem('fontName') || initialState.fontName };
    return { fontName: 'loading' };
  };
  const [state, dispatch] = useReducer(fontReducer, initialState, savedState);
  return (
    <FontContext.Provider value={{ state, dispatch, selectFont }}>{children}</FontContext.Provider>
  );
}

export const useFontThemeContext = () => useContext(FontContext);

const query = graphql`
  query fontTheme {
    strapiTheme {
      defaultFonts
    }
  }
`;
