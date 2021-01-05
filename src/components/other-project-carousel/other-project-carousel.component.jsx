import React from 'react';

import { CarouselContainer, StyledCarousel, StyledImg } from './other-project-carousel.styles';

export default function OtherProjectCarousel({ images, className }) {
  const hasSeveralImgs = images.length > 1;

  return (
    <CarouselContainer className={className}>
      <StyledCarousel
        showThumbs={false}
        showStatus={false}
        showArrows={hasSeveralImgs}
        showIndicators={hasSeveralImgs}
        swipeable={hasSeveralImgs}
        emulateTouch={hasSeveralImgs}
        dynamicHeight={hasSeveralImgs}
      >
        {images.map(({ image }) => (
          <StyledImg key={image.id} fluid={image.childImageSharp.fluid} alt={image.altText} />
        ))}
      </StyledCarousel>
    </CarouselContainer>
  );
}
