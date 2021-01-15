import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { CardContent, ButtonContainer, StyledButton, StyledAnchor } from './card.styles';

export default function Card({ children, buttonStyles, buttonLink, setDownload }) {
  const handleClick = async () => {
    if (buttonLink) navigate(buttonLink);
    sessionStorage.setItem('scrollPosition', window.scrollY);
  };

  return (
    <CardContent>
      {children}
      {buttonStyles ? (
        <ButtonContainer {...buttonStyles}>
          <div />
          {setDownload ? (
            <StyledAnchor href={setDownload.publicURL} target="_blank" rel="noreferrer noopener">
              {buttonStyles.title}
            </StyledAnchor>
          ) : (
            <StyledButton type="button" onClick={handleClick}>
              {buttonStyles.title}
            </StyledButton>
          )}
        </ButtonContainer>
      ) : null}
    </CardContent>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  buttonStyles: PropTypes.exact({
    title: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }),
  buttonLink: PropTypes.string,
  setDownload: PropTypes.exact({
    publicURL: PropTypes.string,
  }),
};
