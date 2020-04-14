import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
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
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
const NotFoundPage = ({ data }: iProps) => (
    <Layout>
    <SEO title="404: Not found" />
    <h1>I don't Exist</h1>
    <p>You just hit a void ether... get back safe</p>
    </Layout>
)

export default NotFoundPage