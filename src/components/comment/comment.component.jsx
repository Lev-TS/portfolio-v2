import React from 'react';
import PropTypes from 'prop-types';

import marksIcon from './marks.svg';
import { CommentContainer, Marks, Text } from './comment.styles';

const Comment = ({ left, children }) => (
  <CommentContainer align={left}>
    <Marks src={marksIcon} align={left} />
    <Text>{children}</Text>
  </CommentContainer>
);

Comment.propTypes = {
  children: PropTypes.node,
  left: PropTypes.bool,
};

export default Comment;
