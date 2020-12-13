import React from 'react';

import { Container, Icon } from './social-network.styles';

import FacebookIcon from '../../assets/hero/facebook-icon.inline.svg';
import LinkedinIcon from '../../assets/hero/linkedin-icon.inline.svg';
import TwitterIcon from '../../assets/hero/twitter-icon.inline.svg';
import GithubIcon from '../../assets/hero/github-icon.inline.svg';

const SocialNetwork = ({ className, isFooter }) => {
  return (
    <Container className={className} isFooter={isFooter}>
      <a href="https://www.facebook.com/levantsu" target="_blank" rel="noreferrer noopener">
        <FacebookIcon className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/levts" target="_blank" rel="noreferrer noopener">
        <LinkedinIcon className="social-icon" />
      </a>
      <a href="https://twitter.com/levts" target="_blank" rel="noreferrer noopener">
        <TwitterIcon className="social-icon" />
      </a>
      <a href="https://github.com/Lev-TS" target="_blank" rel="noreferrer noopener">
        <GithubIcon className="social-icon" />
      </a>
    </Container>
  );
};

export default SocialNetwork;
