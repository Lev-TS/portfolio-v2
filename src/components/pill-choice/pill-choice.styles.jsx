import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  font-family: inherit;
  width: 59px;
  background-color: transparent;
  color: ${(props) => (props.red ? colors.red : colors.mediumBlue)};
  border: 1px solid ${(props) => (props.red ? colors.red : colors.mediumBlue)};
  margin-left: 10px;
  font-size: 16px;
  line-height: 16px;
  padding: 6px;
  border-radius: 80px;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.red ? colors.red : colors.mediumBlue)};
    color: ${colors.black};
    font-weight: bold;
    cursor: pointer;
  }
`;
