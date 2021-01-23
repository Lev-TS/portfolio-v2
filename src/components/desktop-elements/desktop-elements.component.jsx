import React, { useState, useEffect, useRef } from 'react';

import {
  DesktopScrollWrapper,
  StyledDesktopScroll,
  StyledSocialNetwork,
} from './desktop-elements.styles';

export default function DesctopElements() {
  const [showDesktopElements, setShowDesktopElements] = useState(true);

  // these vars are to calculate the width of desktop scroll
  // and rotate it so that it appears on the right place
  const element = useRef(null);
  const [desktopScrollDimensions, setDesktopScrollDimensions] = useState({});

  // TODO: make this more flexible, I need to make the body stretch the full height
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 3700 && showDesktopElements) return setShowDesktopElements(false);
      if (!showDesktopElements && window.scrollY < 3700) return setShowDesktopElements(true);
    }
    return null;
  };

  useEffect(() => {
    setDesktopScrollDimensions({
      width: element.current.offsetWidth,
      height: element.current.offsetHeight,
    });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll(), showDesktopElements]);

  return (
    <div>
      <DesktopScrollWrapper ref={element}>
        <StyledDesktopScroll
          display={showDesktopElements}
          translateXBy={(desktopScrollDimensions.width - desktopScrollDimensions.height) / 2}
        />
      </DesktopScrollWrapper>
      <StyledSocialNetwork display={showDesktopElements} />
    </div>
  );
}
