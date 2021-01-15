import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ImageTagSelector from '../image-tag-selector/image-tag-selector.components';

import { CarouselContainer } from './other-project-carousel.styles';

export default function OtherProjectCarousel({ images, className, featured }) {
  const hasSeveralImgs = images.length > 1;
  const themeContext = useContext(ThemeContext);
  const imageConfig = {
    maxHeight: featured ? '438px' : '337.5px',
    backgroundColor: themeContext.colors.mediumBlue,
  };

  return (
    <CarouselContainer className={className} featured={featured}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={hasSeveralImgs}
        showIndicators={hasSeveralImgs}
        swipeable={hasSeveralImgs}
        emulateTouch={hasSeveralImgs}
        autoPlay={featured}
        infiniteLoop={featured}
        stopOnHover={featured}
        useKeyboardArrows={featured}
      >
        {images.map(({ image }) => (
          <ImageTagSelector key={image.id} source={image} styles={imageConfig} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
