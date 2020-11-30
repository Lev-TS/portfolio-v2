import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  color: ${colors.mediumBlue};
  font-size: 20px;
  line-height: 24px;
  position: relative;
  margin-left: 35px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    padding: 10px 0;
    border-bottom: 1px solid #4c4a57;

    &:first-child {
      border-top: 1px solid #4c4a57;
    }
  }

  @media screen and (max-width: 414px) {
    border: 0;

    &:first-child {
      border-top: none;
    }
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: -35px;
  top: -3px;

  @media screen and (max-width: 800px) {
    width: 6vw;
    heigh: 6vw;
    left: initial;
    top: 10px;
    right: 0;
  }

  @media screen and (max-width: 414px) {
    width: initial;
    heigh: initial;
  }
`;

export const List = styled.ul`
  color: ${colors.foreground};
  margin-left: 3px;
  padding-left: 20px;
  border-left: 1px solid ${colors.red};
  font-size: 12px;
  line-height: 16px;
  list-style: none;

  @media screen and (max-width: 800px) {
    padding-left: 10px;
  }
`;
