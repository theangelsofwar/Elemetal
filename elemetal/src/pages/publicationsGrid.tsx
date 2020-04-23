import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.css';

import Publications from '../components/Publications';

const publicationsGrid = (): JSX.Element => {

  return (
    <Layout>
      <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='publicationsgrid' className='publicationsgrid'>
            <h2> Publications </h2>
            <Publications path="/blog" />
            <a href="">    </a>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default publicationsGrid;