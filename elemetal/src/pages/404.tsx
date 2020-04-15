import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import SEO from "../components/seo"

// interface iProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//       }
//     }
//   }
// }
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
export const NotFoundPage = (): JSX.Element => (
    <Layout>
    <SEO title="404: Not found" />
    <Helmet>
      <title> Not Found </title>
    </Helmet>
    <h1>I don't Exist</h1>
    <p>You just hit a void ether... get back safe</p>
    </Layout>
);

export default NotFoundPage;