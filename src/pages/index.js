import React, { useEffect } from 'react';

import SEO from '../components/seo';
import AppLayout from '../components/layouts/app.layout';
import Hero from '../components/section-hero/hero.component';
import About from '../components/section-about/about.component';
import Skills from '../components/section-skills/skills.component';
import Projects from '../components/section-projects/projects.component';
import ContactMe from '../components/section-contact/contact.component';

import ContactProvider from '../providers/contact.provider';

const IndexPage = () => {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) window.scrollTo(0, savedScrollPosition);
    else window.scrollTo(0, 0);
    sessionStorage.removeItem('scrollPosition');
  }, []);

  return (
    <AppLayout hideHeader footerScrollsTo="hero">
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
};

export default IndexPage;
