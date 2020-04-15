import {graphql} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = (props: any): JSX.Element => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Helmet>
        <title> Exists? </title>
      </Helmet>
      <p>You just hit a void ether...get back safe</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
