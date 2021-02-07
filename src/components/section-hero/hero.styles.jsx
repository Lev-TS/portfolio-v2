import styled from 'styled-components';

export const Section = styled.section`
  background: ${(props) => props.theme.colors.background};
  position: relative;
  z-index: 0;
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

  .greeting-animation {
    position: relative;
    top: 30vh;
    left: -3vh;

    @media screen and (max-width: 800px) {
      left: 0;
      text-align: center;
    }
  }
`;

export const Greeting = styled.div`
  font-family: ${(props) => props.theme.fonts.heroGreeting};
  font-style: normal;
  font-weight: 700;
  font-size: 40vh;
  line-height: 40vh;
  display: flex;

  @media screen and (max-width: 800px) {
    font-size: calc(100px + 40vw);
    line-height: 22vh;
  }

  animation-duration: 500ms;
  animation-name: reveal;

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Intro = styled.p`
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
    top: 40vh;
  }

  span {
    color: ${(props) => props.theme.colors.background};
  }

  animation-duration: 500ms;
  animation-name: reveal;

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
