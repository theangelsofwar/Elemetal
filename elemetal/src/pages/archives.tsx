import React from 'react';
import PageSlidebar from '../components/PageSlidebar';
import Layout from '../components/layout';
//this will only be redirected from a specific page only..

const Archives = (): JSX.Element => (
  <Layout>
    <div id="carraway">
        <PageSlidebar />
          <div id='page-wrap'>
            <div id='archives'>
              <p> Yve Vestal Titan Archives </p>
            </div>
          </div>
    </div>
  </Layout>
)

export default Archives;