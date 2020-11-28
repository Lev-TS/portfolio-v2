import styled from "styled-components";
import { colors } from "../../styles/colors";

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
  margin-top: 233px;
  margin-bottom: 92px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
  }
`;

export const CardContent = styled.div`
  padding: 58px 37px 87px 37px;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  height: 549px;

  @media screen and (max-width: 800px) {
    min-height: 1100px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 640px) {
  }

  &::before {
    @media screen and (max-width: 1124px) {
      content: "{...skills}";
      font-size: 40px;
      line-height: 40px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      top: -50px;
      color: ${colors.black};
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

//imported component styles
export const buttonStyles = {
  title: "certificates",
  width: "155px",
};

export const backgroundStyles = {
  height: "1000px",
  top: "550px",
  color: colors.mediumBlue,
};
