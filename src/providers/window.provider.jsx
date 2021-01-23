import React, { createContext, useState, useEffect } from 'react';

export const WindowContext = createContext({
  isMobile: false,
});

const WindowProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth > 800 && isMobile) return setIsMobile(false);
      if (window.innerWidth <= 800 && !isMobile) return setIsMobile(true);
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize(), isMobile]);

  return <WindowContext.Provider value={{ isMobile }}>{children}</WindowContext.Provider>;
};

export default WindowProvider;
