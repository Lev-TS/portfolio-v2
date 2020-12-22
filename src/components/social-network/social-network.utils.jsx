import React from 'react';

import FacebookIcon from '../../assets/hero/facebook-icon.inline.svg';
import LinkedinIcon from '../../assets/hero/linkedin-icon.inline.svg';
import TwitterIcon from '../../assets/hero/twitter-icon.inline.svg';
import GithubIcon from '../../assets/hero/github-icon.inline.svg';

const Icons = class {
  constructor(facebook, linkedin, twitter, github) {
    this.facebook = facebook;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.github = github;
  }

  getIcon(networkName) {
    return this[networkName];
  }
};

export default new Icons(
  <FacebookIcon className="social-icon" />,
  <LinkedinIcon className="social-icon" />,
  <TwitterIcon className="social-icon" />,
  <GithubIcon className="social-icon" />
);
