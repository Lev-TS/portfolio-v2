import React from 'react';

import { Container, StyledInput, StyledTextArea, StyledLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, textarea, ...props }) => (
  <Container className={textarea ? 'stretch' : ''}>
    {textarea ? (
      <StyledTextArea onChange={handleChange} {...props} />
    ) : (
      <StyledInput onChange={handleChange} {...props} />
    )}
    {label ? (
      <StyledLabel className={props.value.length ? 'shrink' : ''}>{label}</StyledLabel>
    ) : null}
  </Container>
);

export default FormInput;
