import React from "react";

import { CommentContainer, MarksWrapper, Text } from "./comment.styles";

import Marks from "../../assets/marks.svg";

const Comment = ({ left, top, children }) => (
  <CommentContainer align={top}>
    <MarksWrapper>
      <Marks />
    </MarksWrapper>
    <Text align={left}>{children}</Text>
  </CommentContainer>
);

export default Comment;
