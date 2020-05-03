import { withPrefix } from 'gatsby';
// import PortfolioItem from '../components/PortfolioItem';
import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.scss';
// import { Document, Page } from 'react-pdf';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
import '../carraway/glow/glow.scss';
import './archetype.scss';
import styled from 'styled-components';
// import { File } from 'graphql-types';
// <Document 
// file={require('../../static/Resume/AngieYveCV.docx.pdf')}
// onLoadSuccess={onDocumentLoadSuccess}
// >
//   <Page pageNumber={pageNumber} />
// </Document>
// <DownloadURL 
// href={require('../../static/Resume/AngieYveCV.docx.pdf')} 
// type="application/pdf"
// > <h2> Resume </h2> </DownloadURL>
{/* <PDFDownloadLink document={require(`../../static/Resume/YveAngieCV.docx.pdf`)}
fileName='AngieYveResume.pdf'
style={{
  textDecoration: "none",
  padding: "10px",
  color: "darkslategray",
  backgroundColor: "ghostwhite",
  border: "1px solid #4a4a4a"
}}
>
Download Resume PDF
</PDFDownloadLink> */}

const DownloadURL = styled.a`
  display: none;
`
//<PortfolioItem 
// title='Resume'
// link={withPrefix('../../static/Resume/AngieYveRoaring20sResume.docx')}
// />

const Resume = (): JSX.Element => {


  return (
  <Layout>
  <div id="carraway">
    <PageSlidebar />
        <div id='page-wrap'>
          <div id='resume' className='resume'>
            <div id='glow' className='glow'> <p> <h1> Resume </h1> </p> </div>
            <br />
            <center>
            <img src={require('../../static/Img/yveResume.jpg')} alt='resume'/>
            <a
              rel='noopener noreferrer'
              href={require('../../static/Resume/YveAngieCV.docx.pdf')}
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