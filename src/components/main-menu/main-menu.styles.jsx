import styled from 'styled-components';

export const MenuContainer = styled.div`
  min-height: 200px;
  position: fixed;
  left: 15px;
  z-index: 4;
  padding: 20px;
  font-family: 'Open Sans';
  font-size: 14px;
  width: 276px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  border: 0px solid rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);

  transform: ${(props) => (props.show ? 'translateY(70px)' : 'translateY(-400px)')};
  transition: transform 500ms ease;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px 10px;

  span {
    font-size: 14px;
  }

  > :nth-child(4) {
    justify-self: end;
  }

  > :nth-child(6) {
    justify-self: end;
  }

  @media screen and (max-width: 1290px) {
    left: 8px;
  }
`;

export const Label = styled.div`
  color: black;
  font-size: 14px;
`;
