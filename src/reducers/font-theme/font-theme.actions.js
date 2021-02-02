import FontActionTypes from './font-theme.types';

export const selectFont = (fontName) => ({
  type: FontActionTypes.SELECT_FONT,
  payload: fontName,
});
