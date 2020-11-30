import React from 'react';
import PropTypes from 'prop-types';

import { CardContent, CustomButton } from './card.styles';

const Card = ({ children, button: { title, ...config } }) => (
  <CardContent>
    {children}
    <CustomButton {...config}>
      <div />
      <span>{title}</span>
    </CustomButton>
  </CardContent>
);

Card.propTypes = {
  children: PropTypes.element.isRequired,
  button: PropTypes.exact({
    title: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    width: PropTypes.string,
  }),
};

export default Card;
