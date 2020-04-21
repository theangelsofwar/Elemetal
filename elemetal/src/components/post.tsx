import React from 'react';
import { graphql } from 'gatsby';

interface Props {
  data: any
}
export const Post = ({ data }: Props ): JSX.Element => {
  // const post = data.markdownRemark;

  return (
    <React.Fragment>
      <div id='malone'>
      </div>
    </React.Fragment>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         keywords
//       }
//     }
//   }
// `


export default Post;