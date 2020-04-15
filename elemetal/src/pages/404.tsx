import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet>
      <title> Not Found </title>
    </Helmet>
    <p>You just hit a void ether...get back safe</p>
  </Layout>
)

export default NotFoundPage
