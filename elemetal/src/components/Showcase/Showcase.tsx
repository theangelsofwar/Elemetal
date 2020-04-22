import React from 'react';
import './styless.scss';

const Showcase = (): JSX.Element => (
  <React.Fragment>
  <div id='showcase' className='showcase'>
    <h1> {'< '} Angie {' />'} </h1>
    <p> <br/></p>
    <h3> Software Developer </h3>
    <span id='lalocals' className='lalocals'> <p> Los Angeles, CA </p> </span>
  </div>
  </React.Fragment>
)

export default Showcase;