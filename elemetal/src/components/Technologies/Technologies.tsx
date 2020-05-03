import React from 'react';
import FloatingComponent from './FloatingComponent'
import './styles.css';

const Technologies = (): JSX.Element => (
  <React.Fragment>
  <div id="technologies" className="techno">
    <div id='glow' className='glow'> 
    <p> 
      <header> Technologies: </header>
    </p> 
    </div>

            <br />
             <ul>
              <li>
                Javascript(ES6), HTML5, CSS3, Typescript, React, React-Router, Redux
              </li>
              <li> GraphQL, Webpack, Material-UI, Apollo, REST API , Gatsby </li>
              <li>
                Node, Express, MongoDB, PostgreSQL, AWS, Docker, Kubernetes, Jest, Enzyme
              </li>
              <li> BCrypt, JWT, OAuth, Git, Babel, Web Sockets, Travis CI </li>

              <li> Solidity, Ethereum, Blockchain, decentralized React Applications</li>

            </ul>

    <FloatingComponent />
  </div>
  </React.Fragment>
  
);

export default Technologies;