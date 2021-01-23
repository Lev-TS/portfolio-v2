import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  overflow: hidden;
  padding: 0 40px;
  user-select: none; /* Standard */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Greeting = styled.div`
  font-family: ${(props) => props.theme.fonts.heroGreeting};
  font-style: normal;
  font-weight: bold;
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

export const Intro = styled.div`
  font-family: ${(props) => props.theme.fonts.heroIntro};
  font-style: italic;
  font-weight: bolder;
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
    color: ${(props) => props.theme.colors.background};
  }
`;
