import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface iProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}
const NotFoundPage = ({ data }: iProps) => (
  const siteTitle = data.site.siteMetadata.title
  
  return (
    <Layout location={window.location} title={siteTitle}>
    <SEO title="404: Not found" />
    <h1>I don't Exist</h1>
    <p>You just hit a void ether... get back safe</p>
    </Layout>
  )
)

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