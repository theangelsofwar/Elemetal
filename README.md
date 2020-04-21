# Elemetal Into the Ether
 欢迎来到未来 | 庚子 |  这是一场革命

Elemetal V1. A futuristic aesthetic

1st Iteration of My Web2 site(Web3 will be a dApp)

"Gatsby? What Gatsby?"


Gatsby-amazing React Library for Progressive Web Apps and Speedy Static Sites
>Great for eCommerce solutions because of its SEO functionality
>Static sites that have separation concerns from business logic avoid SQL injection attacks
>Call to external APIs
>Great for Blogs, Portfolio Sites, Discussion Boards, Mailing 
>able to configure with graphql through static query an build asset loading
>Good CICD
>Funny story, I checked what the Gatsby site is built with and it was actually Angular...

Starting Point: Gatsby Config

Tech Used:
React.js
Web3 for React
Fortmatic
Gatsby.js(significant speed increase, leveraging GraphQL)
Netlify
augmented-ui
Carbon Components
Lambda Components
Jest Unit testing

Typescript-Superset of Javascript(though not necessary), better for closer interaction to underlying graphQL built into Gatsby, better conversion rates
> npm install typescript --dev
> npm install -g @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint

Gatsby Files:
gatsby-browser.js
gatsby-config.js : Querying GraphQL in Gatsby:
gatsby-node.js : Node API
gatsby-ssr.js : Server Side Render API


Important Gatsby Plugins: 
npm install:
> npm install gatsby-plugin-typescript 
  -adds transpiler
>npm install gatsby-plugin-react-helmet
>npm install @types/react-helmet
  -used for Site Meta data and SEO optimizations
>npm install gatsby-image
  -lazy loading of images

<Link />
Internal Links are faster due to lazy loading

Hooks: 
useStaticQuery
useWeb3React

Query on localhost:8000/___graphql (three underscores)
>frontmatter
>markdown remark plugin

There are two Versions of this current version of my Gatsby Portfolio site-
>One of them is centralized
>One of them is decentralized

For Browser Configuration:
>npm install @ethersproject/providers
>npm install @web3-react/core

>npm install gatsby-plugin-dat dat 
Pinning Content to Hashbase:
> plugins: [
  {
    resolve: `gatsby-plugin-dat`,
    options: {
      pinning_service: {
        domain: 'https://hashbase.io/',
        // If your pinning service does not need authentication,
        // you can omit these fields.
        username: 'YOUR USERNAME HERE',
        password: 'YOUR PASSWORD HERE',
      },
    },
  },
];


Handling Ethereum Events:
>hooks.ts file in lib folder


Fortmatic: For integrating a dApp into the Ethereum Blockchain(currently in testing mode)
> npm i --save fortmatic@latest
For more information, check out:
https://docs.fortmatic.com/web3-integration 

What is 

Interplanetary File Transfer(IPFS)


My Bigger Project-Project Ether:
>Join The Movement
>Great Resources
>My Current Development in dApp and the Red Ether
>Contribute

Optimizing SEO and Metadata:



Run: 
gatsby-develop
>Links to Gatsby's internal development server, located in East Egg. 

Build Deploy:
>gatsby build
>gatsby serve
>netflify, has custom domain, currently I am using Web2, but later will be hosting static files to IPFS and get an ENS domain

Other options:
> npm install --global surge
> surge


Im going to do a post on the underlying theories and workings behind Gatsby, look into how they bundle their webpack, as it has even more Abstractions from Javascript than Angular does!



Next:
Google Analytics(Do not go overboard)

Tumblr


