import React, { createContext, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const ThemeContext = createContext({
  activeColorPalette: {},
  fontName: '',
  strapiTheme: {},
  handleColorChange: () => {},
  handleFontChange: () => {},
});

export default function DefaultThemeProvider({ children }) {
  const { strapiTheme } = useStaticQuery(query);
  const savedFontName =
    typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('fontName') : null;

  const [activeColorPalette, setActiveColorPalette] = useState(strapiTheme.normalMode);
  const [fontName, setFontName] = useState(savedFontName || strapiTheme.defaultFonts);

  const handleColorChange = (value) => setActiveColorPalette(value);
  const handleFontChange = (event, { value }) => setFontName(value);
  return (
    <ThemeContext.Provider
      value={{ activeColorPalette, fontName, strapiTheme, handleColorChange, handleFontChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

const query = graphql`
  query strapiTheme {
    strapiTheme {
      defaultFonts
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
    }
  }
`;
