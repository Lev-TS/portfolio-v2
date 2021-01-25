import React from 'react';
import PropTypes from 'prop-types';

import marksIcon from '../../assets/comment/marks.svg';
import { CommentContainer, Marks, Text } from './comment.styles';

// TODO: dangerouslySetInnerHTML
// TODO: make Marks collors dinamic
const Comment = ({ left, children }) => (
  <CommentContainer align={left}>
    <Marks src={marksIcon} align={left} />
    <Text dangerouslySetInnerHTML={{ __html: children }} />
  </CommentContainer>
);

Comment.propTypes = {
  children: PropTypes.node,
  left: PropTypes.bool,
};

export default Comment;
