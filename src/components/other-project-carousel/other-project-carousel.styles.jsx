import styled from 'styled-components';
import Img from 'gatsby-image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { colors } from '../../styles/colors';

export const CarouselContainer = styled.div`
  width: calc(150px + 20%);
  background-color: ${colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCarousel = styled(Carousel)`
  width: 85%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.5);
`;

export const StyledImg = styled(Img)`
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
`;
