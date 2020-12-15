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
  margin-top: 166px;
  margin-bottom: 101px;
  margin-left: auto;
  max-width: 779px;
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  &::before {
    @media screen and (max-width: 1124px) {
      content: '{...codes}';
      font-size: 40px;
      line-height: 40px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      top: -50px;
      left: 20px;
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

export const CardContent = styled.div`
  padding-right: 20px;
  min-height: 269px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 10px;
`;

export const Title = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-style: italic;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.mediumBlue};
`;

export const Excerpt = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 75%;
  text-align: right;
  padding: 60px 0;

  @media screen and (max-width: 414px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

// imported component styles
export const buttonStyles = {
  title: 'more',
  width: '70px',
};

export const backgroundStyles = {
  height: '700px',
  top: '-400px',
  color: colors.mediumBlue,
};
