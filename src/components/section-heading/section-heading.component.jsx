import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import { Shape, HeadingWrapper, Title } from './section-heading.styles';

const Heading = ({ background, children, left }) => (
  <Shape {...background} align={left}>
    <HeadingWrapper align={left}>
      <Title>
        <Fade left={!left} right={left} duration={1000} delay={500} distance="300px">
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
