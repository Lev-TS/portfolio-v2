import styled from 'styled-components';

export const OtherProjectContainer = styled.div`
  max-width: 1178px;
  margin: 150px auto;
  padding: 40px 20px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 150px;

  @media screen and (max-width: 800px) {
    margin: 60px auto;
  }
`;
