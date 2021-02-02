import React from 'react';
import PropTypes from 'prop-types';
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
      titleTemplate={`%s | ${siteName}`}
      link={[
        {
          rel: 'icon',
          href: favicon.publicURL,
        },
      ]}
      meta={getMetaTags(fullSeo)}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

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
