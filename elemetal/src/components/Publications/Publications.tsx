import React from 'react'
import {Box} from 'rebass'
import styled from 'styled-components'
import PortfolioItem from '../PortfolioItem';
import { useStaticQuery, graphql, Link } from 'gatsby';
import GlassCard from '../GlassCard';
import { MarkdownRemarkConnection } from 'graphql-types';

// import Fade from 'react-reveal/Fade';
// import icon
// const Background = () => (
  // <PortfolioItem 
  // title="The New Classical Age of GraphQL"
  // link="https://www.medium.com/"
  // />
// )

// const mediumCDNUrl = `https://cdn-images-1.medium.com/max/150/`

const Publications = (): JSX.Element => {
  const data = {
    allMarkdownRemark: MarkdownRemarkConnection;
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { eq: false } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
            timeToRead
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <React.Fragment>
      <div className="blog-list">
        {posts.map(
          ({ node }: any): React.ReactElement => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <GlassCard 
                key={node.fields.slug}
                title={title}
                slug={node.fields.slug}
                description={node.frontmatter.description || node.excerpt}
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
              />
            )
        }
      )};
      </div>
      </React.Fragment>
  );
};

export default Publications;