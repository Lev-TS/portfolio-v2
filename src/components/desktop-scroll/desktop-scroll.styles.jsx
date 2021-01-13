import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-style: italic;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
`;

export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.rabbitScroll};
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
