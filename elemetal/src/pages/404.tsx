// import {graphql} from 'gatsby'
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
        <title> Void Ether </title>
      </Helmet>
      <p>You just hit a void ether</p>
    </Layout>
  )
}

export default NotFoundPage
