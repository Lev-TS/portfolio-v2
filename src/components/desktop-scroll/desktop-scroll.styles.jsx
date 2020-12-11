import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: -60px;
  bottom: 100px;
  display: flex;
  align-items: center;
  transform: rotate(-90deg);

  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
`;

export const Text = styled.div`
  margin-left: 10px;
`;

export const RabbitIcon = styled.img`
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: desktopScroll;

  @keyframes desktopScroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-14px);
    }
  }
`;
