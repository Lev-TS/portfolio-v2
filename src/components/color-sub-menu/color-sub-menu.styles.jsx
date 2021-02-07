import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  left: 15px;
  top: 275px;
  z-index: 4;
  padding: 20px;
  font-size: 14px;
  width: 276px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  border: 0px solid rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);

  margin-top: 10px;
  padding-top: 20px;

  transform: ${(props) => (props.show ? 'translateX(0px)' : 'translateX(-400px)')};
  transition: transform 500ms ease;

  @media screen and (max-width: 1290px) {
    left: 8px;
  }

  /* display: flex;
  align-items: flex-start;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 1px;
  justify-content: center;
  align-content: center;
`;

export const ColorButton = styled.button`
  position: relative;
  z-index: 7;
  width: 24px;
  height: 24px;
  border: 1px solid lightgrey;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: auto;
  padding: 0;

  &:focus {
    outline-color: red;
  }
`;
