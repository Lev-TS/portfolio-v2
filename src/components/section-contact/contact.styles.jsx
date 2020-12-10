import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.div`
  position: relative;
  padding: 0 40px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const SectionContent = styled.div`
  position: relative;
  margin-top: 233px;
  margin-bottom: 266px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const CardContent = styled.div`
  padding: 20px;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  min-height: 550px;

  &::before {
    @media screen and (max-width: 1124px) {
      content: 'contact(me)';
      font-size: 40px;
      line-height: 40px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      top: -50px;
      color: ${colors.black};
    }

    @media screen and (max-width: 800px) {
      font-style: initial;
      left: 0;
      right: 0;
      top: -80px;
      text-align: center;
    }
  }
`;

export const BashCommand = styled.p`
  color: ${colors.background};
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: 414px) {
    font-size: 16px;
    ine-height: 20px;
  }

  span {
    color: ${colors.mediumBlue};
  }
`;

// imported component styles

export const backgroundStyles = {
  height: '1000px',
  top: '550px',
  color: colors.red,
};
