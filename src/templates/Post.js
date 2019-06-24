import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider } from 'contexts/intl/IntlContext';
import Layout from 'components/Layout';
import SEO from 'components/Seo';

import './Post.scss';

const Post = ({
  children,
  pageContext: {
    frontmatter: {
      title,
      description,
      keywords,
      date,
    },
  },
  location,
}) => (
  <IntlProvider pathname={location.pathname}>
    {({ locale, formatDate }) => (
      <Layout>
        <SEO
          lang={locale}
          title={title}
          description={description}
          keywords={keywords}
        />
        <div className="section is-size-4-desktop is-size-5-touch">
          <div className="container content post__container">
            <main>
              <article>
                <header>
                  <h1 className="title has-text-centered has-text-light">{title}</h1>
                </header>
                <hr />
                <p className="post__date">{formatDate(date, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                {children}
              </article>
            </main>
          </div>
        </div>
      </Layout>
    )}
  </IntlProvider>
);

Post.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.objectOf({
    frontmatter: PropTypes.objectOf({
      title: PropTypes.string.required,
      description: PropTypes.string,
      keywords: PropTypes.string,
      date: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  pageContext: {
    frontmatter: {},
  },
};

export default Post;
