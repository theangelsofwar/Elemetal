import { withPrefix } from 'gatsby';
import PortfolioItem from '../../components/PortfolioItem';
import React from 'react';
import Layout from '../../components/layout';

const Resume = ():JSX.Element => (
  <Layout>
  <div id='resume' className='resume'>
    <PortfolioItem 
      title='Resume'
      link={withPrefix('../../static/Resume/AngieYveRoaring20sResume.docx')}
     />
  </div>
  </Layout>
);


export default Resume;