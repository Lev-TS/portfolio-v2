import React, { createContext, useState } from 'react';

export const ContactContext = createContext({
  yesFormHidden: true,
  noFormHidden: true,
  username: '',
  email: '',
  message: '',
  serverFailed: '',
  alert: '',
  isLoading: false,
  toggleYesForm: () => {},
  toggleNoForm: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
  resetContactForm: () => {},
});

const ContactProvider = ({ children }) => {
  const [yesFormHidden, setYesFormHidden] = useState(true);
  const [noFormHidden, setNoFormHidden] = useState(true);
  const [username, setName] = useState('n/a');
  const [email, setEmail] = useState('n/a');
  const [message, setMessage] = useState('n/a');
  const [serverFailed, setServerFailed] = useState(false);
  const [alert, setAlert] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch('/.netlify/functions/contact', {
      method: 'POST',
      body: JSON.stringify({ name: username, email, message }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        setServerFailed(false);
        setAlert('Message sent, thank you!');
      } else {
        setServerFailed(true);
        setAlert('Message not sent, please contact me at lev.tsu@gmail.com');
      }
      setIsLoading(false);
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

  const resetContactForm = () => {
    setServerFailed(false);
    setIsLoading(false);
    setAlert('');
    setName('');
    setEmail('');
    setMessage('');
  };

  const toggleYesForm = () => {
    setYesFormHidden(!yesFormHidden);
    if (!noFormHidden) setNoFormHidden(true);
    resetContactForm();
  };

  const toggleNoForm = () => {
    setNoFormHidden(!noFormHidden);
    if (!yesFormHidden) setYesFormHidden(true);
    resetContactForm();
  };

  return (
    <ContactContext.Provider
      value={{
        yesFormHidden,
        noFormHidden,
        username,
        email,
        message,
        serverFailed,
        alert,
        isLoading,
        toggleYesForm,
        toggleNoForm,
        handleChange,
        handleSubmit,
        resetContactForm,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
