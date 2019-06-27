import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import { IntlProvider } from 'contexts/intl/IntlContext';

const queryImage = graphql`
  query {
    allSanityPost {
      edges {
        node {
          slug {
            current
          }
          locale
          title
          description
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const getLocalePath = (locale) => {
  if (locale === 'en') {
    return '';
  }

  return `/${locale}`;
};

const Blog = ({ location }) => (
  <IntlProvider pathname={location.pathname}>
    {({ locale, formatMessage }) => (
      <Layout>
        <SEO
          lang={locale}
          title={formatMessage({ id: 'posts.title' })}
          description={formatMessage({ id: 'meta.description' })}
          keywords={formatMessage({ id: 'meta.keywords' })}
        />
        <section className="section is-size-4-desktop is-size-5-touch">
          <h1 className="title has-text-centered has-text-light">
            <FormattedMessage id="posts.title" />
          </h1>
          <div className="container">
            <hr />
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <StaticQuery
                  query={queryImage}
                  render={(data) => {
                    if (data.errors) {
                      throw data.errors;
                    }

                    const posts = data.allSanityPost.edges.map(({ node }) => (
                      node
                    ));
                    const postsLocale = posts.filter(post => (
                      post.locale === locale
                    ));

                    return (
                      <>
                        {postsLocale.map(post => (
                          <Card
                            key={post.slug.current}
                            title={post.title}
                            subtitle={post.description}
                            link={`${getLocalePath(post.locale)}/blog/${post.slug.current}`}
                            image={(
                              <Image
                                fluid={post.mainImage.asset.fluid}
                                alt={post.title}
                              />
                            )}
                          />
                        ))}
                      </>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  </IntlProvider>
);

Blog.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;
