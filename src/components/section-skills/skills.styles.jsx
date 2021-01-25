import styled from 'styled-components';

export const Section = styled.div`
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

export const SectionContent = styled.div`
  position: relative;
  margin-top: 233px;
  margin-bottom: 92px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const CardContent = styled.div`
  padding: 58px 58px 87px 18px;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  height: ${(props) => (props.height ? props.height : 500)}px;

  @media screen and (max-width: 800px) {
    height: initial;
    flex-wrap: nowrap;
    padding: 8vw 8vw 77px;
  }

  &::before {
    @media screen and (max-width: 1124px) {
      content: '_skills';
      font-family: ${(props) => props.theme.fonts.landingPageSectionHeading};
      font-size: 40px;
      line-height: 40px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      top: -50px;
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
