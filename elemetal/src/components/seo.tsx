import { useStaticQuery, graphql } from "gatsby"
import React from "react"
// import PropTypes from "prop-types"
import Helmet from "react-helmet"

interface Props {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: []
  title: string
}

const SEO = ({ description, keywords=[],lang='en', meta=[], title }: Props): JSX.Element => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           siteTitle
  //           siteDescription
  //           author
  //         }
  //       }
  //     }
  //   `
  // )

  // const {author, siteDescription, siteTitle} = site.siteMetadata
  // const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta || [])}
    />
  )
};

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

export default SEO
