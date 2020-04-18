import { withPrefix } from 'gatsby';
import React from 'react'
import Helmet from 'react-helmet'
// import { scroller } from 'react-scroll';
//import quote 
// import Logo from '../../components/Icons/logo.svg';
 import './styless.css';
//import quotes, or have the glow quotes click and be a pop over display

// {/* <p> Why I like Frontend Development</p>
//       <ul>
//         <li> Instant Results </li>
//         <li> Less Creativity Cap </li>
//         <li> Individuality </li>
//       </ul>
//     <p> Why Backend is great too...</p>
//     <ul>
//       <li> You think Long Term</li>
//       <li> Server Side Rendering </li>
//       <li> Scaleability</li>
//       <li> It's Hidde in Plain Sight</li>
//     </ul> */}
const About = () => {
  // technology logos
  // const techLogos = []; //store images of technology logos to render clear,
  // have them float on the bottom
  // techLogos.map() render onto Flooating Clear Components horizontally
  return (
    <div id='about' className='about'>
      <Helmet title={'About | angie.stack'} />
      <h1> Cut Through the Edge of Reality</h1>
      <p> Hello, My Name is Angie, I am a Frontend and Fullstack Web Developer </p>
      <p> I was raised in New York, but I am a Californian at heart. I am a huge proponent for React, Typescript, GraphQL, and progressive Web Apps. </p>
      <p> My background is in Java and C++ </p>
      <p> I love contributing to the Open Source community and working with distributed systems and architectures. </p>
      <p> For me, software engineering is my way of pushing civilization in a pivotal direction. </p>
      <p> Check out some of my public projects! </p>
      <p> Coding is like an Art. I like to take inspiration from Architecture, Fashion, Chemistry and Biology when ideating my projects. </p>
     <hr />
    </div>
  )
}

export default About
