
// const url = require('url')
// const moment = require('moment')
// const siteTitle="Cutting Through The Edge of Reality"
// const siteUrl = `http://www.angiechangpagne.com`
// const author = `Angie Chang`

// const getDate = node => {
//   return moment(node.first_publication_date, dateFormat).toString()
// }

module.exports = {
  siteMetadata: {
    title: `Elemetal`,
    name: `YVT`,
    tagline: `Pushing The Edge of Reality`,
    description: `Blade Runner in the Real World`,
    author: `@angiechangpagne`,
    siteUrl: `http://www.angiechangpagne.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}



