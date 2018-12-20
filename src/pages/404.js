import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';

const NotFoundPage = props => (
  <IntlProvider {...props} currentPage="404">
    <IntlContext.Consumer>
      {({ locale }) => (
        <Layout>
          <SEO lang={locale} title="404: Not found" />
          <section className="section container">
            <h1 className="title has-text-centered has-text-light">
              NOT FOUND
            </h1>
            <hr />
            <p className="has-text-centered">
              You just hit a route that doesn&#39;t exist... the sadness.
            </p>
          </section>
        </Layout>
      )}
    </IntlContext.Consumer>
  </IntlProvider>
);

export default NotFoundPage;
