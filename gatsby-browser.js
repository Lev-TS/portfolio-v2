require('react-responsive-carousel/lib/styles/carousel.min.css');
require('semantic-ui-css/semantic.min.css');

const React = require('react');
const FontThemeProvider = require('./src/providers/font-theme.provider').default;
const ColorThemeProvider = require('./src/providers/color-theme.provider').default;

exports.wrapPageElement = ({ element }) => {
  console.log('Template designed & coded by Levan Tsutskiridze (www.lts.codes)');
  return (
    <ColorThemeProvider>
      <FontThemeProvider>{element}</FontThemeProvider>
    </ColorThemeProvider>
  );
};
