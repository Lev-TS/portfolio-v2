import styled from 'styled-components';

export const SettingsMenu = styled.div`
  /* width: 300px; */
  min-height: 200px;
  /* background: white; */
  /* border: 1px solid black; */
  /* filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25)); */
  position: fixed;
  left: 15px;
  /* border-radius: 10px; */
  z-index: 4;
  padding: 20px;
  font-family: 'Lato';
  font-size: 14px;

  width: 276px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  border: 0px solid rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);

  transform: ${(props) => (props.show ? 'translateY(70px)' : 'translateY(-400px)')};
  transition: transform 500ms ease;

  @media screen and (max-width: 1290px) {
    left: 8px;
  }
`;

export const Container = styled.div`
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
`;

export const Label = styled.div`
  color: black;
  font-size: 16px;
`;
