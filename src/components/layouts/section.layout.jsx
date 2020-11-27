import React from "react";

import styled from "styled-components";

const Layout = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  padding: 0 40px;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

const SectionLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default SectionLayout;
