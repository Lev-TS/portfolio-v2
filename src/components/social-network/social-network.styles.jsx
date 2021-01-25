import styled, { css } from 'styled-components';

const adjustment = css`
  @media screen and (max-width: 1290px) {
    right: 8px;

    .social-icon {
      transition: 200ms;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isFooter ? 'row' : 'column')};
  position: ${(props) => (props.isFooter ? 'static' : 'fixed')};
  z-index: 1;
  top: 15px;
  right: 15px;
  overflow: visible;

  a {
    margin: ${(props) => (props.isFooter ? '0 10px' : '10px 0')};
    transition: 250ms;

    &:hover {
      transform: scale(1.7);
    }
  }

  > a {
    margin-top: 0;
  }

  .social-icon {
    height: 25px;
    width: 25px;
    cursor: pointer;

    .vector {
      fill: ${(props) =>
        props.isFooter ? props.theme.colors.background : props.theme.colors.black};
    }
  }

  ${(props) => (!props.isFooter ? adjustment : null)}
`;

export default Container;
