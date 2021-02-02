export const getMetaTags = (fullSeo) => {
  const tags = [];

  if (fullSeo.metaTitle) {
    tags.push(
      {
        property: 'og:title',
        content: fullSeo.metaTitle,
      },
      {
        name: 'twitter:title',
        content: fullSeo.metaTitle,
      }
    );
  }
  if (fullSeo.metaDescription) {
    tags.push(
      {
        name: 'description',
        content: fullSeo.metaDescription,
      },
      {
        property: 'og:description',
        content: fullSeo.metaDescription,
      },
      {
        name: 'twitter:description',
        content: fullSeo.metaDescription,
      }
    );
  }
  if (fullSeo.shareImage) {
    const imageUrl =
      (process.env.GATSBY_ROOT_URL || 'http://localhost:8000') + fullSeo.shareImage.publicURL;
    tags.push(
      {
        name: 'image',
        content: imageUrl,
      },
      {
        property: 'og:image',
        content: imageUrl,
      },
      {
        name: 'twitter:image',
        content: imageUrl,
      }
    );
  }
  if (fullSeo.project) {
    tags.push({
      property: 'og:type',
      content: 'project',
    });
  }
  tags.push({ name: 'twitter:card', content: 'summary_large_image' });

  return tags;
};
