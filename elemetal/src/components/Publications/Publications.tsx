import React from 'react';
// import PortfolioItem from '../PortfolioItem';
// import { useStaticQuery, graphql, Link } from 'gatsby';
import GlassCard from '../GlassCard';
import { Grid } from '@chakra-ui/core';
import '../styless.css';

//post preview
  // <PortfolioItem 
  // title="The New Classical Age of GraphQL"
  // link="https://www.medium.com/"
  // /> 


// const mediumCDNUrl = `https://cdn-images-1.medium.com/max/150/`
//
const Publications = (): JSX.Element => (
  <React.Fragment>
    <div className='publications' id='publications'>
      
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GlassCard 
          photo={require("../../images/artemis_publications.jpg")}
          title="Artemis Developer Tool: Testing for Apollo GraphQL"
          link={{
            url: "https://lnkd.in/dV7wVtD",
            title: "A Testing Interface Developer Tool"
          }}
          description="Featured in Developer recommended section"
        />
        <GlassCard 
          photo={require("../../images/projectartemismedium.jpg")}
          title="The New Classical Age of GraphQL: Artemis Developer Tools"
          link={{
            url: "https://medium.com/artemis-labs-open-source/the-new-classical-age-of-graphql-project-artemis-a430c4e6a5c0",
            title: "Project Artemis at OS Labs"
          }}
          description="RESTful architecture, though still relevant, is intensely antiquated in our systems today, in government and in private organizations. "
        />
        <GlassCard 
          photo={require("../../images/vogueReact.jpg")}
          title="Vogue's 73 Questions with React.JS"
          link={{
            url: "https://medium.com/celestial-development/vogues-73-questions-with-react-js-c6c172ccf050?source=friends_link&sk=ba91b29f5c8ba47b10ec1694126061c1",
            title: "Vogue 73 Questions with React"
          }}
          description="Vogue: So you’re a framework, but how did you get started?"
        />
         <GlassCard 
          photo={require("../../images/exodus.jpg")}
          title="A Great Exodus: Making a Migration to Web3"
          link={{
            url: "https://medium.com/red-ether-project/the-exodus-migrating-from-web2-to-web3-how-a-react-app-can-run-on-a-blockchain-2f2ddc7682e9?source=friends_link&sk=ccbcec4db1ef00d681790dbdd5196fb7",
            title: "The Exodus: Migrating from Web2 to Web3 — How a React App can run on a Blockchain"
          }}
          description="Exodus: \a great digital migration; \an escape\"
        />
        <GlassCard 
          photo={require("../../images/redethermanifesto.jpg")}
          title="What is the Red Ether Project?"
          link={{
            url: "https://medium.com/red-ether-project/what-is-the-red-ether-project-e1aefddf010a?source=friends_link&sk=8c29373a6e4501e1d0c44ec36e5f78d4",
            title: "What is the Red Ether?"
          }}
          description="Amid the corona virus and the lack of transparency by the Chinese Government, censorship is a major problem that lies on top of the existing system of cetralized system architecture. 
          The need to reform and for developers to move onto the blockchain is now necessary more than ever.  "
        />
      </Grid>
    </div>
  </React.Fragment>
)

export default Publications;