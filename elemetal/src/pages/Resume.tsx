import { withPrefix } from 'gatsby';
import PortfolioItem from '../components/PortfolioItem';
import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.scss';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import styled from 'styled-components';
// import { File } from 'graphql-types';

const DownloadURL = styled.a`
  display: none;
`
//<PortfolioItem 
// title='Resume'
// link={withPrefix('../../static/Resume/AngieYveRoaring20sResume.docx')}
// />

const Resume = (): JSX.Element => {

  var numPages = 1;
  var pageNumber = 1;
  const onDocumentLoadSuccess = () => {
    // numPages = 1;
  }

  return (
  <Layout>
  <div id="carraway">
    <PageSlidebar />
        <div id='page-wrap'>
          <div id='resume' className='resume'>
            <Document 
              file={require('../../static/Resume/AngieYveCV.docx.pdf')}
              onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
            </Document>
            <DownloadURL 
              href={require('../../static/Resume/AngieYveCV.docx.pdf')} 
              type="application/pdf"
              > <h2> Resume </h2> </DownloadURL>
          </div>
          <footer> Developer | Futurist | Designer </footer>

    </div>

  </div>
  </Layout>
  )
};


export default Resume;