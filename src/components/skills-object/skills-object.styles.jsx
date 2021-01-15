import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.mediumBlue};
  font-family: ${(props) => props.theme.fonts.skillsObject};
  font-size: 20px;
  line-height: 20px;
  position: relative;
  margin-left: 40px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

export const IconWrapper = styled.div`
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
`;

export const List = styled.ul`
  color: ${(props) => props.theme.colors.foreground};
  margin: 5px 0;
  padding: 10px 0 3px;

  border-top: 3px solid ${(props) => props.theme.colors.darkBlue};
  font-size: 12px;
  line-height: 16px;
  list-style: none;
`;
