import React from 'react';
//only pages will have Layout component, specify from page creator plugin
import { graphql } from 'gatsby';
import Card from '../components/Card';
// import { Link } from 'gatsby';
import { Grid } from '@chakra-ui/core';
//styles
import SEO from '../components/seo';
import Layout from '../components/layout';
import PageSlidebar from '../components/PageSlidebar';
import '../carraway/glow/glow.scss';
import './archetype.scss';
//add ufo logo for home icon
//retro futuristic wave.net
// interface Props {
//   data: any
// }

export const opensourceGrid = (): JSX.Element => {

  return (
    <Layout>
    <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
            <br />
         
         <div id='glow' className='glow'> <p> <header> Open Source Projects </header> </p> </div>
          <SEO title="Open Source Projects" />
          <div id='opensourcegrid' className='opensourcegrid'>
        
          <section>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Card 
            photo={require("../images/ProjectArtemis.jpg")} 
            title="Artemis Developer Tools: For REST To GraphQL Migration Testing"
            link={{
              url: "https://chrome.google.com/webstore/detail/project-artemis/gpncgocimlpojfgbphndpjgkkhdjhnpb?hl=en",
              title: "Accelerated By OS Labs"
            }}
            description="An Apollo GraphQL Tool to expedite Developer experience when migrating from REST To GraphQL"
            />
          <Card 
            photo={require("../images/KarlGallery.jpg")}
            title="Auction Client - Karl Lagerfeld" 
            link={{
              url: "https://github.com/angiechangpagne/SilentAuction",
              title: "Silent Auction: A Repository for Karl Lagerfeld"
            }}
            description="Silent Auction-to honor the works of the Icon Karl Lagerfeld's work in the fashion industry and in society"
          />
          <Card 
            photo={require("../images/codechella.jpg")}
            title="Codechella"
            link={{
              url: "https://github.com/MuseGroup/concertify",
              title: "Codechella-Built With React Native and Expo CLI"
            }}
            description="Codechella: Music Festival Updates for Mobile"
            />
          <Card 
            photo={require("../images/codepress.jpg")} 
            title="Code Press: A Virtualized News Stand" 
            link={{
              url: "https://github.com/Evpress/Ephemeral",
              title: "Virtualized Custom News Stand: Code Press"
            }}
            description="Filter Out The Fake News and visualize your information in a Virtual News Stand Aggregator from multiple subscribed streams and topics"
          /> 
          <Card 
            photo={require("../images/verifire.jpg")}
            title="Verifire-Track California Wild Fires on the Map in Real Time"
            link={{
              url: "https://github.com/EvaQate/Verifire",
              title: "Verifire-Track California Wild Fires on the Map in Real Time"
            }}
            description="Verifire-Track California Wild Fires on the Map in Real Time, using React, Socket IO, Maps API"
            />
        
            <Card 
            photo={require("../images/voltaire.jpg")}
            title="Vote-aire A Decentralized Voting App for Equality"
            link={{
              url: "",
              title: "Vote-aire, Truthful Voting in the Enlightened Digital Age"
            }}
            description="Vote-aire is an Enlightened way of Voting, demonstrated on the the Ethereum Blockchain, with use of IPFS as a way to open the portal to equality through decentralized systems"
            />
            <Card 
            photo={require("../images/Ethermint.jpg")}
            title="Oil Rig: An Ethereum Mine"
            link={{
              url: "",
              title: "Oil Rig: A Decentralized Ethereum React Application"
            }}
            description="Coming Soon..."
            />
          <Card 
            photo={require("../images/ProjectRedEther.jpg")}
            title="Project Red Ether: A Decentralized Development"
            link={{
              url: "",
              title: "Project Red Ether: What is Project Red Ether?"
            }}
            description="Coming Soon..."
            />
            <Card 
            photo={require("../images/cybertruck.jpg")}
            title=""
            link={{
              url: "",
              title: "AIRE: A Decentralized micro blog platform"
            }}
            description="To AIRE is to Human... Production Coming Soon..."
            />
          </Grid>
          <br />

          </section>
          <center><div id='glow' className='glow'> <p>  The Future is Distributed among the humans  </p></div></center>

        </div>
        <footer> Developer | Futurist | Designer </footer>

      </div>
    
    </div>
    </Layout>
  )
};

export default opensourceGrid;