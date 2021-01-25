import styled from 'styled-components';

import ProjectCardList from '../project-card-list/project-card-list.component';

export const Section = styled.section`
  position: relative;
  padding: 0 40px;
  overflow: hidden;

  z-index: 0;
  background: ${(props) => props.theme.colors.background};
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

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const StyledProjectCardList = styled(ProjectCardList)`
  margin-top: 250px;
  margin-bottom: 101px;

  &::before {
    @media screen and (max-width: 1124px) {
      content: '{...codes}';
      font-family: ${(props) => props.theme.fonts.landingPageSectionHeading};
      font-size: 40px;
      line-height: 40px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      top: -50px;
      left: 20px;
      color: ${(props) => props.theme.colors.black};
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
