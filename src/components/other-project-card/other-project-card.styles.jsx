import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  min-height: 300px;
  color: ${colors.grey};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${colors.darkBlue};
`;

export const Excerpt = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const AnchorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  text-align: center;

  a {
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
  }
`;
