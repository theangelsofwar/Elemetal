// import {graphql} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Helmet>
        <title> Void Ether </title>
      </Helmet>
      <p>You just hit a void ether</p>
    </Layout>
  )
}

export default NotFoundPage
