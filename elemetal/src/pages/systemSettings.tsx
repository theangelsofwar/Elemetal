import React from 'react';
import PageSlidebar from '../components/PageSlidebar';
import Layout from '../components/layout';
import './archetype.scss';
import '../carraway/glow/glow.scss';
const SystemSettings = (): JSX.Element => {
  return (
    <Layout>
    <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='systemsettings' className='systemsettings'>
          <div id='glow' className='glow'> <p> <h1> System Settings </h1> </p> </div>

          <center> <p> {`<Angie . Stack/>`} </p> </center>
          </div>
          <footer> Developer | Futurist | Designer </footer>
        </div>
    </div>
    </Layout>
  )
}


export default SystemSettings;