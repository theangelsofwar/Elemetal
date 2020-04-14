require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const url = require('url')
const moment = require('moment')
const { postQuery, dateFormat } = require('./src/gatsby/query')

const siteUrl = `http://www.angiechangpagne.com`
const author = `Angie Chang`

const getDate = node => {
  return moment(node.first_publication_date, dateFormat).toString()
}

const getMediaType = type => {
  switch(type) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    case 'gif':
      return 'image/gif'
    case 'png':
      return 'image/png'
    default:
      return 'image/*'
  }
}

module.exports = {
  siteMetadata: {
    title: `Elemetal`,
    description: `Blade Runner in the Real World`,
    author: `@angiechangpagne`,
    siteUrl: `http://www.angiechangpagne.com`,
    social: {
      linkedin: `angiechangpagne`
    },
    image:'/images/homescreen.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elemetal`,
        short_name: `YVT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-132477935-2',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 85
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `{${postsQuery}}`,
            output: '/rss.xml',
            title: `RSS Feed - ${author}`,
            description: `${siteUrl}`,
            serialize: ({ query: { posts } }) =>
              posts.edges.map(({ node }) => {
                const imageUrl = url.parse(
                  node.data.thumbnail.localFile.url || ''
                )
                return {
                  title: `${node.data.title.text}`,
                  description: node.data.meta_description || '',
                  author,
                  date: getDate(node),
                  url: `${siteUrl}/${node.uid}`,
                  guid: `${siteUrl}/${node.uid}`,
                  enclosure: {
                    url: `${imageUrl.protocol}//${imageUrl.host}${imageUrl.pathname}`,
                    type: getMediaType(node.data.thumbnail.localFile.extension),
                    size: node.data.thumbnail.localFile.size
                  }
                }
              })
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade'
            // 'cache-control: public,max-age=31536000,immutable'
          ]
          // '*.html': ['cache-control: public, max-age=0, must-revalidate'],
          // '*.json': ['cache-control: public, max-age=0, must-revalidate'],
          // '*.md': ['cache-control: public, max-age=0, must-revalidate']
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
