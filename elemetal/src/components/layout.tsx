/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 //add floating icons to technologies used, source their logos with image sources addresses
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {TLayoutQuery} from '../types/gatsbyGraphql'
import Header from "./header"
import "./layout.css"

interface iProps {
  children: any
}

const Layout = ({ children }: iProps): JSX.Element => {
  const layoutQuery: TLayoutQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          canonicalUrl
          siteTitle
        }
      }
    }
  `)

  const {canonicalUrl, siteTitle} = layoutQuery.site.siteMetadata
  return (
    <>
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Born in the US, Sent from Mars
          Copyright{` `}
          <a href="https://www.angiechangpagne.com">Angie Chang(YVT Alias)</a>
        </footer>
      </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
