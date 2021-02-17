import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { getMetaTags } from '../../utils/seo.utils';

export default function SEO({ seo = {} }) {
  const { strapiTheme } = useStaticQuery(query);
  const { defaultSeo, siteName, favicon } = strapiTheme;

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  return (
    <Helmet
      title={fullSeo.metaTitle}
      htmlAttributes={{
        lang: 'en',
      }}
      meta={getMetaTags(fullSeo)}
      link={[
        {
          rel: 'icon',
          href: favicon.publicURL,
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Recursive:400,700|Libre+Baskerville:400i|Courier+Prime:400,400i,700,700i|Open+Sans:400,400i,700,700i&amp;display=swap',
        },
      ]}
    />
  );
}

const query = graphql`
  query {
    strapiTheme {
      siteName
      favicon {
        publicURL
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;
