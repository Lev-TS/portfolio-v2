import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: ${(props) => (props.featured ? '780px' : '600px')};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 30px 3px rgba(0, 0, 0, 0.5);
`;
