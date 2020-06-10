import React from 'react';
import { Link } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import './styles.scss';

const Contact = (): JSX.Element => (
  <React.Fragment>
  <div id='contact' className='contact'>
    <div id='glow' className='glow'> <p> <header> Contact for Queries </header> </p> </div>
      <a href="https://www.linkedin.com/in/angelsofwar/"> <u> LinkedIn </u> </a>
      <br />
      <a href="https://angel.co/u/angelsofwar" > <u> Angelist </u> </a>
      <br />
      <a href="https://github.com/theangelsofwar"> <u> Github </u> </a>
      <br />
      <TransitionLink activeClass='active' className='transition-link' to='/contactInqueries/'> <u> Send a FAX Message </u> </TransitionLink>
  </div>
  </React.Fragment>
);

export default Contact;