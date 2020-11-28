import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;

  ${props =>
    props.align
      ? `
        text-align: right; 
        margin-right: 20px;
        justify-content: flex-end;
      `
      : `margin-left: 20px;`}

  @media screen and (max-width: 1124px) {
    display: none;
  }
`;

export const Marks = styled.img`
  position: absolute;
  padding: 0 170px;
  top: -40px;
  ${props => !props.align && `transform: rotate(180deg);`}
`;

export const Text = styled.p`
  text-align: inherit;
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  max-width: 245px;
`;
