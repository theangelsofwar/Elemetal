const path = require('path');

const siteMetadata= {
  name: `Elemetal`,
  author: `@angiechangpagne`,
  description: `Cutting through the Edges of Reality`,
  social: [],
}

module.exports = {
  siteMetadata: {
    title: `Elemetal`,
    name: `YVT`,
    tagline: `Cutting through the Edges of Reality`,
    description: `Blade Runner in the Real World`,
    author: `@angiechangpagne`,
    siteUrl: `http://www.angiechangpagne.com`,
    social: [],
  },
  plugins: [
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...siteMetadata,
        name: `Elemetal`,
        lang: `en-US`,
        short_name: `YVT`,
        start_url: `/`,
        background_color: `gainsboro`,
        theme_color: `ghostwhite`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // `gatsby-plugin-ipfs`,
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};



