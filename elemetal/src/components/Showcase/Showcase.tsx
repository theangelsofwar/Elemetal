import React from 'react';
import '../../carraway/glow/glow.scss';

import './styless.scss'; //add glow first


const Showcase = (): JSX.Element => (
  <React.Fragment>

  <div id='showcase' className='showcase'>
    <h1> {'<'}Angie{'/>'} </h1>
    <p> <br/></p>
    <div id='glow' className='glow'>
    <p> <h3>Software Developer </h3></p>
    <span id='lalocals' className='lalocals'> <p> Los Angeles, CA </p> </span>
    </div>
  </div>
  </React.Fragment>
)

export default Showcase;