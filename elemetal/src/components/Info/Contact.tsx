import { withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import StyledLink from '../StyledLink';

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
    <a href="https://www.linkedin.com/in/angiechangpagne/"> </a>
    <a href="https://github.com/angiechangpagne"> Github </a>
  </div>
  </React.Fragment>
);

export default Contact;