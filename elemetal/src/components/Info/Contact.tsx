import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

const Contact = (): JSX.Element => (
  <React.Fragment>
  <div id='contact' className='contact'>
    <div id='glow' className='glow'> <p> <header> Contact for Queries </header> </p> </div>
 
    <a href="https://www.linkedin.com/in/angiechangpagne/"> <u> LinkedIn </u> </a>
    <br />
    <a href="https://angel.co/u/angiechangpagne" > <u> Angelist </u> </a>
    <br />
    <a href="https://github.com/angiechangpagne"> <u> Github </u> </a>
    <br />
    <Link to='/contactInqueries/'> <u> Send a FAX Message </u> </Link>


  </div>
  </React.Fragment>
);

export default Contact;