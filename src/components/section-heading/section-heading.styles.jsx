import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Shape = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  transform: skewY(-5deg);
  padding: 0 40px;
  display: flex;

  ${props => `
      top: ${props.top};
      height: ${props.height};
      background: ${props.color};
      align-items: ${!props.align && "flex-end"}
  `}
`;

export const HeadingWrapper = styled.div`
  width: 1180px;
  margin: 0 auto;
  padding-bottom: 5px;
  position: relative;

  ${props => props.align && `top: -46px; text-align: right;`}

  @media screen and (max-width: 1124px) {
    display: none;
  }
`;

export const Title = styled.span`
  font-style: italic;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: ${colors.black};
`;
