import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 800px) {
    grid-column: 1 / 3;
  }

  button {
    padding: 12px;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    background-color: ${(props) => props.theme.colors.mediumBlue};
    border: 1px solid ${(props) => props.theme.colors.mediumBlue};
    border-radius: 3px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.mediumBlue};
    }

    &:last-child {
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.foreground};
      color: ${(props) => props.theme.colors.foreground};

      &:hover {
        background-color: ${(props) => props.theme.colors.foreground};
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;

export default ButtonContainer;
