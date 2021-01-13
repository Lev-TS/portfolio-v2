import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
  top: -16px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey};
`;

export const Container = styled.div`
  position: relative;

  &.stretch {
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 800px) {
    grid-column: 1 / 3;
  }
`;

export const StyledInput = styled.input`
  background: none;
  color: ${(props) => props.theme.colors.foreground};
  font-size: 16px;
  line-height: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.mediumBlue};

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const StyledTextArea = styled.textarea`
  background: none;
  color: ${(props) => props.theme.colors.foreground};
  font-size: 16px;
  line-height: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.mediumBlue};
  width: 100%;
  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.grey};
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 13px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
