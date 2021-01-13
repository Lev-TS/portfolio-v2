import React from 'react';

import { AnchorContainer, Anchor } from './project-links.styles';

export default function ProjectLinks({ liveLink, sourceLink }) {
  const links = [];
  if (liveLink) links.push({ href: liveLink, content: 'Live' });
  if (sourceLink) links.push({ href: sourceLink, content: 'Source' });
  return (
    <AnchorContainer length={links.length}>
      {links.map((link) => (
        <Anchor key={link.content} href={link.href} target="_blank" rel="noreferrer noopener">
          {link.content}
        </Anchor>
      ))}
    </AnchorContainer>
  );
}
