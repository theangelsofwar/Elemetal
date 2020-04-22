import { withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import StyledLink from '../StyledLink';
import { Link } from 'gatsby';
//<StyledLink className="b" href="mailto:yvevestal@gmail.com" >
// Email
// </StyledLink>
//<StyledLink className="b" href="https://github.com/angiechangpagne" >
// Github Open Source
// </StyledLink>
//add new Logo YVT

const Contact = (): JSX.Element => (
  <React.Fragment>
  <div id='contact'>
  <h5> Contact for Queries </h5>
    <a href="https://www.linkedin.com/in/angiechangpagne/"> LinkedIn </a>
    <a href="" > Angelist </a>
    <br />
    <a href="https://github.com/angiechangpagne"> Github </a>
    <Link to='/contactInqueries/'> Email </Link>
  </div>
  </React.Fragment>
);

export default Contact;