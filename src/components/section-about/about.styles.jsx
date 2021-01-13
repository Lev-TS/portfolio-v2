import styled from 'styled-components';

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
  margin-top: 256px;
  margin-bottom: 84px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Avatar = styled.div`
  position: absolute;
  right: 60px;
  top: -50px;
  z-index: 1;
  width: 200px;

  @media screen and (max-width: 800px) {
    top: -75px;
    left: 0;
    right: 0;
    margin: auto;
    width: 150px;
  }
`;

export const CardContent = styled.div`
  padding: 52px 20px 52px 91px;
  max-width: 471px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 800px) {
    padding: 100px 20px 60px 20px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
  }

  &::before {
    @media screen and (max-width: 1124px) {
      content: 'About Me';
      display: block;
      margin-bottom: 20px;
      font-family: ${(props) => props.theme.fonts.landingPageSectionHeading};
      font-size: 24px;
      line-height: 20px;
      color: ${(props) => props.theme.colors.mediumBlue};
    }
  }
`;
