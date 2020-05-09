import React from 'react';
import PageSlidebar from '../components/PageSlidebar';
import Layout from '../components/layout';
import './archetype.scss';
import SEO from '../components/seo';
import '../carraway/glow/glow.scss';

const SystemSettings = (): JSX.Element => {
  return (
    <Layout>
      <SEO
        title="Angie Yve Chang"
        keywords={[
          `react`,
          `developer`,
          `savage`,
          `javascript`,
          `gatsby`,
          `angiechangpagne`,
          `open-source`,
          `los-angeles`,
          `decentralized`,
          `ethereum`,
          `blockchain-developer`,
          `dApp`,
          `builtinla`,
        ]}
      />
    <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='systemsettings' className='systemsettings'>
          <div id='glow' className='glow'> <p> <h1> System Settings </h1> </p> </div>

          <center> <p> {`<Angie.Stack/>`} </p> </center>
          </div>
          <footer> Developer | Futurist | Designer </footer>
        </div>
    </div>
    </Layout>
  )
};


export default SystemSettings;