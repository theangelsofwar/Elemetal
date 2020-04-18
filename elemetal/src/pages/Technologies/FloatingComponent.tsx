import React from 'react';
import './styless.css';
import { Box, Heading, Button } from 'rebass';

const quotes=[];
//put in json file, and add to static folder

//incorporate "add a quote" feature to see it float
const FloatingComponent = (): JSX.Element => {
  return (
    <div id='floatingcomponent' className='floatingcomponent'>
      <Heading> </Heading>
    </div>
  )
}



export default FloatingComponent;