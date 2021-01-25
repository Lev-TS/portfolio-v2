import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  min-height: 300px;
  color: ${(props) => props.theme.colors.grey};
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
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.darkBlue};
`;

export const Excerpt = styled.p`
  font-weight: normal;
  font-style: normal;
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
    border: 2px solid ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.darkBlue};
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    font-size: 15px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.foreground};
    }
  }
`;
