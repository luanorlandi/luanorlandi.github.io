import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';

const Stack = props => (
  <IntlProvider {...props} currentPage="stack">
    <IntlContext.Consumer>
      {({ locale, formatMessage }) => (
        <Layout>
          <SEO
            lang={locale}
            title={formatMessage({ id: 'stack.title' })}
            description={formatMessage({ id: 'meta.description' })}
            keywords={formatMessage({ id: 'meta.keywords' })}
          />
          <section className="section is-size-4-desktop is-size-5-touch">
            <Helmet
              script={[{
                async: true,
                src: 'https://cdn1.stackshare.io/javascripts/client-code.js',
                charSet: 'utf-8',
              }]}
            />
            <h1 className="title has-text-centered has-text-light">
              <FormattedMessage id="stack.title" />
            </h1>
            <div className="container has-text-centered">
              <hr />
              <p className="content">
                <FormattedMessage id="stack.description" />
              </p>
              <p className="content">
                <FormattedMessage id="stack.stackShare" />
              </p>
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <a
                    frameBorder="0"
                    data-theme="dark"
                    data-layers="1,2,3,4"
                    data-stack-embed="true"
                    href="https://embed.stackshare.io/stacks/embed/8c28185217d10812f81a6efc56aff4"
                  >
                    StackShare
                  </a>
                </div>
              </div>
              <p className="has-text-centered">
                <FormattedMessage id="checkOut" />
                {' '}
                <Link to="/posts">
                  <FormattedMessage id="stack.posts" />
                </Link>
                {'.'}
              </p>
            </div>
          </section>
        </Layout>
      )}
    </IntlContext.Consumer>
  </IntlProvider>
);

export default Stack;
