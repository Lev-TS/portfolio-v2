import styled from 'styled-components';

export const OtherProjectContainer = styled.div`
  margin: 150px auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 150px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    margin: 60px auto;
  }
`;
