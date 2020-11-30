import React from 'react';
import PropTypes from 'prop-types';

import { Shape, HeadingWrapper, Title } from './section-heading.styles';

const Heading = ({ background, children, left }) => (
  <Shape {...background} align={left}>
    <HeadingWrapper align={left}>
      <Title>{children}</Title>
    </HeadingWrapper>
  </Shape>
);

Heading.propTypes = {
  children: PropTypes.string,
  left: PropTypes.bool,
  background: PropTypes.shape({
    height: PropTypes.string,
    top: PropTypes.string,
    color: PropTypes.string,
  }),
};

export default Heading;
