import { withPrefix } from 'gatsby';
import PortfolioItem from '../../components/PortfolioItem';
import React from 'react';
import Layout from '../../components/layout';
import PageSlidebar from '../../components/PageSlidebar';

const Resume = (): JSX.Element => (
  <Layout>
  <div id="carraway">
    <PageSlidebar />
        <div id='page-wrap'>
          <div id='resume' className='resume'>
            <PortfolioItem 
              title='Resume'
              link={withPrefix('../../static/Resume/AngieYveRoaring20sResume.docx')}
            />
          </div>
    </div>
  </div>
  </Layout>
);


export default Resume;