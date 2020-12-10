import React, { useContext } from 'react';

import { Container, Form, Outcome } from './no-form.styles';

import { ContactContext } from '../../providers/contact.provider';

import FormInput from '../form-input/form-input.component';
import FormButtons from '../form-buttons/form-buttons.component';
import Spinner from '../Spinner/spinner.component';

const NoForm = () => {
  const {
    noFormHidden,
    message,
    serverFailed,
    alert,
    toggleNoForm,
    handleChange,
    handleSubmit,
    resetContactForm,
  } = useContext(ContactContext);

  const handleCancel = () => {
    toggleNoForm();
    resetContactForm();
  };

  return (
    <Container style={{ display: `${noFormHidden ? 'none' : 'block'}` }}>
      <p>
        If you missed something, please check back later, I might already know it. <br /> <br />
        Besides, please write me what skills are you after. This will help me a lot to grow the
        right way.
      </p>
      <Form onSubmit={handleSubmit}>
        <FormInput
          name="message"
          value={message}
          onChange={handleChange}
          label="Enter your message"
          rows="5"
          textarea
          required
        />
        <Spinner>
          <Outcome error={serverFailed}>{alert}</Outcome>
        </Spinner>
        <FormButtons handleCancel={handleCancel} />
      </Form>
    </Container>
  );
};

export default NoForm;
