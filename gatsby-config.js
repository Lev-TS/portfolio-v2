require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: [`certificates`, `projects`],
        singleTypes: [`about`, `skills`, `hero`, `social-links`, `codes`, `theme`, `contact-me`],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Recursive\:400,700`,
          `Vampiro One\:400`,
          `Libre Baskerville\:400i`,
          `Courier Prime\:400,400i,700,700i`,
          `Open Sans\:400,400i,700,700i`,
        ],
        display: 'swap',
      },
    },
  ],
};
