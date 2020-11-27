import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Section = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;

  border: 1px solid blue;

`;

export const PhotoWrapper = styled.div`
  position: absolute;
  right: 50px;
`;

export const CardWrapper = styled.div`
  flex-basis: 800px;
  margin-top: 50px;

  border: 1px solid green;
`;

export const Card = styled.div`
  padding: 52px 60px 52px 91px;
  background-color: ${colors.black};
  color: ${colors.foreground};

  @media screen and (max-width: 800px) {
    padding: 100px 20px 20px 20px;
  }
`;

export const Bio = styled.p`

  max-width: 360px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CustomButton = styled.div`

  div {
  }

  span {
  }
`;

// export const CommentContainer = styled.div`
//   /* position: relative; */

//   border: px solid blue;
// `;

// export const MarksWrapper = styled.div`
//   /* position: absolute;
//   top: 38vh;
//   left: -200px; */
// `;

// export const Comment = styled.p`
//   /* position: absolute;
//   top: 40vh;
//   left: -265px;

//   width: 245px;
//   text-align: right;
//   font-style: italic;
//   font-weight: normal;
//   font-size: 12px;
//   line-height: 16px;
//   margin-right: 20px; */
// `;

// export const Card = styled.div`
//   /* max-width: 779px;
//   min-height: 511px;
//   padding: 52px 60px 51px 91px;
//   background-color: ${colors.black};
//   position: relative;
//   top: 100px;

//   display: flex;
//   align-items: flex-end;
//   justify-content: space-between; */

//   border: 1px solid blue;

//   max-width: 800px;
//   padding: 52px 60px 52px 91px;
//   position: relative;
//   float: right;
// `;

// export const PhotoWrapper = styled.div`
//   /* align-self: flex-start;
//   position: relative;
//   top: -100px;
//   left: 70px; */

//   position: absolute;
// `;

// export const Bio = styled.p`
//   /* width: 359px;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
//   color: ${colors.foreground};
//   align-self: center; */
// `;

// export const CustomButton = styled.div`
//   /* position: relative;

//   div {
//     width: 14px;
//     border-bottom: 2px solid ${colors.red};
//     position: absolute;
//     left: -18px;
//     top: 13.5px;
//   }

//   span {
//     font-family: Courier Prime;
//     font-style: italic;
//     font-weight: normal;
//     font-size: 20px;
//     line-height: 24px;
//     text-align: right;
//     color: ${colors.white};
//     font-style: italic;
//   }

//   &:hover {
//     cursor: pointer;
//     z-index: 1;

//     div {
//       width: 90px;
//       z-index: -1;
//       transition: width 300ms;
//     }
//   } */
// `;
