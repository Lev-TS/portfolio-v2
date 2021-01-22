import styled from 'styled-components';

export const IconWrapper = styled.div`
  > :first-child {
    position: fixed;
    top: 15px;
    left: 15px;
    transition: 250ms;
    z-index: 4;
    cursor: pointer;

    @media screen and (max-width: 1290px) {
      left: 8px;
    }

    @media screen and (max-width: 800px) {
      position: ${(props) => (props.reposition ? 'absolute' : 'fixed')};
    }

    animation: spin 6s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .settings-icon-fill {
    fill: ${(props) => props.theme.colors.black};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.75;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
