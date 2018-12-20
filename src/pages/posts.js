import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import LearnReact from 'components/Images/LearnReact';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';
import { externalLink } from 'constants/paths';

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
                  <Card
                    title={formatMessage({ id: 'posts.learnReact.title' })}
                    subtitle={formatMessage({ id: 'posts.learnReact.subtitle' })}
                    link={externalLink.learnReact}
                    image={LearnReact}
                    tags={['React']}
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

export default Posts;
