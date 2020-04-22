/* tslint:disable */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.css';
const contactInqueries = (): JSX.Element => {

  const handleClick = () => {
    //mail to my email, insert message from their text body and sent it behind the scenes, inquiry Q/A

  }

  return (
    <Layout>
      <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='contactinqueries' className='contactinqueries'>
          <text> Let's Talk Business...</text>
            <section>
            <h1> Contact for Queries </h1>
            <form>

            <button onClick={handleClick}> <a className='email' href="mailto:yvevestal@gmail.com"> Send It </a></button>
            </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contactInqueries;