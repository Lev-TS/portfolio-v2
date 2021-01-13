import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ImageTagSelector from '../image-tag-selector/image-tag-selector.components';

import { CarouselContainer } from './other-project-carousel.styles';

export default function OtherProjectCarousel({ images, className }) {
  const hasSeveralImgs = images.length > 1;
  const themeContext = useContext(ThemeContext);

  return (
    <CarouselContainer className={className}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={hasSeveralImgs}
        showIndicators={hasSeveralImgs}
        swipeable={hasSeveralImgs}
        emulateTouch={hasSeveralImgs}
      >
        {images.map(({ image }) => (
          <ImageTagSelector
            key={image.id}
            source={image}
            styles={{ maxHeight: '337.5px', backgroundColor: themeContext.colors.mediumBlue }}
          />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
