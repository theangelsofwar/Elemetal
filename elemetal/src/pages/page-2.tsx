import {Link} from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = (): JSX.Element => (
  <Layout>
    <SEO title="Honor the Machine" />
    <h1>Honor The Machine</h1>
    <Link to="/"> </Link>
  </Layout>
)

export default SecondPage
