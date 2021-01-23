import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 0 40px;
  overflow: hidden;
  font-family: ${(props) => props.theme.fonts.contactTerminal};

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

export const BashCommand = styled.p`
  color: ${(props) => props.theme.colors.background};
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: 414px) {
    font-size: 16px;
    ine-height: 20px;
  }

  span {
    color: ${(props) => props.theme.colors.mediumBlue};
  }
`;
