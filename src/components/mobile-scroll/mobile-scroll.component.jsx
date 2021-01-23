import React, { useState, useEffect } from 'react';

import ScrollIcon from './mobile-scroll.styles';

export default function MobileScroll({ className }) {
  const [showMobileScroll, setShowMobileScroll] = useState(true);

  const handleScroll = () => {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      if (window.scrollY > 368 && showMobileScroll) setShowMobileScroll(false);
      if (window.scrollY === 0 && !showMobileScroll) setShowMobileScroll(true);
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMobileScroll]);

  return <ScrollIcon className={className} show={showMobileScroll} />;
}
