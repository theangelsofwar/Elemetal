import { withPrefix } from 'gatsby';
import PortfolioItem from '../components/PortfolioItem';
import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.css';
import styled from 'styled-components';
import { File } from 'graphql-types';

const DownloadURL = styled.a`
  display: none;
`
//<PortfolioItem 
// title='Resume'
// link={withPrefix('../../static/Resume/AngieYveRoaring20sResume.docx')}
// />

const Resume = (): JSX.Element => (
  <Layout>
  <div id="carraway">
    <PageSlidebar />
        <div id='page-wrap'>
          <div id='resume' className='resume'>
            <DownloadURL 
              href={require('../../static/Resume/AngieYveRoaring20sResume.docx')} 
              type="application/pdf"
              ref={require('../../static/Resume/AngieYveRoaring20sResume.docx')}
              />
          </div>
    </div>
  </div>
  </Layout>
);


export default Resume;