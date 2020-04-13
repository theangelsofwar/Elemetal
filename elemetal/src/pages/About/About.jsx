import React from 'react';
import { scroller } from 'react-scroll';



export const About = () => {
  //technology logos
  const techLogos = []; //store images of technology logos to render clear,
  //have them float on the bottom
  //techLogos.map() render onto Flooating Clear Components horizontally
  return (
    <div id='about'>

    <hr></hr>

    <p> Technologies: </p>
    <FloatingComponent/>
    </div>
  )
};

export default About;