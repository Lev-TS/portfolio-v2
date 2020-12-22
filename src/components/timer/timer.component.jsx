import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { ContactContext } from '../../providers/contact.provider';

const Timer = ({ delay, children }) => {
  const { yesFormHidden } = useContext(ContactContext);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!yesFormHidden) setDisplay('block');
      else setDisplay('none');
    }, delay);
    return () => clearTimeout(timer);
  }, [yesFormHidden]);

  return <div style={{ display }}>{children}</div>;
};

export default Timer;

Timer.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
};
