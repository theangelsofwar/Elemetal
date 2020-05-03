import React from 'react';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import '../carraway/glow/glow.scss';
import './archetype.scss';

import Publications from '../components/Publications';

const publicationsGrid = (): JSX.Element => {

  return (
    <Layout>
      <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='publicationsgrid' className='publicationsgrid'>
            <div id='glow' className='glow'><p><h1> Publications </h1> </p></div> 
            <br />
            <Publications />
            <a href="">    </a>
          </div>
        </div>
      </div>
      <footer> Developer | Futurist | Designer </footer>

    </Layout>
  );
};

export default publicationsGrid;