import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

const common = css`
  height: 100%;
  width: 100%;
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
`;

export const GatsbyImage = styled(Img)`
  ${common}
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
`;

export const NonGatsbyImage = styled.div`
  background-image: url(${(props) => props.url});
  background-color: ${(props) => props.backgroundColor};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  height: 100%;
  width: 100%;
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
`;
