import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Section = styled.div`
  position: relative;

  padding: 0 40px;
  overflow-x: hidden;
  min-height: 100vh;

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

export const PhotoWrapper = styled.div`
  position: absolute;
  right: 60px;
  top: -50px;
  z-index: 1;

  @media screen and (max-width: 800px) {
    right: 20px;
  }

  @media screen and (max-width: 640px) {
    top: -100px;
    left: 0;
    right: 0;
    text-align: center;

    #portrait {
      width: 150px;
    }
  }
`;

export const CardContent = styled.p`
  padding: 52px 20px 52px 91px;
  max-width: 471px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 800px) {
    padding: 50px;
    max-width: 391px;
  }

  @media screen and (max-width: 640px) {
    padding: 100px 20px 60px 20px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
  }

  &::before {
    @media screen and (max-width: 1024px) {
      content: "About Me";
      display: block;
      margin-bottom: 20px;
      font-size: 24px;
      line-height: 20px;
      color: ${colors.mediumBlue};
    }
  }
`;
