import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-top: 20px;
  color: ${colors.mediumBlue};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin: 30px auto;
  width: 90%;
`;

export const Outcome = styled.span`
  content: ${(props) => props.children};
  color: ${(props) => (props.error ? colors.red : colors.mediumBlue)};
  padding: 0 10px;
  place-self: center;
  text-align: center;

  @media screen and (max-width: 800px) {
    grid-column: 1 / 3;
    display: ${(props) => (props.children.length ? 'block' : 'none')};
  }
`;

export const ButtonContainer = styled.div`
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
