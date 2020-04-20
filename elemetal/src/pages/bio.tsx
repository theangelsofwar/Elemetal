/* tslint:disable */
import React from 'react'
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
//      <button id="glow" className="glow" onClick={handleClick}> Some of My Favorite Quotes </button>

const bio = (): JSX.Element => {
  const handleClick = () => {
    return;
  }

  return (
    <Layout>

    <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='bio'>
            <p> Welcome to My Digital Ether </p>
            <p> I've always loved philosophy, applying concepts and theories from different aspects of life to technology. Growing up, I would often contemplate our existence, the idea of void. </p> 
            <p> I've later came to the conclusion that when you try to understand life, you figure that coding is a much simpler thing to understand...</p>

            <p> Playlist Recommendations: </p>

            <p> Some Awesome articles about our oufuture landscape</p>
            <p> Some enlightening theories about the universe </p>
          </div>
       </div>

    </div>
    </Layout>
  )

}
export default bio
