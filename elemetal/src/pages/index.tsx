import './styles.scss'
// Yve Vestal Titan (YVT Create Logo)
import '../../node_modules/augmented-ui/augmented.css'

import {Box, Grid, Heading} from '@chakra-ui/core'
import {Web3Provider} from '@ethersproject/providers'
import {useWeb3React} from '@web3-react/core'
// import {Web3Container} from '../containers/Web3Container';
// import Web3 provier context and the wrapper before importing React
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import React, {useEffect, useState} from 'react'

import bio from '../components/bio'
//    <h1> Angie Chang </h1>
// import Divider from '../components/Divider'
// <About />
import Image from '../components/image'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/seo'
import {useEagerConnect, useInactiveListener} from '../lib/hooks'
import {formatEthAddress} from '../lib/utils'
import About from './About/About'
import OpenSource from './Projects/OpenSource'
import Publications from './Publications'

// import pkg from '../../package.json';

// augmented ui
// Homepage
// HE110, {formatEthAddress(account)}!
// interface iProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string;
//         name: string;
//       },
//     },
//   };
// }
// <Box> </Box> <Box />  <Grid> </Grid>

export const indexPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = (props: any): JSX.Element => {
  const {connector, account} = useWeb3React<Web3Provider>()

  // handle logic to recognize connector activated
  const [activatingConnector, setActivatingConnector] = useState()
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  const triedEager = useEagerConnect()
  // handle eager activation
  useInactiveListener(!triedEager || !!activatingConnector)
  // const { data } = props;
  // const siteTitle = data.site.siteMetadata.title;
  // const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO
        title="Yve Vestal Titan"
        keywords={[
          `react`,
          `developer`,
          `savage`,
          `javascript`,
          `gatsby`,
          `angiechangpagne`,
          `open-source`,
          `los-angeles`,
          `decentralized`,
          `dApp`,
          `builtinla`,
        ]}
      />
      <Navbar />
      <Link to="/page-2/" />
      <p> Welcome to The Digital Ether </p>
    </Layout>
  )
}

export default IndexPage
