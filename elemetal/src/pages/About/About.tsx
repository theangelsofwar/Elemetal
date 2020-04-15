import React from 'react'

// import { scroller } from 'react-scroll';
import FloatingComponent from './FloatingComponent'

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
    <div id="about">
      <hr />
      <p> Technologies: </p>
      <FloatingComponent />
    </div>
  )
}

export default About
