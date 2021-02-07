import styled from 'styled-components';

export const TwitterPickerWrapper = styled.div`
  position: fixed;
  left: 15px;
  top: 356px;
  z-index: 4;
  font-family: 'Open Sans';
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
`;
