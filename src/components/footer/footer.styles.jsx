import styled from 'styled-components';
import { Link } from 'react-scroll';

import { colors } from '../../styles/colors';

export const FooterContainer = styled.div`
  height: 300px;
  background-color: #333333;
`;

export const TopHalfCointainer = styled.div`
  height: 50%;
  width: 80%;
  max-width: 580px;
  border-bottom: 1px solid ${colors.darkGrey};
  margin: 0 auto;
  padding-top: 20px;
  border-bottom: 2px solid ${colors.lightGrey};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ScrollUp = styled(Link)`
  transition: 250ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.7);
  }
`;

export const BottomHalfCointainer = styled.div`
  height: 50%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  color: ${colors.lightGrey};
  font-size: 12px;
  line-height: 16px;

  p {
    margin-bottom: 30px;
  }
`;

export const CustomButton = styled.a`
  padding: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  background-color: ${colors.lightGrey};
  color: ${colors.darkGrey};
  border-radius: 3px;
  outline: none;
  text-decoration: none;
`;
