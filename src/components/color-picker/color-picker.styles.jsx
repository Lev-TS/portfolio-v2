import styled from 'styled-components';

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

export const TwitterPickerWrapper = styled.div`
  position: absolute;
  top: 270px;
  left: 0px;
  z-index: 5;

  transform: ${(props) => (props.show ? 'translateX(0px)' : 'translateX(-400px)')};
  transition: transform 500ms ease;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 110vw;
  height: 110vh;
  top: -80px;
  left: -20px;
  z-index: 4;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const ColorPickerContainer = styled.div`
  display: ${(props) => (props.show ? `flex` : `none`)};
  justify-content: space-between;
  border-top: 1px solid lightGrey;
  margin-top: 10px;
  padding-top: 20px;
`;
