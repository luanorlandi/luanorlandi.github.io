const path = require('path');
// const defaultLocale = require('./src/contexts/intl/data/languages');

const getLocalePath = (locale) => {
  if (locale === 'en') {
    return '';
  }

  return `/${locale}`;
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
            locale
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allSanityPost.edges.map(({ node }) => node);

  posts.forEach((post) => {
    actions.createPage({
      path: `${getLocalePath(post.locale)}/blog/${post.slug.current}`,
      component: require.resolve('./src/templates/Post.js'),
      context: {
        slug: post.slug.current,
      },
    });
  });
};
