import React from 'react';

import { ProjectStack, IconWrapper } from './other-project-stack.styles';
import ImageTagSelector from '../image-tag-selector/image-tag-selector.components';

export default function OtherProjectStack({ projectStack }) {
  return (
    <ProjectStack>
      {projectStack.map(({ id, toolIcon }) => {
        return (
          <IconWrapper key={id}>
            <ImageTagSelector
              source={toolIcon}
              alt="icon"
              styles={{ maxWidth: '30px', miniWdth: '30px' }}
            />
          </IconWrapper>
        );
      })}
    </ProjectStack>
  );
}
