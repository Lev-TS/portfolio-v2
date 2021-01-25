import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  DesktopScrollWrapper,
  StyledDesktopScroll,
  StyledSocialNetwork,
} from './desktop-elements.styles';

// TODO: once I have selected final fonts update dimensions
import { getTranslateValue } from './desktop-elements.utils';

export default function DesctopElements() {
  const [showDesktopElements, setShowDesktopElements] = useState(true);
  const { fonts } = useContext(ThemeContext);

  // TODO: make this more flexible, e.g. stretch the body full height and determine the scroll bottom.
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 3700 && showDesktopElements) return setShowDesktopElements(false);
      if (!showDesktopElements && window.scrollY < 3700) return setShowDesktopElements(true);
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll(), showDesktopElements]);

  return (
    <>
      <DesktopScrollWrapper>
        <StyledDesktopScroll
          display={showDesktopElements}
          translateXBy={getTranslateValue(fonts.rabbitScroll)}
        />
      </DesktopScrollWrapper>
      <StyledSocialNetwork display={showDesktopElements} />
    </>
  );
}
