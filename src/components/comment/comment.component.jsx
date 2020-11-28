import React from "react";

import marksIcon from "./marks.svg";
import { CommentContainer, Marks, Text } from "./comment.styles";

const Comment = ({ left, children }) => (
  <CommentContainer align={left}>
    <Marks src={marksIcon} align={left} />
    <Text>{children}</Text>
  </CommentContainer>
);

export default Comment;
