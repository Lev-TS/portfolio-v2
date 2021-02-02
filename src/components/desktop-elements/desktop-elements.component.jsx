import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  DesktopScrollWrapper,
  StyledDesktopScroll,
  StyledSocialNetwork,
} from './desktop-elements.styles';

import { getTranslateValue } from './desktop-elements.utils';

export default function DesktopScrollElements() {
  const [showDesktopElements, setShowDesktopElements] = useState(true);
  const { fonts } = useContext(ThemeContext);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const hidePoint = document.getElementById('___gatsby').offsetHeight - window.innerHeight - 5;
      if (showDesktopElements && window.scrollY >= hidePoint) return setShowDesktopElements(false);
      if (!showDesktopElements && window.scrollY < hidePoint) return setShowDesktopElements(true);
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showDesktopElements]);

  return (
    <div>
      <DesktopScrollWrapper>
        <StyledDesktopScroll
          display={showDesktopElements}
          translateXBy={getTranslateValue(fonts.rabbitScroll)}
        />
      </DesktopScrollWrapper>
      <StyledSocialNetwork display={showDesktopElements} />
    </div>
  );
}
