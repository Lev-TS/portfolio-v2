import styled from 'styled-components';

export const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  background: ${(props) => props.theme.colors.grey};
  border: 1px solid ${(props) => props.theme.colors.foreground};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5px;
  transition: all 100ms;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25));
  padding: 10px;

  &:hover {
    filter: initial;
    transform: scale(2);
    background: ${(props) => props.theme.colors.darkBlue};
    border-color: ${(props) => props.theme.colors.darkBlue};
    z-index: 1;
  }
`;
