// TODO: update if fonts change
const boxDimensionsByFont = {
  'Courier Prime': {
    width: 162,
    height: 30,
  },
  'Fugaz One': {
    width: 149,
    height: 30,
  },

  Lato: {
    width: 124,
    height: 30,
  },
};

export const getTranslateValue = (font) =>
  (boxDimensionsByFont[font].width - boxDimensionsByFont[font].height) / 2;
