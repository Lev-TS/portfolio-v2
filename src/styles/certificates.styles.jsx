import styled from 'styled-components';
import { colors } from './colors';

export const Section = styled.div`
  padding: 0 40px;
  background: ${colors.mediumBlue};

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const LargeImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 50px;
  padding-bottom: 50px;
  padding-top: 150px;

  div {
    -webkit-box-shadow: 0px 0px 10px 3px ${colors.grey};
    box-shadow: 0px 0px 10px 3px ${colors.grey};
  }
`;

export const SmallImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 20px;
  padding-bottom: 150px;

  div {
    -webkit-box-shadow: 0px 0px 10px 2px ${colors.grey};
    box-shadow: 0px 0px 10px 3px ${colors.grey};
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;
