import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  padding: 0 40px;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Greeting = styled.p`
  font-family: 'Recursive', cursive;
  font-size: 40vh;
  line-height: 40vh;
  position: relative;
  top: 30vh;
  left: -3vh;

  @media screen and (max-width: 800px) {
    left: 0;
    font-size: calc(100px + 40vw);
    text-align: center;
  }
`;

export const Intro = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  position: relative;
  top: 40vh;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 20px;
  }

  span {
    color: ${colors.white};
  }
`;

// imported component styles
export const backgroundStyles = {
  height: '900px',
  top: '50vh',
  color: colors.red,
};
