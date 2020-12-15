import React from 'react';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import Hero from '../components/section-hero/hero.component';
import About from '../components/section-about/about.component';
import Skills from '../components/section-skills/skills.component';
import Projects from '../components/section-projects/projects.component';
import ContactMe from '../components/section-contact/contact.component';
import Certificates from '../components/certificates-list/certificates.components';
import Footer from '../components/footer/footer.component';

import ContactProvider from '../providers/contact.provider';
import WindowProvider from '../providers/window.provider';

const IndexPage = () => (
  <WindowProvider>
    <AppLayout>
      <SEO title="Home" />
      <Hero id="home" />
      <About />
      <Skills />
      <Projects />
      <ContactProvider>
        <ContactMe />
      </ContactProvider>
      <Footer scrollTo="hero" />
    </AppLayout>
    <Certificates />
  </WindowProvider>
);

export default IndexPage;
