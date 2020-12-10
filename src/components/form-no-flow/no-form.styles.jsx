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
  color: ${(props) => (props.error ? colors.red : 'green')};
  padding: 0 10px;
  place-self: center;
  text-align: center;

  @media screen and (max-width: 800px) {
    grid-column: 1 / 3;
    display: ${(props) => (props.children.length ? 'block' : 'none')};
  }
`;
