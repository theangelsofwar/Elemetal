import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Img2 = ({data}: any): JSX.Element => (
  <div>
    <h1> 0101 </h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export default Img2
