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
  margin-top: 250px;
  margin-bottom: 101px;
  margin-left: auto;
  max-width: 779px;
  display: flex;
  flex-direction: column-reverse;

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

export const Row = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;

  & > div:first-child {
    flex-basis: ${(props) => (props.inverted ? '60%' : '40%')};
    flex-grow: 1;
    margin-left: 20px;

    & :last-child {
      margin-left: 0px;
    }
  }

  & > div:last-child {
    flex-basis: ${(props) => (props.inverted ? '40%' : '60%')};
    flex-grow: 1;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;

    & > div:first-child {
      margin-left: 0;

      & :last-child {
        margin-bottom: 0;
      }
    }

    & > div:last-child {
      margin-bottom: 20px;
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

export const Icon = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

export const Title = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-style: italic;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.mediumBlue};
`;

export const Excerpt = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 90%;
  text-align: right;
  padding: 60px 0;

  @media screen and (max-width: 414px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
