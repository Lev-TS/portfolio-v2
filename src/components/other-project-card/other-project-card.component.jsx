import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { Container, Description, Title, Excerpt } from './other-project-card.styles';

import OtherProjectCarousel from '../other-project-carousel/other-project-carousel.component';
import OtherProjectStack from '../other-project-stack/other-project-stack.component';
import ProjectLinks from '../project-links/project-links.component';

import { WindowContext } from '../../providers/window.provider';

export default function OtherProjectCard({ projectData, isOdd }) {
  const { isMobile } = useContext(WindowContext);

  return (
    <Fade
      right={!isMobile && isOdd}
      left={!isMobile && !isOdd}
      bottom={isMobile}
      duration={1000}
      delay={300}
      distance="300px"
    >
      <Container>
        <OtherProjectCarousel images={projectData.images} />
        <Description>
          <Title>{projectData.title}</Title>
          <OtherProjectStack projectStack={projectData.projectStack} />
          <Excerpt>{projectData.excerpt}</Excerpt>
        </Description>
        <ProjectLinks liveLink={projectData.liveLink} sourceLink={projectData.sourceLink} />
      </Container>
    </Fade>
  );
}
