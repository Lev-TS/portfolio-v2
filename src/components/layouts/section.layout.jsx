import React from "react";

import styled from "styled-components";

const Layout = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`;

const SectionLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default SectionLayout;
