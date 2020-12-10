import React, { useContext } from 'react';

import { ContactContext } from '../../providers/contact.provider';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = ({ children }) => {
  const { isLoading } = useContext(ContactContext);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    children
  );
};

export default Spinner;
