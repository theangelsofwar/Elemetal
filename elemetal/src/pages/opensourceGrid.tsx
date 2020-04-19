import React from 'react';
//only pages will have Layout component, specify from page creator plugin
import { graphql } from 'gatsby';
import Card from '../components/Card';
import { Link } from 'gatsby';
//styles
import SEO from '../components/seo';
import Layout from '../components/layout';

interface Props {
  data: any
}

export const opensourceGrid = ({ data }: Props): JSX.Element => {
  const opensourcegridlist=data.allProjectsYaml.edges;
  return (
    <Layout>
    
    <div id='opensourcegrid' className='opensourcegrid'>
      <section>
        <Link to="/">
          <b className="showcase"> Home </b>
        </Link>
        <SEO title="Open Source Projects" />
        {opensourcegridlist.map(( { node }: any) => {
          return (
            <Card 
              title={node.title}
              link={node.link}
              description={node.description}
              photo={node.image}
              key={node.id}
            />
          )
        })}
      </section>
      <p>  The Future is Distributed among the humans  </p>

    </div>
    </Layout>
  )
}

export const query= graphql`
  {
    allProjectsYaml {
      edges {
        node {
          id
          title
          description
          photo
          link
        }
      }
    }
  }
`

export default opensourceGrid;