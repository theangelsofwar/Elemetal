/* tslint:disable */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.css';
import { SeeThrough } from 'react-see-through';

import '../carraway/glow/glow.scss';
const contactInqueries = (): JSX.Element => {


  const queryData = "";
  //     firstName,
  //     lastName,
  //     email,
  //     email,
  //     subjectLine,
  //     message
  // };
  const handleClick = () => {
    //mail to my email, insert message from their text body and sent it behind the scenes, inquiry Q/A

  }

  return (
    <Layout>
      <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='contactinqueries' className='contactinqueries'>
          <center><text> Let's Talk Business...</text></center>
            <section>
            <h1> Contact for Queries </h1>
            <form method='post' action='#'>
              <center>
              <div className='form-group'>
              <label>
                {"Name or Alias    "}
              <input type='text' className='firstName' id='firstName' />
              </label>
              </div>

              <div className='form-group'>
              <label>
               {"Email     "}
              <input type='email' className='email' id='email' />
              </label>
              </div>


              <div className='form-group'>
              <label>
                {"Subject Line      "}
                <input type='text' className='subject' id='subject' />
              </label>
              </div>

              <div className='form-group'>
              <label>
               {"Content          "}
                <textarea className='content' id='content' rows={5} />
              </label>
              </div>
             <div className='glow' id='glow'> <a className='email' href="mailto:yvevestal@gmail.com"><button type='submit' onClick={handleClick}>  Send It </button> </a> </div>
              </center>
            </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contactInqueries;