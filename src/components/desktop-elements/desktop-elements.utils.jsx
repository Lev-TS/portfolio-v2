// TODO: update if rabbitScroll fonts will change
const boxDimensionsByFont = {
  'Courier Prime': {
    width: 83.17,
    height: 30,
  },
};

export const getTranslateValue = (font) =>
  (boxDimensionsByFont[font].width - boxDimensionsByFont[font].height) / 2;
