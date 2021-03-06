const path = require('path');
// const proxy = require('http-proxy-middleware');
// const Fortmatic = require('fortmatic');
// const Web3= require('web3');
// let fm = new Fortmatic(`pk_test_A34C21EE11FC5E45`);
// web3 = new Web3(fm.getProvider());

const siteMetadata= {
  name: `Angels Of War`,
  author: `Angie Chang`,
  description: `Software Developer based in Los Angeles, my mission is to Code Through the Edges of Reality`,
  social: {
    linkedin: `angelsofwar`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Angels Of War`,
    name: `Angie Chang`,
    tagline: `Coding Through the Edges of Reality`,
    description: `Software Developer based in Los Angeles`,
    author: `@angelsofwar`,
    stacks: [
      "React",
      "GraphQL",
      "Gatsby",
      "MERN",
      "Typescript",
      "Redux",
      "Hooks",
      "MongoDB",
      "PostgreSQL",
      "Node",
      "Blockchain",
      "Ethereum",
      "Web3",
      "Solidity",
      "Rust",
      "dApp",
      "NewAgeArchitecture",
      "Algorithms",
    ],
    siteUrl: `http://www.angelsofwar.com`,
    social: {
      linkedin: `@angelsofwar`,
      github: `@angelsofwar`,
    },
  },
  plugins: [
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: 0,
      },
    },
    // `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://angelsofwar.com`,
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `ghostwhite`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...siteMetadata,
        name: `Angels Of War`,
        lang: `en-US`,
        short_name: `Angie Chang`,
        start_url: `/`,
        color: `darkslategray`,
        background_color: `ghostwhite`,
        theme_color: `#0abab5`,
        display: `minimal-ui`,
        icon: `src/images/angelsOfWar.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${path.resolve(__dirname)}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-embed-spotify`]
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,tsby develop
  ],
};