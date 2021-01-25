import FontActionTypes from './fonts.types';

export const selectFont = (fontName) => ({
  type: FontActionTypes.SELECT_FONT,
  payload: fontName,
});
