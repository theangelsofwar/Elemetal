/* tslint:disable */
// import '../../node_modules/augmented-ui/augmented.css';
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import '../fonts/Vogue.ttf';
import React from 'react';
// import bio from '../components/bio';
// import {Box, Flex} from 'rebass'
// import Resume from './Resume';
import Technologies from '../components/Technologies';
//<Link to="/page-2/" />
import Showcase from '../components/Showcase';
// import Divider from '../components/Divider'
import NavBar, {ElementsWrapper} from 'react-scrolling-nav';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {useEagerConnect, useInactiveListener} from '../lib/hooks';
import {formatEthAddress} from '../lib/utils';
import About from '../components/About/About';
import OpenSource from '../components/Projects/OpenSource';
import Publications from '../components/Publications';
import Contact from '../components/Info/Contact';
import PageSlidebar from '../components/PageSlidebar';
import '../carraway/glow/glow.scss';
import './styles.scss';

// augmented ui

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
        title="Angie Chang"
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
          `ethereum`,
          `blockchain-developer`,
          `dApp`,
          `builtinla`,
        ]}
      />

      <div id="carraway">
        <PageSlidebar />
        <div id='page-wrap'>
      
          <div className='nav-scroll'>   
          <NavBar
            items={navbarItems}
            offset={-60}
            duration={200}
            delay={0}
            height={115}
            backgroundColor={`#061716`}
            color={'ghostwhite'}
            coverWidth={`117`}
            navWidth={`96`}
            linkClass={'link'}
            activeLinkClass={'activeLink'}
          />
          </div>
          
          <div id='container' className='container'>
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
      
        <footer>
          © {new Date().getFullYear()},  Copyright {`Angels Of War`}
          <a href="https://www.angiechangpagne.com">{`<Angie Chang/>`}</a>
          <br />
          Sent from Mars 
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
