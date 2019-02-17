import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';
import { externalLink } from 'constants/paths';

const queryImage = graphql`
  query {
    post1: file(relativePath: { eq: "how-gatsby-is-blazing-fast.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    post2: file(relativePath: { eq: "learn-react.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Blog = props => (
  <IntlProvider {...props} currentPage="blog">
    <IntlContext.Consumer>
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
                    render={data => (
                      <>
                        <Card
                          title={formatMessage({ id: 'posts.gatsbyBlazingFast.title' })}
                          subtitle={formatMessage({ id: 'posts.gatsbyBlazingFast.subtitle' })}
                          link={externalLink.gatsbyBlazingFast}
                          tags={['Gatsby']}
                          image={<Img fixed={data.post1.childImageSharp.fixed} alt={formatMessage({ id: 'posts.gatsbyBlazingFast.imageAlt' })} />}
                        />
                        <Card
                          title={formatMessage({ id: 'posts.learnReact.title' })}
                          subtitle={formatMessage({ id: 'posts.learnReact.subtitle' })}
                          link={externalLink.learnReact}
                          tags={['React']}
                          image={<Img fixed={data.post2.childImageSharp.fixed} alt={formatMessage({ id: 'posts.learnReact.imageAlt' })} />}
                        />
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </IntlContext.Consumer>
  </IntlProvider>
);

export default Blog;
