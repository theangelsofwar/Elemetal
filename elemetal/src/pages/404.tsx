import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './404.module.scss'

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="404: Does not Exist" />
      <Helmet>
        <title> Void </title>
      </Helmet>
      <p> You just hit a void. There is no escape!</p>
    </Layout>
  )
}

export default NotFoundPage
