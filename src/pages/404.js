import React, { useContext } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import IntlContext from 'contexts/intl/IntlContext';

const NotFoundPage = () => {
  const intl = useContext(IntlContext);
  const { locale } = intl;

  return (
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
  );
};

export default NotFoundPage;
