/* tslint:disable */
import React from 'react'
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import './archetype.css';
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
          <div id='bio' className='bio'>
            <h1> Welcome to My Digital Ether </h1>
            <h6> {'< Angie />'} </h6>
            <p></p>
            <p> I've always loved philosophy, applying concepts and theories from different aspects of life to technology. Growing up, I would often contemplate our existence, the idea of void. </p> 
            <p> I've later came to the conclusion that when you try to understand life, you figure that coding is a much simpler thing to understand...</p>


            <br />
            <section>
            <h5> A Great Reading List For Real Life Inspiration </h5>
            <p> Some Awesome articles about our oufuture landscape</p>

            </section>
            
            
            <p> Playlist Recommendations: </p>

            
            <p> Some enlightening theories about the universe </p>
          </div>
       </div>

    </div>
    </Layout>
  )

}
export default bio
