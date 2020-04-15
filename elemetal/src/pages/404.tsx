import {graphql} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

// interface iProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//       }
//     }
//   }
// }
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet>
      <title> Not Found </title>
    </Helmet>
    <h1>`Exist?`</h1>
    <p>You just hit a void ether... get back safe</p>
  </Layout>
)

export default NotFoundPage
