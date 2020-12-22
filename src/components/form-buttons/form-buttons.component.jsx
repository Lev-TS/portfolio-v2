import React from 'react';
import PropTypes from 'prop-types';

import ButtonContainer from './form-buttons.styles';

const FormButtons = ({ handleCancel }) => (
  <ButtonContainer>
    <button type="submit">Send</button>
    <button type="button" onClick={handleCancel}>
      Cancel
    </button>
  </ButtonContainer>
);

export default FormButtons;

FormButtons.propTypes = {
  handleCancel: PropTypes.func,
};
