/* tslint:disable */
import React from 'react'
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
// import Image from '../components/image';
import '../carraway/glow/glow.scss';
import './archetype.scss';


import GlowQuotesContainer from '../components/About/GreatQuotes/GlowQuotesContainer';
//      <button id="glow" className="glow" onClick={handleClick}> Some of My Favorite Quotes </button>
//   <h5> A Great Reading List For Real Life Inspiration </h5>
//{/* <p> Some Awesome articles about our future landscape</p> */}
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
           <div className='glow' id='glow'>
             <p>
               <header> Welcome to My Digital  Ether </header>
  
             <header> {'<Angie/>'}</header> 
              <center>  <p>       ______________</p>  </center>
              <header> Hi There, </header> 
              </p> 
            </div>
            <span id='tao' className='tao'> 
            <p> My name is Angela, but you can call me Angie. I am a Frontend and Fullstack Software Engineer based in Los Angeles, California.  
                I work predominantly with React, Typescript, GraphQL, Webpack and Progressive Web Apps  
                as well as Node Express, MongoDB, PostgresQL, Travis CI and Docker. </p>
                
            <img src={require('../images/toptal.jpg')} alt="Angie.Stack"/>            
            </span>
            <center> <div id='glow' className='glow'> <p>       _____________________________________________</p> </div> </center>
            <br />
            <p> Besides Technology, I am fascinated by philosophy, architecture, design, and I try to live by the idea of applying concepts and patterns from different walks of life and embed those ideas into technology. Growing up, I would often contemplate our existence, the very idea of a  <b> void. </b></p> 
            <p> I've later reached the conclusion that when you try to understand life, you figure that coding is a much simpler thing to understand . . .  I then realized that my aim in life is to push past the edges of reality. </p>
         
            <p> Born and raised in a small bubble of a suburb right outside of Manhattan, I quickly moved to Los Angeles after College because deep down I knew that I am a Californian at heart. I wasn't wrong! </p>
            <p> Hollywood and the growth in Tech in this amazing city is what excites and inspires me. My original background is in FinTech and Java, though these days I have become encapsulated by Javascript in the Web, especially with flux architecturural patterns like React and Redux. </p>
            <p> I believe that Programming is like an Art form, and Art is what life is all about. </p>
            <p> I would also say that I am a futurist, and I like to constantly evolve and change. I believe that we can never be good enough, and we can always do better. I've been quite intrigued by blockchain technology, designing decentralized systems and applications with React, Typescript, GraphQL: merging major Web2 patterns into Solidity Smart Contracts, AssemblyScript and Rust Programming Language. I am excited to see what the future of the decentralized Internet 
              holds and am eager to take that step in joining the movement. </p> 
            
            <p> Here are some of the technologies I enjoy using: </p>
            <center> <div id='glow' className='glow'> <p>       ______________________________ </p> </div> </center> 

            <ul>
              <br />
              <li>
                Javascript(ES6), HTML5, CSS3, Typescript, React, React-Router, React-Hooks, Redux 
              </li>
              <li>
               GraphQL, Webpack, Material-UI, Apollo, REST API, Gatsby
              </li>
              <li>
                Node, Express, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Jest, Enzyme,, Python
              </li>
              <li> 
                BCrypt, JWT, OAuth, Git, Babel, Web Sockets, TravisCI, Firebase, Electron
              </li>
              <li> 
                Solidity, Ethereum, Blockchain, Rust, decentralized React Applications
              </li>
            </ul>
            <center> <div id='glow' className='glow'> <p>     _________________________________ </p></div> </center>
            <br />
            <section>

            </section>
            
            <GlowQuotesContainer />
            <p> Playlist Recommendations: </p>
            <br />

          </div>
          <footer> Developer | Futurist | Designer </footer> 

       </div>

    </div>
    </Layout>
  )

}
export default bio
