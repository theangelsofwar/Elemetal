/* tslint:disable */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
const contactInqueries = ():JSX.Element => {

  const handleClick = () => {
    //mail to my email, insert message from their text body and sent it behind the scenes, inquiry Q/A
  }

  return (
    <Layout>
    <div id='contactinqueries' className='contectinqueries'>
      <section>
      <h1> Contact for Queries </h1>
      <text></text>
      <button onClick={handleClick}> Send It </button>
      </section>
    </div>
    </Layout>
  )
}

export default contactInqueries;