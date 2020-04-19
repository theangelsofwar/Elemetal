import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';

const publicationsGrid = (): JSX.Element => {

  return (
    <Layout>
      <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='publicationsgrid' className='publicationsgrid'>
            <h4> Creative Writing, Poetry, Philosophy </h4>
          </div>

        </div>
      </div>
    </Layout>
  )
};

export default publicationsGrid;