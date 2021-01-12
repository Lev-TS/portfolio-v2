import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  background: ${colors.grey};
  border: 1px solid ${colors.foreground};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5px;
`;
