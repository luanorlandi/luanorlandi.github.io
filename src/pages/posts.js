import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';
import postImage from 'assets/images/learn-react.jpg';

const projectCards = [
  {
    title: 'posts.learnReact.title',
    subtitle: 'posts.learnReact.subtitle',
    link: 'https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358',
    imageLink: postImage,
    tags: ['React'],
  },
];

const Posts = props => (
  <IntlProvider {...props} currentPage="posts">
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
                  {projectCards.map(projectCard => (
                    <Card key={projectCard.title} {...projectCard} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </IntlContext.Consumer>
  </IntlProvider>
);

export default Posts;
