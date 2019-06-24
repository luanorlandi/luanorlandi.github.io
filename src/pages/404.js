import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { IntlProvider } from 'contexts/intl/IntlContext';

const NotFoundPage = ({ location }) => (
  <IntlProvider pathname={location.pathname}>
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
  </IntlProvider>
);

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
