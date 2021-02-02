import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 0 40px;
  overflow: hidden;

  z-index: 0;
  background: ${(props) => props.theme.colors.background};

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
  border: 4px solid ${(props) => props.theme.colors.background};
  border-radius: 100%;
  overflow: hidden;
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
  min-height: 450px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1124px) {
    flex-direction: column;
    align-items: flex-start;

    &::before {
      content: 'About Me';
      display: block;
      margin-bottom: 20px;
      font-family: ${(props) => props.theme.fonts.landingPageSectionHeading};
      font-size: 24px;
      line-height: 20px;
      color: ${(props) => props.theme.colors.mediumBlue};
    }
  }

  @media screen and (max-width: 800px) {
    padding: 100px 20px 60px 20px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
  }
`;
