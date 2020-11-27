import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Shape = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  z-index: -1;
  width: 100%;
  height: 600px;
  transform: skewY(-5deg);
  padding: 0 40px;
  background: ${props => colors[props.color]};

  display: flex;
  align-items: flex-end;
`;

export const HeadingWrapper = styled.div`
  width: 1180px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  span {
    font-style: italic;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    color: ${colors.black};
  }
`;
