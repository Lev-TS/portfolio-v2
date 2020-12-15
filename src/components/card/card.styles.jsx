import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../../styles/colors';

export const CardContent = styled.div`
  background-color: ${colors.black};
  color: ${colors.foreground};
  position: relative;
  flex-basis: 779px;
`;

export const CustomButton = styled.div`
  position: absolute;
  right: ${(props) => (props.right ? props.right : '20px')};
  bottom: ${(props) => (props.bottom ? props.bottom : '20px')};

  @media screen and (max-width: 800px) {
    right: 20px;
    bottom: 20px;
  }

  div {
    width: 14px;
    border-bottom: 2px solid ${colors.red};
    position: absolute;
    left: -18px;
    top: 13.5px;
  }

  &:hover {
    cursor: pointer;
    z-index: 1;

    div {
      border-width: 4px;
      width: ${(props) => props.width};
      z-index: -1;
      transition: width 200ms;
    }
  }
`;

const CustomButtonStyles = css`
  font-family: Courier Prime;
  text-decoration: none;
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: ${colors.white};
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  ${CustomButtonStyles}
`;

export const StyledButton = styled.button`
  ${CustomButtonStyles}
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
`;
