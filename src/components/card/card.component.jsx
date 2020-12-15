import React from 'react';
import PropTypes from 'prop-types';

import { CardContent, CustomButton, StyledLink, StyledButton } from './card.styles';

const Card = ({ children, button, isLink, to, handleClick }) => {
  return (
    <CardContent>
      {children}
      {button ? (
        <CustomButton {...button}>
          <div />
          {isLink ? (
            <StyledLink to={to}>{button.title}</StyledLink>
          ) : (
            <StyledButton type="button" onClick={handleClick}>
              {button.title}
            </StyledButton>
          )}
        </CustomButton>
      ) : null}
    </CardContent>
  );
};

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
