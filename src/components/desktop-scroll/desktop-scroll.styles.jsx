import styled from 'styled-components';
import RabbitScroll from '../../assets/hero/rabbit-icon.inline.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-style: italic;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;

  animation-duration: 500ms;
  animation-name: reveal;

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.rabbitScroll};
  margin-left: 10px;
`;

export const StyledRabbitIcon = styled(RabbitScroll)`
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

  .rabbit-scroll-fill {
    fill: ${(props) => props.theme.colors.black};
  }
`;
