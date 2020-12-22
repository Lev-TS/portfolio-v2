import React from 'react';
import PropTypes from 'prop-types';

import { Container, StyledInput, StyledTextArea, StyledLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, textarea, ...otherProps }) => (
  <Container className={textarea ? 'stretch' : ''}>
    {textarea ? (
      <StyledTextArea onChange={handleChange} {...otherProps} />
    ) : (
      <StyledInput onChange={handleChange} {...otherProps} />
    )}
    {label ? (
      <StyledLabel className={otherProps.value.length ? 'shrink' : ''}>{label}</StyledLabel>
    ) : null}
  </Container>
);

export default FormInput;

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  textarea: PropTypes.bool,
};
