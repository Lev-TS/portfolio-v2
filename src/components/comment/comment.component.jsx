import React from "react";

import { CommentContainer, MarksWrapper, Text } from "./comment.styles";

import Marks from "../../assets/marks.inline.svg";

const Comment = ({ left, children }) => (
  <CommentContainer align={left}>
    <MarksWrapper>
      <Marks />
    </MarksWrapper>
    <Text>{children}</Text>
  </CommentContainer>
);

export default Comment;
