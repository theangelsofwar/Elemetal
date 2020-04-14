
SIGN INFREE TRIAL

Yomi Eluwande 
JavaScript Developer. Wannabe Designer and Chief Procrastinator at Selar.co and Worklogs.co
How to set up a TypeScript + Gatsby app
August 14, 2019  9 min read 

how to set up typescript and gatsby app
Gatsby is a free and open-source framework based on React that helps developers build blazing-fast websites and apps. It allows you to build apps using modern web technologies with no headaches at all.

Gatsby also comes shipped with features like server-side rendering and the ability to generate static progressive web apps (PWAs). You get code and data splitting out-of-the-box. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible.

TypeScript is a superset of JavaScript which primarily provides optional static typing, classes, and interfaces. TypeScript lets you catch bugs early thereby making you a more efficient developer, while at the same time leveraging the already existing JavaScript community.

In this article, we’ll take one of the starter Gatsby projects and turn it into a TypeScript app.

How to set up a Gatsby app
To set up the Gatsby app, you’ll first need to install the Gatsby CLI.

The Gatsby CLI tool lets you quickly create new Gatsby-powered sites and run commands for developing Gatsby sites. It can be installed globally by running the command below.

yarn global add gatsby-cli
Once that’s done, the next step would be to create a Gatsby site. As mentioned above, we’ll be using the Gatsby CLI tool to create your first Gatsby site and we’ll be grabbing one of the starter projects to start with – the Gatsby blog starter.

The starter ships with the main Gatsby configuration files you might need to get up and running and also uses GraphQL to fetch the data for the blog.

gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
The command above pulls all the files needed for the blog into a folder and then installs all the required dependencies for the app to work. You can navigate into your new site’s directory and start it up to see if everything works as expected. Run the following commands in your terminal.

cd my-blog-starter
yarn develop
Once the yarn develop command is completed, you can open up a new tab in your browser and navigate to http://localhost:8000 to see the Gatsby app in action.

gatsby starter blog UI
Gatsby and GraphQL
In case you didn’t know what GraphQL is, GraphQL is a query language that allows you to pull data into your website. It’s the interface that Gatsby uses for managing site data.

You can find out more about GraphQL here.

Before we see how Gatsby easily incorporates GraphQL, let’s take a look at some of the files and folders that ships with Gatsby and what they do.

/src: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template.
.prettierrc: This is a configuration file for Prettier. Prettier is a tool to help keep the formatting of your code consistent.
gatsby-browser.js: This file is where Gatsby expects to find any usage of the Gatsby browser APIs (if any). These allow customization/extension of default Gatsby settings affecting the browser.
gatsby-config.js: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc.
gatsby-node.js: This file is where Gatsby expects to find any usage of the Gatsby Node APIs (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
gatsby-ssr.js: This file is where Gatsby expects to find any usage of the Gatsby server-side rendering APIs (if any). These allow customization of default Gatsby settings affecting server-side rendering.
Although I should mention that Gatsby also supports other methods of fetching data i.e you don’t have to use GraphQL. You can use the createPages API to pull unstructured data into Gatsby pages directly, rather than through the GraphQL data layer.

So how does Gatsby fetch data from GraphQL? We can do that by using two methods: Page Query and Static Query.

Page query
Querying data in pages with GraphQL can be done by using Gatsby’s graphql tag.

In the gatsby-config file, at the top of the file (lines 2-10), there’s a bit where information about the site is declared, specifically the siteMetadata object.

siteMetadata: {
  title: `Gatsby Starter Blog`,
  author: `Kyle Mathews`,
  description: `A starter blog demonstrating what Gatsby can do.`,
  siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
  social: {
    twitter: `kylemathews`,
  },
},
We’re going to see how to fetch the data above in a component using GraphQL.

The 404.js file in src/pages folder is an example of how to use page queries to fetch data using GraphQL. If you scroll down to the bottom of the file (lines 24-32), you should see a snippet similar to the one below.

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
The code snippet above is a GraphQL query and we are fetching the site’s siteMetadata info, specifically, the title of the file.

The data retrieved from the query above can then be used in the render function of the component as seen below in the same file.

const { data } = this.props
const siteTitle = data.site.siteMetadata.title
StaticQuery
Querying data in Gatsby using StaticQuery can be done by using StaticQuery, a new API that allows components to retrieve data via GraphQL query. In addition to using StaticQuery, we’ll also use the hooks version of StaticQuery called useStaticQuery.

An example of a component using StaticQuery is the seo.js file located in the src/components folder.

import { useStaticQuery, graphql } from "gatsby"

// ...

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  // ...
}
As you can see in the code block above, we first import the useStaticQuery method from gatsby. The useStaticQuery method allows your React components to retrieve data via a GraphQL query that will be parsed, evaluated, and injected into the component.

The GraphQL query above queries for the site title, description, and author from the gatsby-config.js file.

How to integrate TypeScript into a Gatsby app
To integrate TypeScript into the Gatsby app, we’ll need to install some dependencies.

yarn add gatsby-plugin-typescript
yarn add typescript --dev
gatsby-plugin-typescript is the Gatsby plugin required to be able to change all .js files to .tsx files. It’s responsible for type checking and transpiling TypeScript code.

Once the dependencies are installed, we can add gatsby-plugin-typescript to the gatsby-config.js file (lines 69 – 71).

gatsby-plugin-offline,
gatsby-plugin-react-helmet,
gatsby-plugin-typescript,
Next, add .eslintrc.js and tsconfig.json to the root directory of the codebase. .eslintrc.js contains the set of rules that will help with linting TypeScript files and tsconfig.json contains the set of rules that help determine the behavior of TypeScript in the project.

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off' //
      }
    }
  ]
};