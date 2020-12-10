import React from 'react';

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
