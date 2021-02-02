import React from 'react';
import Img from 'gatsby-image';
import { nanoid } from 'nanoid';

import QuestCardIcon from '../../assets/projects/featured-icons/quest.inline.svg';
import TemplateCardIcon from '../../assets/projects/featured-icons/template.inline.svg';
import OtherCardIcon from '../../assets/projects/featured-icons/other.inline.svg';

export const distributeCardsInRows = (cardsArr, chunkLength, cardObj) => {
  const formatCardsArr = (arr) => {
    const formatedArr = [];
    arr.forEach((card) => {
      const { id, title, excerpt } = card.project;
      formatedArr.push({
        id,
        title,
        excerpt,
        cardIcon: card.cardIcon,
        isFeatured: true,
      });
    });
    return formatedArr;
  };

  const formatCardObj = (obj) => {
    return {
      id: nanoid(),
      title: obj.cardTitle,
      excerpt: obj.cardDescription,
      cardIcon: obj.cardIcon,
      isFeatured: false,
    };
  };

  const chunkedArray = [];
  let i = 0;
  let count = 0;
  const tempCardArr = formatCardsArr(cardsArr);
  const bottomRow = [formatCardObj(cardObj)];

  if (cardsArr.length > 0) bottomRow.push(tempCardArr[0]);
  if (cardObj) {
    i = 1;
    count = 1;
    chunkedArray.push({
      rowId: nanoid(),
      row: bottomRow,
      inverted: false,
    });
  }

  for (i; i < tempCardArr.length; i += chunkLength) {
    count += 1;
    chunkedArray.push({
      rowId: nanoid(),
      row: tempCardArr.slice(i, i + chunkLength),
      inverted: count % 2 === 0,
    });
  }
  return chunkedArray;
};

export const getSlug = (title, isFeatured) => {
  if (isFeatured)
    return `/projects/${title
      .replace(/[^a-zA-Z ]/g, '')
      .trim()
      .replace(/ /g, '-')
      .toLowerCase()}`;
  return `/other-projects`;
};

export const renderCardIcon = (title, cardIcon, other) => {
  const isMe =
    other.cardDescription ===
    'Besides, I’ve developed various practice projects to challenge my skills.';

  if (isMe && title.toLowerCase() === 'urban quest')
    return <QuestCardIcon className="project-card-icon" />;
  if (isMe && title.toLowerCase() === 'portfolio template')
    return <TemplateCardIcon className="project-card-icon" />;
  if (isMe && title.toLowerCase() === 'other')
    return <OtherCardIcon className="project-card-icon" />;

  return cardIcon.ext === '.svg' ? (
    <img
      src={cardIcon.publicURL}
      className="project-card-icon"
      alt={`icon for ${title} project(s)`}
    />
  ) : (
    <Img
      fixed={cardIcon.childImageSharp.fixed}
      className="project-card-icon"
      alt={`icon for ${title} project(s)`}
    />
  );
};
