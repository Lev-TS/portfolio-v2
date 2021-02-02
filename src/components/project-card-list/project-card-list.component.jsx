import React from 'react';

import Card from '../card/card.component';

import { SectionContent, Row, CardContent, Icon, Title, Excerpt } from './project-card-list.styles';

import { distributeCardsInRows, renderCardIcon, getSlug } from './project-card-list.utils';

// FIXME: remove renderCardIcon for template production.
function ProjectCardList({ featuredProjects, otherProjects, className, doNotSaveScrollY }) {
  const rows = distributeCardsInRows(featuredProjects, 2, otherProjects);
  return (
    <SectionContent className={className}>
      {rows.map(({ rowId, row, inverted }) => (
        <Row key={rowId} inverted={inverted}>
          {row.map(({ id, cardIcon, title, excerpt, isFeatured }) => (
            <Card
              key={id}
              buttonStyles={{ title: 'more' }}
              buttonLink={getSlug(title, isFeatured)}
              doNotSaveScrollY={doNotSaveScrollY}
            >
              <CardContent>
                <Icon>{renderCardIcon(title, cardIcon, otherProjects)}</Icon>
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
              </CardContent>
            </Card>
          ))}
        </Row>
      ))}
    </SectionContent>
  );
}

export default ProjectCardList;
