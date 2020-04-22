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
            <h1> {'< Angie />'} </h1>
            <br />
            <hr />
            <h1>Hi There, </h1>
            <p> My name is Angela, but you can call me Angie. I am a Frontend and Fullstack Developer based in Los Angeles, CA.  I work predominantly with React, Typescript, GraphQL and Progressive Web Apps as well as Node Express, MongoDB, PostgresQL. </p>
            <br />
            <p> Besides Technology, I am fascinated by philosophy, architecture, design, and I try to live by the idea of applying concepts and patterns from different walks of life and embed those ideas into technology. Growing up, I would often contemplate our existence, the very idea of </p>  <b><h1> a void. </h1></b>
            <p> I've later reached the conclusion that when you try to understand life, you figure that coding is a much simpler thing to understand... I then realized that my aim in life is to push past the edges of reality. </p>
            
            <p> Born and Raised in a small bubble of a suburb right outside of Manhattan, I quickly moved to Los Angeles after College because deep down I knew that I am a Californian at heart. I wasn't wrong! </p>
            <p> Hollywood and the growth in Tech in this amazing city is what excites and inspires me. My original background is in Fintech and Java, thought these days I have become engrossed by Javascript in the Web, especially with flux architecture patterns like React and Redux. </p>
            <p> I believe that Programming is like an Art form, and Art is what life is all about. </p>
            <p> I have also been intrigued by blockchain technology, designing decentralized systems and applications with React, Typescript, GraphQL merging major Web2 patterns into Solidity Smart Contracts, AssemblyScript and Rust Programming Language. I am excited to see what the future of the decentralized Internet will hold and eager to take that step in joining the movement. </p> 
            
            <p> Here are some of the technologies I enjoy using(in no particular order): </p>
            <br />
            <section>




            <h5> A Great Reading List For Real Life Inspiration </h5>
            <p> Some Awesome articles about our oufuture landscape</p>

            </section>
            
            
            <p> Playlist Recommendations: </p>

            
            <p> Some enlightening theories about the universe </p>
            <p> Remember to stay #WOKEAF </p>
          </div>
       </div>

    </div>
    </Layout>
  )

}
export default bio
