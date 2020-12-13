import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

const adjustment = css`
  @media screen and (max-width: 1290px) {
    right: 9px;

    .social-icon {
      transition: 200ms;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isFooter ? 'row' : 'column')};
  position: ${(props) => (props.isFooter ? 'static' : 'fixed')};
  z-index: 1;
  top: 50px;
  right: 15px;

  a {
    margin: ${(props) => (props.isFooter ? '0 10px' : '10px 0')};
  }

  .social-icon {
    transition: 250ms;
    cursor: pointer;

    .vector {
      fill: ${(props) => (props.isFooter ? colors.white : colors.black)};
    }

    &:hover {
      transform: scale(1.7);
    }
  }

  ${(props) => (!props.isFooter ? adjustment : null)}
`;
