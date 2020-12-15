import React, { createContext, useState, useEffect } from 'react';

export const WindowContext = createContext({
  isMobile: false,
  showCertificates: false,
  scrollPosition: '',
  toggleCertificates: () => {},
});

const WindowProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [scrollPosition, setScrollPosition] = useState();

  // TODO: move certification context away from provider and create a ceparate context;
  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
    setScrollPosition(window.pageYOffset);
  };

  const handleResize = () => {
    if (window.innerWidth > 800 && isMobile) setIsMobile(false);
    if (window.innerWidth <= 800 && !isMobile) setIsMobile(true);
  };

  // without calling handleResize in the dependency array, the app won't determine what's the window size upon first mount.
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize(), isMobile]);

  return (
    <WindowContext.Provider
      value={{ isMobile, showCertificates, scrollPosition, toggleCertificates }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
