import React, { useContext, useState } from 'react';

import { Container, Form, ButtonContainer, Outcome } from './yes-form.styles';

import { ContactContext } from '../../providers/contact.provider';

import Timer from '../timer/timer.component';
import FormInput from '../form-input/form-input.component';

const YesForm = () => {
  const { yesFormHidden, toggleYesForm } = useContext(ContactContext);
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [outcome, setOutcome] = useState({
    msg: '',
    failed: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://www.lts.codes/api/contact/send', {
      method: 'POST',
      body: JSON.stringify({ name: username, email, message }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) setOutcome({ msg: 'Message sent' });
      if (response.status === 500)
        setOutcome({
          msg: 'Server is down: try later or write me at lev.tsu@gmail.com',
          failed: true,
        });
      setName('');
      setEmail('');
      setMessage('');
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
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
          <Outcome error={outcome.failed}>{outcome.msg}</Outcome>
          <ButtonContainer>
            <button type="submit">Send</button>
            <button
              type="button"
              onClick={() => {
                toggleYesForm();
                setOutcome({ msg: '', failed: false });
              }}
            >
              Cancel
            </button>
          </ButtonContainer>
        </Form>
      </Timer>
    </Container>
  );
};

export default React.memo(YesForm);
