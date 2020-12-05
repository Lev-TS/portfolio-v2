import React, { createContext, useState } from 'react';

export const ContactContext = createContext({
  yesFormHidden: true,
  noFormHidden: true,
  toggleYesForm: () => {},
  toggleNoForm: () => {},
});

const ContactProvider = ({ children }) => {
  const [yesFormHidden, setYesFormHidden] = useState(true);
  const [noFormHidden, setNoFormHidden] = useState(true);

  const toggleYesForm = () => {
    setYesFormHidden(!yesFormHidden);
    if (!noFormHidden) setNoFormHidden(true);
  };

  const toggleNoForm = () => {
    setNoFormHidden(!noFormHidden);
    if (!yesFormHidden) setYesFormHidden(true);
  };

  return (
    <ContactContext.Provider
      value={{
        yesFormHidden,
        noFormHidden,
        toggleYesForm,
        toggleNoForm,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
