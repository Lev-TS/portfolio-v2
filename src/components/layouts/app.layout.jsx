import React from "react";
import Helmet from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";

import { colors } from "../../styles/colors";

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Courier Prime';
    background: ${colors.background};
    color: ${colors.black};
  }

	* {
    box-sizing: border-box;
    margin: 0;
	}
`;

const Layout = styled.div``;

const AppLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <script src="http://localhost:8097"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Recursive:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </React.Fragment>
  );
};

export default AppLayout;
