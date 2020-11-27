import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  text-align: ${props => (props.align ? "right" : "left")};
  padding-bottom: 20px;
  margin-right: ${props => (props.align ? "20px" : "0")};
  margin-left: ${props => (!props.align ? "20px" : "0")};
  display: flex;
  justify-content: ${props => (props.align ? "flex-end" : "flex-start")};

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MarksWrapper = styled.div`
  position: absolute;
  padding: 0 170px;
  top: -40px;
`;

export const Text = styled.p`
  text-align: inherit;
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  max-width: 245px;
`;
