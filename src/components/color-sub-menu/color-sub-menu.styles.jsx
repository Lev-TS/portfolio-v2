import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  left: 15px;
  top: 275px;
  z-index: 4;
  padding: 20px;
  font-family: 'Lato';
  font-size: 14px;
  width: 276px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  border: 0px solid rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);

  transform: ${(props) => (props.show ? 'translateX(0px)' : 'translateX(-400px)')};
  transition: transform 500ms ease;

  @media screen and (max-width: 1290px) {
    left: 8px;
  }

  display: flex;
  justify-content: space-between;
  border-top: 1px solid lightGrey;
  margin-top: 10px;
  padding-top: 20px;
`;

export const ColorButton = styled.button`
  position: relative;
  z-index: 7;
  width: 25px;
  height: 25px;
  border: 1px solid lightGrey;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  outline: none;
  cursor: pointer;

  &:focus {
    border: 3px solid red;
  }
`;
