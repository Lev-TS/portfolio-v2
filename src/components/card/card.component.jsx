import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, navigate } from 'gatsby';

import { CardContent, ButtonContainer, StyledButton, StyledAnchor } from './card.styles';

const Card = ({ children, buttonStyles, buttonLink, setDownload }) => {
  let data;

  if (setDownload) {
    data = useStaticQuery(graphql`
      query Data {
        file(base: { eq: "my-resume.pdf" }) {
          publicURL
        }
      }
    `);
  }

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
            <StyledAnchor href={data.file.publicURL} target="_blank" rel="noreferrer noopener">
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
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
  buttonStyles: PropTypes.exact({
    title: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    width: PropTypes.string,
  }),
  buttonLink: PropTypes.string,
  setDownload: PropTypes.bool,
};

export default Card;
