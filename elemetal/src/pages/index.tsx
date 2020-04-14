import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import './styles.css'
import About from "./About/About"
import Layout from "../components/layout"
import Divider from '../components/Divider'
import Image from "../components/image"
import SEO from "../components/seo"
//Yve Vestal Titan (YVT Create Logo)
import '../../node_modules/augmented-ui/augmented.css'; 
//augmented ui
//Homepage 

interface iProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        name: string;
      },
    },
  };
}

// export const indexPageQuery = graphql`
//   query IndexPageQuery {
//     site {
//       siteMetadata {
//         title
//         name
//       }
//     }
//   }
// `;

const IndexPage = ({data}: iProps): JSX.Element => (

    <Layout>
    <SEO title="Yve Vestal Titan" keywords={[`react`,`developer`,`savage`,`javascript`,`gatsby`,`angiechangpagne`,`open-source`,`los-angeles`,`builtinla`]} />
    <h1> Angie Chang </h1>
    <p> Welcome to The Digital Ether </p>
    <About />
    <p></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/"></Link>
  </Layout>
  )


export default IndexPage