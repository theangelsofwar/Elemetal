const path = require('path');
// const proxy = require('http-proxy-middleware');


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
  pathPrefix: `__GATSBY_IPFS_PATH_PREFIX__`,
  plugins: [
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`
    {
      resolve: `gatsby-plugin-dat`,
      options: {
        pinning_service: {
          domain: 'https://hashbase.io/',
          // If your pinning service does not need authentication,
          // you can omit these fields.
          username: process.env.HASHBASE_USER,
          password: process.env.HASHBASE_PASSWORD,
        },
      },
    },
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
    `gatsby-plugin-ipfs`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
        ],
      },
    },
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
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt, 
                  date: edge.node.frontmatter.date, 
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "RSS Feeds",
            // match: "^/ether/",
            // link: "https://angiechangpagne.com/ether/"
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
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/components`,
    //   },
    // },
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