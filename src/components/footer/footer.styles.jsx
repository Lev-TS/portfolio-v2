import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterContainer = styled.footer`
  height: 300px;
  background-color: ${(props) => props.theme.colors.darkGrey};
`;

export const TopHalfCointainer = styled.div`
  height: 50%;
  width: 80%;
  max-width: 580px;
  border-bottom: 1px solid ${(props) => props.theme.colors.darkGrey};
  margin: 0 auto;
  padding-top: 20px;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGrey};

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

  .scroll-arrow {
    fill: ${(props) => props.theme.colors.background};
  }
`;

export const BottomHalfCointainer = styled.div`
  height: 50%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
  color: ${(props) => props.theme.colors.lightGrey};

  p {
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 30px;
  }
`;

export const CustomButton = styled.a`
  padding: 12px;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  color: ${(props) => props.theme.colors.darkGrey};
  border-radius: 3px;
  outline: none;
  text-decoration: none;
`;
