const path = require('path');
// const proxy = require('http-proxy-middleware');
// const Fortmatic = require('fortmatic');
// const Web3= require('web3');
// let fm = new Fortmatic(`pk_test_A34C21EE11FC5E45`);
// web3 = new Web3(fm.getProvider());

const siteMetadata= {
  name: `Elemetal`,
  author: `Yve Vestal Titan (angiechangpagne)`,
  description: `Software Developer based in Los Angeles, Working to Code Through the Edges of Reality`,
  social: {
    linkedin: `angiechangpagne`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Elemetal`,
    name: `YVT`,
    tagline: `Coding Through the Edges of Reality`,
    description: `Web Developer based in Los Angeles`,
    author: `@angiechangpagne`,
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
    siteUrl: `http://www.angiechangpagne.com`,
    social: {
      linkedin: `angiechangpagne`,
      github: `angiechangpagne`,
    },
  },
  plugins: [
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -92,
      },
    },
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: siteConfig.sitemapPath,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://angiechangpagne.com`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `aliceblue`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...siteMetadata,
        name: `angie-chang`,
        lang: `en-US`,
        short_name: `YVT`,
        start_url: `/`,
        color: `aliceblue`,
        background_color: `darkslategray`,
        theme_color: `ghostwhite`,
        display: `minimal-ui`,
        icon: `src/images/yvtfavicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .filter(
                  edgePost =>
                    edgePost.node.frontmatter.isPublished === 'true',
                )
                .map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.description,
                    date: edge.node.frontmatter.datePublished,
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.path,
                    guid:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.path,
                    custom_elements: [
                      { 'content:encoded': edge.node.html },
                      { tags: edge.node.frontmatter.tags.join(',') },
                      {
                        featuredImage:
                          site.siteMetadata.siteUrl +
                          edge.node.frontmatter.titleImage
                            .childImageSharp.fixed.src,
                      },
                    ],
                  })
                })
            },
            query: blogPostsQuery,
            output: '/rss.xml',
            title: "Mario's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      },
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
    // `gatsby-plugin-offline`,
  ],
};