import React from 'react';
import FloatingComponent from './FloatingComponent'


const Technologies = (): JSX.Element => (
  <React.Fragment>
  <div id="technologies" className="techno">
    <h3> Technologies: </h3>
            <br />
             <ul>
              <li>
                Javascript(ES6), HTML5, CSS3, Typescript, React, Redux
              </li>
              <li> GraphQL, Webpack, Material-UI, Apollo, REST API </li>
              <li>
                Node, Express, MongoDB, AWS, Docker, Jest, Enzyme
              </li>
              <li> BCrypt, JWT, OAuth, Git, Babel, Web Sockets </li>

            </ul>

    <FloatingComponent />
  </div>
  </React.Fragment>
  
);

export default Technologies;