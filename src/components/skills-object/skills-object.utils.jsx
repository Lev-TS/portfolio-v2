import React from 'react';
import FrontendIcon from '../../assets/skills/frontend.inline.svg';
import TestingIcon from '../../assets/skills/testing.inline.svg';
import DesignIcon from '../../assets/skills/design.inline.svg';
import BackendIcon from '../../assets/skills/backend.inline.svg';
import MiscIcon from '../../assets/skills/misc.inline.svg';

const Icons = class {
  constructor(frontend, testing, design, backend, misc) {
    this.frontend = frontend;
    this.testing = testing;
    this.design = design;
    this.backend = backend;
    this.misc = misc;
  }

  getIcon(category) {
    return this[category];
  }
};

export default new Icons(
  <FrontendIcon />,
  <TestingIcon />,
  <DesignIcon />,
  <BackendIcon />,
  <MiscIcon />
);
