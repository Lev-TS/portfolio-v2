import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding: 0 40px;
  background-color: ${colors.mediumBlue};
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: ${(props) => (props.show ? 'block' : 'none')};

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

// TODO: move styles to another file

export const LargeImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 50px;
  padding-bottom: 50px;
  padding-top: 150px;

  div {
    -webkit-box-shadow: 0px 0px 10px 3px ${colors.grey};
    box-shadow: 0px 0px 10px 3px ${colors.grey};
  }
`;

export const SmallImageContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 20px;
  padding-bottom: 150px;

  div {
    -webkit-box-shadow: 0px 0px 10px 2px ${colors.grey};
    box-shadow: 0px 0px 10px 3px ${colors.grey};
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;
