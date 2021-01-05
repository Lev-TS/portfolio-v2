import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';

import OtherProjectCarousel from '../other-project-carousel/other-project-carousel.component';

export const Container = styled.div`
  min-height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${colors.black};
  color: ${colors.foreground};
  margin-bottom: 80px;
  display: flex;

  :last-of-type {
    margin-bottom: 0;
  }
`;
export const Description = styled.div`
  width: 65%;
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-style: italic;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${colors.mediumBlue};
`;

export const Excerpt = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export default function OtherProjectCard({ projectData }) {
  console.log(projectData);

  return (
    <Container>
      <OtherProjectCarousel images={projectData.images} />
      <Description>
        <Title>{projectData.title}</Title>
        <Excerpt>{projectData.excerpt}</Excerpt>
      </Description>
    </Container>
  );
}
