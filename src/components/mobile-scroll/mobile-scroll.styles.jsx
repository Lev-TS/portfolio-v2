import styled from 'styled-components';

const ScrollIcon = styled.div`
  display: none;

  @media screen and (max-width: 1124px) {
    display: ${(props) => (props.show ? `initial` : `none`)};
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);

    width: 16px;
    height: 28px;
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 25px;

    &:before {
      content: '';
      background: ${(props) => props.theme.colors.background};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 6px;
      width: 3px;
      height: 3px;
      border-radius: 4px;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: scroll;
    }

    @keyframes scroll {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translateY(14px);
      }
    }
  }
`;

export default ScrollIcon;
