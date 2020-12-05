import React from 'react';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import Hero from '../components/hero/hero.component';
import About from '../components/about/about.component';
import Skills from '../components/skills/skills.component';
import Projects from '../components/projects/projects.component';
import ContactMe from '../components/contact/contact.component';

import ContactProvider from '../providers/contact.provider';

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <ContactProvider>
      <ContactMe />
    </ContactProvider>
  </AppLayout>
);

export default IndexPage;
