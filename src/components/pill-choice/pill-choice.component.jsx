import React, { useContext } from 'react';

import { ContactContext } from '../../providers/contact.provider';

import { Container, Button } from './pill-choice.styles';

const PillChoice = () => {
  const { toggleYesForm, toggleNoForm } = useContext(ContactContext);

  return (
    <Container>
      <span>Connect?</span>
      <Button red type="button" onClick={() => toggleYesForm()}>
        yes
      </Button>
      <Button type="button" onClick={() => toggleNoForm()}>
        no
      </Button>
    </Container>
  );
};

export default PillChoice;
