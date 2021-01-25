import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';

import { Shape, HeadingWrapper, Title } from './section-heading.styles';

const Heading = ({ background, children, left }) => (
  <Shape {...background} align={left}>
    <HeadingWrapper align={left}>
      <Title>
        <Fade direction={left ? 'right' : 'left'} duration={1500} triggerOnce>
          {children}
        </Fade>
      </Title>
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
