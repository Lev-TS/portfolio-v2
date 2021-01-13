import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 59px;
  background-color: transparent;
  color: ${(props) => (props.red ? props.theme.colors.red : props.theme.colors.mediumBlue)};
  border: 1px solid
    ${(props) => (props.red ? props.theme.colors.red : props.theme.colors.mediumBlue)};
  margin-left: 10px;
  font-size: 16px;
  line-height: 16px;
  padding: 6px;
  border-radius: 80px;
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.red ? props.theme.colors.red : props.theme.colors.mediumBlue};
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
    cursor: pointer;
  }
`;
