import styled from 'styled-components';

export const AnchorContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.length === 2 ? '1fr 1fr' : '1fr')};
  grid-gap: 20px;
  text-align: center;
`;

export const Anchor = styled.a`
  width: 100px;
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  font-size: 15px;
  transition: all 100ms;
  margin-bottom: 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.mediumBlue};
  }
`;
