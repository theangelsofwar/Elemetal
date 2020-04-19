/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';
// add floating icons to technologies used, source their logos with image sources addresses
import './layout.scss';
//add binary clock
import PageSlidebar from './PageSlidebar';
// import PropTypes from "prop-types";
import Header from './header';
//<Header />

interface Props {
  children: React.ReactNode
}

const Layout = ({children}: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          title
          description
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Helmet titleTemplate={`%s 0 ${data.site.siteMetadata.name}`} defaultTitle={data.site.siteMetadata.name}>
        <meta name='description' content={data.site.siteMetadata.description} />
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          border: `none`,
        }}
      >
        <main>
            {children}
        </main>
      </div>
    </React.Fragment>
  )
}

export default Layout
