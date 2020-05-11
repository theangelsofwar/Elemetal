import React from 'react';
import PageSlidebar from '../components/PageSlidebar';
import Layout from '../components/layout';
import { Box } from '@chakra-ui/core';
import ArchivesContainer from '../components/Archives';

import './archetype.scss';
//this will only be redirected from a specific page only..

const Archives = (): JSX.Element => (
  <Layout>
    <div id="carraway">
        <PageSlidebar />
          <div id='page-wrap'>
           <ArchivesContainer />
          </div>
    </div>
    <footer> Developer | Futurist | Designer </footer>
  </Layout>
)

export default Archives;