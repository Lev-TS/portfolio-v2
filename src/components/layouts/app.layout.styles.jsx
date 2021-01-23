import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  
  h1 {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
  }
  
  h3 {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
  }
  h4 {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
  h5 {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
  h6 {
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
  }
}
`;

export const App = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  flex-grow: 1;
  background: ${(props) => (props.changeColor ? props.theme.colors.mediumBlue : 'initial')};
`;
