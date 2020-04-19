import React from 'react';
// import './styless.css';
// import { Box, Heading, Button } from 'rebass';

const quotes=[];
//put in json file, and add to static folder

//incorporate "add a quote" feature to see it float
const FloatingComponent = (props: any): JSX.Element => {
  return (
    <React.Fragment>
    <div id='floatingcomponent' className='floatingcomponent'>
      <h1>{props.children}</h1>
    </div>
    </React.Fragment>
  )
}



export default FloatingComponent;