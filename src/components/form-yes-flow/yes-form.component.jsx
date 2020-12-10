import React, { useContext } from 'react';

import { Container, Form, Outcome } from './yes-form.styles';

import { ContactContext } from '../../providers/contact.provider';

import Timer from '../timer/timer.component';
import FormInput from '../form-input/form-input.component';
import FormButtons from '../form-buttons/form-buttons.component';
import Spinner from '../Spinner/spinner.component';

const YesForm = () => {
  const {
    yesFormHidden,
    username,
    email,
    message,
    serverFailed,
    alert,
    toggleYesForm,
    handleChange,
    handleSubmit,
    resetContactForm,
  } = useContext(ContactContext);

  const handleCancel = () => {
    toggleYesForm();
    resetContactForm();
  };

  const time = yesFormHidden ? 0 : 1000;

  return (
    <Container>
      <Timer delay={0}># Initializing connection...</Timer>
      <Timer delay={time}># Establishing network...</Timer>
      <Timer delay={time * 2}># Rendering contact form...</Timer>
      <Timer delay={time * 3}>
        <Form onSubmit={handleSubmit}>
          <FormInput
            name="username"
            value={username}
            type="text"
            onChange={handleChange}
            label="Enter your name"
            required
          />
          <FormInput
            name="email"
            value={email}
            type="email"
            onChange={handleChange}
            label="Enter your email"
            required
          />
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
      </Timer>
    </Container>
  );
};

export default YesForm;
