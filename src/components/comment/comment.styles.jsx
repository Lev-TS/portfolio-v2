import styled from "styled-components";

export const CommentContainer = styled.div`
  flex-basis: 245px;
  max-height: 170px;
  position: relative;
  top: ${props => props.align};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MarksWrapper = styled.div`
  position: absolute;
  top: -50px;
`;

export const Text = styled.p`
  text-align: ${props => (props.align ? "right" : "left")};
  margin-right: ${props => (props.align ? "20px" : "0")};
  margin-left: ${props => (!props.align ? "20px" : "0")};
  font-size: 12px;
  font-style: italic;
  line-height: 16px;
`;
