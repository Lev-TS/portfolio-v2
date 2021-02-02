import React from 'react';
import { Fade } from 'react-awesome-reveal';

import PropTypes from 'prop-types';
import MarksIcon from '../../assets/comment/marks.inline.svg';

import { CommentContainer, MarksWrapper, Text } from './comment.styles';

const Comment = ({ left, children }) => (
  <Fade duration={500} triggerOnce delay={1000}>
    <CommentContainer align={left}>
      <MarksWrapper align={left}>
        <MarksIcon />
      </MarksWrapper>
      <Text dangerouslySetInnerHTML={{ __html: children }} />
    </CommentContainer>
  </Fade>
);

Comment.propTypes = {
  children: PropTypes.node,
  left: PropTypes.bool,
};

export default Comment;
