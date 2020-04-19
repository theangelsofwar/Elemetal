import React from 'react';
import Post from './post';
// import { StaticQuery, useStaticQuery, graphql } from 'gatsby';
// <StaticQuery 
//     query = {graphql`query {
//       allMarkdownRemark(sort: {fields: [frontmatter__date], order: DESC}) {
//         totalCounts
//         edges {
//           ndoe {
//             fields {
//               slug
//             }
//             id
//             frontmatter {
//               title
//               image
//               keywords
//               date(formatString: "MMMM YYYY")
//             }
//             excerpt
//           }
//         }
//       }
//     }`
//   }
//   render = { data => (
//     <div>
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <Post id={node.id}
//           to={node.fields.slug}
//           keywords={node.frontmatter.keywords}
//           title={node.frontmatter.title}
//           date={node.frontmatter.date}
//           excerpt={node.excerpt} />
//       ))}
//     </div>
//   )}
//   />

export default (): JSX.Element => (
  <React.Fragment>
    <div id='postlist'>
      
    </div>
  </React.Fragment>
)