/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    console.log('new node processing', node.internal.type);
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: 'markdown' });
    console.log(slug);
    createNodeField({
      node, 
      field: 'slug',
      value: slug,
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
      graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }`
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/post.tsx'),
          context : {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })

}
// You can delete this file if you're not using it
// require('source-map-support').install()
// require('ts-node').register({
//   compilerOptions: {
//     module: 'commonjs',
//     target: 'es2017'
//   }
// })

// exports.createPages = require('./src/gatsby/createPages').createPages