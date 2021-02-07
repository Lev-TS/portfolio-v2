import React, { useEffect } from 'react';

import AppLayout from '../components/layouts/app.layout';
import Hero from '../components/section-hero/hero.component';
import About from '../components/section-about/about.component';
import Skills from '../components/section-skills/skills.component';
import Projects from '../components/section-projects/projects.component';
import ContactMe from '../components/section-contact/contact.component';

import ContactProvider from '../providers/contact.provider';

const IndexPage = () => {
  // restore scroll position when we navigate back to home from other pages
  const [firstLoad, setFirstLoad] = React.useState(true);
  useEffect(() => setFirstLoad(false), []);
  React.useLayoutEffect(() => {
    if (!firstLoad) {
      const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
      window.scroll(0, scrollPosition);
      sessionStorage.removeItem('scrollPosition');
    }
  });

  return (
    <AppLayout
      hideHeader
      footerScrollsTo="hero"
      seo={{ metaTitle: 'Levan Tsutskiridze | Fullstack Developer' }}
    >
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
