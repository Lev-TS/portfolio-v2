import styled from 'styled-components';

export const Shape = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  transform: skewY(-5deg);
  padding: 0 40px;
  display: flex;

  ${(props) => `
      top: ${props.top};
      height: ${props.height};
      background: ${props.color};
      align-items: ${!props.align && 'flex-end'}
  `}
`;

export const HeadingWrapper = styled.div`
  width: 1180px;
  margin: 0 auto;
  padding-bottom: 5px;
  position: relative;

  ${(props) => props.align && `top: -46px; text-align: right;`}

  @media screen and (max-width: 1124px) {
    display: ${(props) => (props.show ? 'block' : 'none')};
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.landingPageSectionHeading};
  font-style: italic;
  line-height: 40px;
  color: ${(props) => props.theme.colors.black};
`;
