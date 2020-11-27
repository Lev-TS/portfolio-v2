import React from "react";

import SEO from "../components/seo";
import AppLayout from "../components/layouts/app.layout";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <Hero />
    <About />
  </AppLayout>
);

export default IndexPage;
