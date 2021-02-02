import styled, { createGlobalStyle, css } from 'styled-components';

const headingFonts = css`
  font-family: ${(props) => props.theme.fonts.headings};
`;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  
  h1 {
    ${headingFonts}
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
  }

  h2 {
    ${headingFonts}
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
  }
  
  h3 {
    ${headingFonts}
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
  }
  h4 {
    ${headingFonts}
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
  h5 {
    ${headingFonts}
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
  h6 {
    ${headingFonts}
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
  }
}

.icon-fill-red {
  fill: ${(props) => props.theme.colors.red}
}

.icon-fill-background {
  fill: ${(props) => props.theme.colors.background}
}

.icon-fill-black {
  fill: ${(props) => props.theme.colors.black}
}

.icon-fill-foreground {
  fill: ${(props) => props.theme.colors.foreground}
}

.icon-fill-darkBlue {
  fill: ${(props) => props.theme.colors.darkBlue}
}

.icon-fill-mediumBlue {
  fill: ${(props) => props.theme.colors.mediumBlue}
}

.icon-fill-darkGrey {
  fill: ${(props) => props.theme.colors.darkGrey}
}

.icon-fill-grey {
  fill: ${(props) => props.theme.colors.grey}
}

.icon-fill-lightGrey {
  fill: ${(props) => props.theme.colors.lightGrey}
}

.icon-stroke-red {
  stroke: ${(props) => props.theme.colors.red}
}

.icon-stroke-background {
  stroke: ${(props) => props.theme.colors.background}
}

.icon-stroke-black {
  stroke: ${(props) => props.theme.colors.black}
}

.icon-stroke-foreground {
  stroke: ${(props) => props.theme.colors.foreground}
}

.icon-stroke-darkBlue {
  stroke: ${(props) => props.theme.colors.darkBlue}
}

.icon-stroke-mediumBlue {
  stroke: ${(props) => props.theme.colors.mediumBlue}
}

.icon-stroke-darkGrey {
  stroke: ${(props) => props.theme.colors.darkGrey}
}

.icon-stroke-grey {
  stroke: ${(props) => props.theme.colors.grey}
}

.icon-stroke-lightGrey {
  stroke: ${(props) => props.theme.colors.lightGrey}
}

`;

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex-grow: 1;
  background: ${(props) => (props.changeColor ? props.theme.colors.mediumBlue : 'initial')};
`;
