import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import { CardContent, ButtonContainer, StyledButton, StyledAnchor } from './card.styles';
import { ThemeContext } from '../../providers/default-theme.provider';

export default function Card({
  children,
  buttonStyles,
  buttonLink,
  setDownload,
  doNotSaveScrollY,
}) {
  const { fontName } = useContext(ThemeContext);

  const handleClick = async () => {
    if (typeof window !== 'undefined' || typeof sessionStorage !== 'undefined') {
      if (buttonLink) {
        navigate(buttonLink);
        sessionStorage.setItem('fontName', fontName);
      }
      // retain scroll position if users navigates to projects from a featured project page
      if (!doNotSaveScrollY) sessionStorage.setItem('scrollPosition', window.scrollY);
    }
    return null;
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
