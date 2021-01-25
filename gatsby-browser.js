require('semantic-ui-css/semantic.min.css');
require('react-responsive-carousel/lib/styles/carousel.min.css');

const React = require('react');
const FontThemeProvider = require('./src/providers/font-theme.provider').default;
const ColorThemeProvider = require('./src/providers/color-theme.provider').default;

exports.wrapRootElement = ({ element }) => {
  return (
    <ColorThemeProvider>
      <FontThemeProvider>{element}</FontThemeProvider>
    </ColorThemeProvider>
  );
};
