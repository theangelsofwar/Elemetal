/* tslint:disable */

// Yve Vestal Titan (YVT Create Logo)
import '../../node_modules/augmented-ui/augmented.css';
// import { Grid, Heading} from '@chakra-ui/core'
import {Web3Provider} from '@ethersproject/providers'
import {useWeb3React} from '@web3-react/core'
// import {Web3Container} from '../containers/Web3Container';
// import Web3 provier context and the wrapper before importing React
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import React, {useEffect, useState} from 'react'
import './styles.scss';
// import bio from '../components/bio';
// import {Box, Flex} from 'rebass'
import Resume from './Resume';
import Technologies from '../components/Technologies';
//<Link to="/page-2/" />
import Showcase from '../components/Showcase';
//    <h1> Angie Chang </h1>
// import Divider from '../components/Divider'
import NavBar, {ElementsWrapper} from 'react-scrolling-nav';
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {useEagerConnect, useInactiveListener} from '../lib/hooks'
import {formatEthAddress} from '../lib/utils'
import About from '../components/About'
import OpenSource from '../components/Projects/OpenSource'
import Publications from '../components/Publications'
import Contact from '../components/Info/Contact';
import PageSlidebar from '../components/PageSlidebar';
// import pkg from '../../package.json';
import QuantumGrid from '../components/QuantumGrid';

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
// } must be on the same page

//<div id='resume' className='item'>
// {/* <Resume />
// </div> */}

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
  const navbarItems = [
    {
      label: 'Home',
      target: 'showcase',
    },
    {
      label: 'About',
      target: 'about',
    },
    {
      label: 'OpenSource',
      target: 'opensource',
    },
    {
      label: 'Publications',
      target: 'publications',
    },
    {
      label: 'Technologies',
      target: 'technologies',
    },
    {
      label: 'Contact',
      taget: 'contact',
    },
  ]
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
      <div id='carraway'>
        <PageSlidebar />
        <div id='page-wrap'>
          <div className="nav-scroll">   
          <NavBar
            items={navbarItems}
            offset={-60}
            duration={500}
            delay={0}
            height={85}
            backgroundColor='rgba(29, 24, 31, 0.872)'
            color='ghostwhite'
            coverWidth={`100%`}
            navWidth={`65%`}
            linkClass='link'
            activeLinkClass='activeLink"'
          />
          </div>

          <div id='container' className='container'>s
            <ElementsWrapper 
              items={navbarItems}>
              <div id='showcase' className='item'>
                <Showcase />
              </div>
              <div id='about' className='item'>
                <About />
              </div>
              <div id='opensource' className='item'>
                <OpenSource />
              </div>
              <div id='publications' className='item'>
                <Publications />
              </div>
              <div id='technologies' className='item'>
                <Technologies />
              </div>
              <div id='contact' className='item'>
              <Contact />
              </div>
            </ElementsWrapper>
          </div>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage
