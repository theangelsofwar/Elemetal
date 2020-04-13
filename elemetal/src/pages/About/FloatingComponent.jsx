import React from 'react';
import './styless.css';
import { Box, Heading, Button } from 'rebass';

export const FloatingComponent = (props) => {
  return (
    <div id="floatingComponent">
      <Heading fontSize={[5,6,7]}
      color='primary'> {props} </Heading>
    </div>
  )
}

export default FloatingComponent;