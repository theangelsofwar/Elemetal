const path = require('path');

const siteMetadata= {
  name: `Elemetal`,
  author: `Yve Vestal Titan (angiechangpagne)`,
  description: `Cutting Through the Edges of Reality`,
  social: {
    linkedin: `angiechangpagne`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Elemetal`,
    name: `YVT`,
    tagline: `Cutting past the Edge of Reality`,
    description: `Blade Runner in the Real World`,
    author: `@angiechangpagne`,
    siteUrl: `http://www.angiechangpagne.com`,
    social: {
      linkedin: `angiechangpagne`,
    },
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
    `gatsby-transformer-remark`,
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
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/components`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};