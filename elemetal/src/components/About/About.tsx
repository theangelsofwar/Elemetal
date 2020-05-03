import { withPrefix } from 'gatsby';
import React from 'react'
import Helmet from 'react-helmet'
// import { scroller } from 'react-scroll';
import { Link } from 'gatsby';
//import quote 
// import Logo from '../../components/Icons/logo.svg';
 import './styless.scss';
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
const About = (): JSX.Element => {
  // technology logos
  // const techLogos = []; //store images of technology logos to render clear,
  // have them float on the bottom
  // techLogos.map() render onto Flooating Clear Components horizontally
  return (
    <React.Fragment>
    <div id='about' className='about'>
      <Helmet title={'<angie.stack/>'} />
      <div id='glow' className='glow'>
        <p> <header> Code Through the Edges of Reality </header> </p>
        <center> <p> ___________________________________________ </p>  </center> 
      </div>
      <div id='tao' className='tao'>
        <div id="tao-1" className='tao-1'>
          <p> Hello, My Name is Angie, welcome to my Digital Ether! I am a Frontend and Fullstack Software Developer based in Los Angeles, California.
              I was born and raised in New York, but I am a Californian at heart. I am a huge proponent of React, Typescript, Flux Architectural Patterns, Webpack, GraphQL, and Progressive Web Apps as well as Node Express, MongoDB, PostgresQL and Docker. </p>
          <p> My background is in Java, MVC Architecture, JDBC, Spring Framework and Maven Web Services </p>
          <p> I love contributing to the Open Source community and working with distributed systems and architectures. </p>
          <p> For me, Software Engineering is my way of pushing civilization in a pivotal direction. </p>
          <p> <Link to='/opensourceGrid/'> <u> Check out some of my public projects! </u> </Link> </p>
        </div>
        <img src={require('../../images/toptal.jpg')} alt="Angie.Stack" />            
      </div>
     <hr />
    </div>
    </React.Fragment>
  )
}

export default About
