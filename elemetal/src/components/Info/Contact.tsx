import React from 'react';
import Helmet from 'react-helmet';
import StyledLink from '../StyledLink';
import { Link } from 'gatsby';
import './styles.scss';
//<StyledLink className="b" href="mailto:yvevestal@gmail.com" >
// Email
// </StyledLink>
//<StyledLink className="b" href="https://github.com/angiechangpagne" >
// Github Open Source
// </StyledLink>
//add new Logo YVT

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