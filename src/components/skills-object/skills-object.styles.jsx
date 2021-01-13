import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.mediumBlue};
  font-size: 20px;
  line-height: 24px;
  position: relative;
  margin-left: 35px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    padding: 10px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.mediumBlue};

    &:first-child {
      border-top: 1px solid ${(props) => props.theme.colors.mediumBlue};
    }
  }

  @media screen and (max-width: 414px) {
    border: 0;

    &:first-child {
      border-top: none;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: -35px;
  top: -3px;
  width: 25px;
  height: 25px;

  .skills-icon {
    width: 25px;
    height: 25px;
  }

  .skill-icon-fill {
    fill: ${(props) => props.theme.colors.red};
  }

  .skill-icon-stroke {
    stroke: ${(props) => props.theme.colors.red};
  }

  @media screen and (max-width: 800px) {
    left: initial;
    top: 10px;
    right: 0;
  }
`;

export const List = styled.ul`
  color: ${(props) => props.theme.colors.foreground};
  margin-left: 3px;
  padding-left: 20px;
  border-left: 1px solid ${(props) => props.theme.colors.red};
  font-size: 12px;
  line-height: 16px;
  list-style: none;

  @media screen and (max-width: 800px) {
    padding-left: 10px;
  }
`;
