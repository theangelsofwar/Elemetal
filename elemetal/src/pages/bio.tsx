/* tslint:disable */
import React from 'react'
import Layout from '../components/layout';

//      <button id="glow" className="glow" onClick={handleClick}> Some of My Favorite Quotes </button>

const bio = (props: any): JSX.Element => {
  const handleClick = () => {
    return;
  }

  return (
    <React.Fragment>
    <div id='bio'>
      <p> Welcome to My Digital Ether </p>
      <p> I&#39ve always loved philosophy, applying concepts and theories from different aspects of life to technology. Growing up, I would often contemplate our existence, the idea of void. </p> 
      <p> I&#39ve later came to the conclusion that when you try to understand life, you figure that coding is a much simpler thing to understand...</p>


      <p> Playlist Recommendations: </p>

      <p> Some Awesome articles about our oufuture landscape</p>
      <p> Some enlightening theories about the universe </p>
    </div>
    </React.Fragment>
  )

}
export default bio
