import FontActionTypes from './fonts.types';

const fontReducer = (state, action) => {
  switch (action.type) {
    case FontActionTypes.SELECT_FONT: {
      sessionStorage.setItem('fontName', action.payload);
      return { ...state, fontName: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default fontReducer;
