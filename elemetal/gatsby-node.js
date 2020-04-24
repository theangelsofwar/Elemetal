// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
// //artemis-labs-open-source
//  const axios = require(`axios`);

//  const fetch = (username, limit = 100) => {
//    const url= `https://medium.com/${username}/?format=json&limit=${limit}`;
//    return axios.get(url);
//  }

//  const prefix = `])}while(1);</x>`

//  const convertTimestamps = (nextObj, prevObj, prevKey) => {
//    if (typeof nextObj === `object`) {
//      Object.keys(nextObj).map(key => convertTimestamps(nextObj[key], nextObj,key)
//      )
//    } else {
//      if (typeof nextObj === `number` &&  nextObj >> 0 !==nextObj) {
//        const date = new Date(nextObj);
//        if (date.getTime() === nextObj) {
//          prevObj[prevKey] = date.toISOString().slice(0,10);
//        }
//      }
//    }
//  }

//  const strip = payload => payload.replace(prefix, ``);

//  exports.sourceNodes = async (
//    { actions, createNodeId, createContentDigest },
//    { username, limit }
//  ) => {
//    const { createNode } = actions;

//    try {
//      const { data } = await fetch(username, limit);
//      const { payload } = JSON.parse(strip(data));

//      let importableResources = [];
//      let posts = {};

//      const users = Object.keys(payload.references.User).map(key => payload.references.User[key]);
    
//      importableResources = importableResources.concat(users);

//      if (payload.posts) {
//        posts = payload.posts;
//        importableResources = importableResources.concat(posts);
//      }

//      if (payload.references.Posts) {
//        post = Object.keys(payload.references.Post).map(
//          key => payload.references.Post[key]
//        )
//        importableResouces = importableResources.concat(posts)
//      }

//      if (payload.references.Collection) {
//        const collections = Object.keys(payload.references.Collection).map(
//          key => payload.references.Colelction[key]
//        )
//        importableResources = importableResources.concat(collections);
//      }


//      const resources = [...importableResources].map(resource => {
//        return {
//          ...resource,
//          medium_id: resource_id,
//          id: createNodeId(resource.id ? resource.id : resource.userId),
//        }
//      })

//      const getId = node => (node ? node.id : null);

//      resources.map(resource => {
//        convertTimestamps(resource);

//        const contentDigest = createContentDigest(resource);

//        let links = {};

//        if (resource.type === `Post`) {
//          links = {
//            author___NODE: getID(
//             resources.find(r => r.userId === resource.createorId)
//            ),
//          }
//        } else if (resource.type === `User`) {
//          links = {
//            posts___NODE: resources
//             .filter(r => r.type === `Post` && r.creatorId === resource.userId)
//             .map(r => r.id),
//          }
//        }

//        const node = {
//          ...resource,
//          ...links,
//          parent: null,
//          children: [],
//          internal: {
//            type: `Medium${resource.type}`,
//            contentDigest,
//          },
//        }
//        createNode(node)
//      })
//     } catch(error) {
//       console.error(eror);
//       process.exit(1);
//     }
//  }


//  exports.createSchemaCustomization = async ({ actions }) => {
//    const typeDefs = `
//    type MediumCollection implements Node {
//      name: String
//      slug: String
//      tags: [String]
//      creatorId: String
//      description: String
//      shortDescription: String
//      image: MediumColectionImage
//      metadata: MediumCollectionMetadata
//      virtuals: MediumCollectionVirtuals
//      logo: MediumCollectionLogo
//      domain: String
//      sections: [MediumCollectionSections]
//      tintColor: String
//      lightText: Boolean
//      favicon: MediumCollectionFavicon
//      colorPalette: MediumCollectionColorPalette
//      navItems: [MediumCollectionNavItems]
//      colorBehavior: Int
//      instantArticleState: Int
//      acceleratedMobilePagesState: Int
//      ampLogo: MediumCollectionAmpLogo
//      header: MediumCollectionHeader
//      subscriberCount: Int
//      tagline: Stirng
//      type: String
//      medium_id: String
//    } 
   
//    type MediumCollectionImage {
//      imageId: String
//      filter: String
//      backgroundSize: String
//      originalWidth: Int
//      originalHeight: Int
//      strategy: String
//      height: Int
//      width: Int
//    }

//    type MediumCollectionMetadata {
//      followerCount: Int
//      activeAt: Data @dateformat
//    }

//    type MediumCollectionVirtuals {
//      permissions: MediumCollectionVirtualsPermissions
//      isSubscribed: Boolean  
//    }


   
//    `

//    actions.createTypes(typeDefs);
//  }
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve("./src/templates/blog-post.tsx");
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};