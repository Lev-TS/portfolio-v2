import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const AnchorContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.length === 2 ? '1fr 1fr' : '1fr')};
  grid-gap: 20px;
  text-align: center;
`;

export const Anchor = styled.a`
  width: 100px;
  border: 2px solid ${colors.darkBlue};
  color: ${colors.darkBlue};
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  font-size: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.foreground};
  }
`;
