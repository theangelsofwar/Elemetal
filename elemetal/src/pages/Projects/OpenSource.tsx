/* tslint:disable */

import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
// import { Grid } from 'evergreen-ui';
const OpenSource = (): JSX.Element => (
  <div id="os">
    <Card 
      photo={("../../images/ProjectArtemis.jpg")} 
      title="Artemis Developer Tools: For REST To GraphQL Migration Testing"
      link={{
        url: "https://chrome.google.com/webstore/detail/project-artemis/gpncgocimlpojfgbphndpjgkkhdjhnpb?hl=en",
        title: "Accelerated By OS Labs"
      }}
      description="An Apollo GraphQL Tool to expedite Developer experience when migrating from REST To GraphQL"
      />
    <Card 
      photo={("../../images/escalate.jpg")} 
      title="Auction Client - Karl Lagerfeld" 
      link={{
        url: "",
        title: ""
      }}
    />
    <Card 
      photo={("../../images/escalate.jpg")}
      title="Codechella" 
      link={{
        url: "",
        title: "Codechella-Built With React Native and Expo CLI"
      }}
      description="Codechella: Music Festival Updates for Mobile"
      />
    <Card 
      photo={("../../images/escalate.jpg")} 
      title="Code Press: A Virtualized News Stand" 
      link={{
        url: "",
        title: "Virtualized Code Press"
      }}
      description="Filter Out The Fake News and visualize your information in a Virtual News Stand Aggregator from multiple subscribed streams and topics"
    /> 
    <Card 
      photo={("../../images/escalate.jpg")}
      title="Verifire-Track California Wild Fires on the Map in Real Time"
      link={{
        url: "",
        title: "Verifire-Track California Wild Fires on the Map in Real Time"
      }}
      description="Verifire-Track California Wild Fires on the Map in Real Time, using React, Socket IO, Maps API"
      />
    <Card 
      photo={("../../images/escalate.jpg")}
      title="Vote-aire A Decentralized Voting App for Equality"
      link={{
        url: "",
        title: "Vote-aire, Truthful Voting in the Enlightened Digital Age"
      }}
      description="Vote-aire is an Enlightened way of Voting, demonstrated on the the Ethereum Blockchain, with use of IPFS as a way to open the portal to equality through decentralized systems. For more information, see Project Red Ether"
      />
      <Card 
      photo={("../../images/escalate.jpg")}
      title="Vote-aire A Decentralized Voting App for Equality"
      link={{
        url: "",
        title: "Vote-aire, Truthful Voting in the Enlightened Digital Age"
      }}
      description="Vote-aire is an Enlightened way of Voting, demonstrated on the the Ethereum Blockchain, with use of IPFS as a way to open the portal to equality through decentralized systems"
      />
  </div>
)

export default OpenSource;
