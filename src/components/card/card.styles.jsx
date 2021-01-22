import styled, { css } from 'styled-components';

export const CardContent = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.foreground};
  position: relative;
  flex-basis: 779px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.right ? props.right : '20px')};
  bottom: ${(props) => (props.bottom ? props.bottom : '20px')};

  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    right: 20px;
    bottom: 20px;
  }

  div {
    width: 14px;
    border-bottom: 2px solid ${(props) => props.theme.colors.red};
    position: absolute;
    left: -18px;
    bottom: 3px;
    transition: width 200ms;
  }

  &:hover {
    cursor: pointer;
    z-index: 1;

    div {
      border-width: 4px;
      width: calc(100% + 22px);
      opacity: 0.75;
      z-index: -1;
    }
  }
`;

const CustomButtonStyles = css`
  font-family: ${(props) => props.theme.fonts.landingPageCardButtons};
  text-decoration: none;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  text-align: right;
  color: ${(props) => props.theme.colors.background};
  font-style: italic;
`;

export const StyledAnchor = styled.a`
  ${CustomButtonStyles}

  &:hover {
    color: ${(props) => props.theme.colors.background};
  }
`;

export const StyledButton = styled.button`
  ${CustomButtonStyles}
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
`;
