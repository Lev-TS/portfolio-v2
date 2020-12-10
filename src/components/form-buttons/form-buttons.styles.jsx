import styled from 'styled-components';

import { colors } from '../../styles/colors';

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 800px) {
    grid-column: 1 / 3;
  }

  button {
    padding: 12px;
    font-family: Courier Prime;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    background-color: ${colors.mediumBlue};
    border: 1px solid ${colors.mediumBlue};
    border-radius: 3px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${colors.black};
      color: ${colors.mediumBlue};
    }

    &:last-child {
      background-color: transparent;
      border: 1px solid ${colors.foreground};
      color: ${colors.foreground};

      &:hover {
        background-color: ${colors.foreground};
        color: ${colors.black};
      }
    }
  }
`;

export default ButtonContainer;
