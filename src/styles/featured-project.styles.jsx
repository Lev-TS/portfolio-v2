import styled from 'styled-components';
import Markdown from 'react-markdown';

export const Section = styled.div`
  padding: 150px 20px;
  margin: auto;
  max-width: 780px;
  background: ${(props) => props.theme.colors.mediumBlue};
`;

export const Container = styled.div`
  margin: 55px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > :first-child {
    margin-bottom: 30px;
  }
`;

export const ProjectDescription = styled(Markdown)`
  color: ${(props) => props.theme.colors.black};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.darkBlue};
    margin: 10px 0;
  }

  p {
    padding-bottom: 20px;
  }

  > :first-child {
    margin-top: 0;
    padding-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Portfolio = styled.div`
  margin-top: 55px;

  h1 {
    color: ${(props) => props.theme.colors.darkBlue};
    margin-bottom: 20px;
  }
`;
