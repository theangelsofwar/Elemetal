import { withPrefix } from 'gatsby';
// import PortfolioItem from '../components/PortfolioItem';
import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.scss';
import SEO from '../components/seo';
// import { Document, Page } from 'react-pdf';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
import '../carraway/glow/glow.scss';
import './archetype.scss';
import styled from 'styled-components';


const DownloadURL = styled.a`
  display: none;
`


const Resume = (): JSX.Element => {

  return (
  <Layout>
    <SEO
        title="Angela Yve Chang"
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
          <div id='resume' className='resume'>
            <div id='glow' className='glow'> <p> <header> Resume </header> </p> </div>
            <br />
            <center>
            <img src={require('../../static/Img/angelsofwarresume.jpg')} alt='resume'/>
            <a
              rel='noopener noreferrer'
              href={require('../../static/Resume/A17ChangDevCV.pdf')}
              target="_blank"> <u> Resume PDF Download </u>
            </a>
            </center>
            </div>
           <footer> Developer | Futurist | Designer </footer>

    </div>
  </div>
  </Layout>
  )
};


export default Resume;