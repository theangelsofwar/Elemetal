/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// add floating icons to technologies used, source their logos with image sources addresses
import './layout.css'

import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'

// import PropTypes from "prop-types"
import Header from './header'

interface Props {
  children: React.ReactNode
}

const Layout = ({children}: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
        }
      }
    }
  `)

  return (
    <React.StrictMode>
      <Helmet titleTemplate={`%s 0 ${data.site.siteMetadata.name}`} defaultTitle={data.site.siteMetadata.name}>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Born in the US, Sent from Mars Copyright{`Yve Vestal Titan(Angie Changpagne) `}
        <a href="https://www.angiechangpagne.com">Angie Chang(YVT Alias)</a>
      </footer>
    </React.StrictMode>
  )
}

export default Layout
