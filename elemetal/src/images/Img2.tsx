import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Img2 = ({data}: any) => (
  <div>
    <h1> 0101 </h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export default Img2
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "gatsby-icon.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
