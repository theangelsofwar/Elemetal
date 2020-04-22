import React from 'react';
import { graphql } from 'gatsby';

interface Props {
  data: any
}
export const Post = ({ data }: Props ): JSX.Element => {

  return (
    <React.Fragment>
      <div id='malone'>
      </div>
    </React.Fragment>
  )
}


export default Post;