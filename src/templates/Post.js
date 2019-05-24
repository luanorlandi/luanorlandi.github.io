import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import IntlContext from 'contexts/intl/IntlContext';
import Layout from 'components/Layout';
import SEO from 'components/Seo';

const Post = ({
  children,
  pageContext: {
    frontmatter: {
      title,
      description,
      keywords,
    },
  },
}) => {
  const intl = useContext(IntlContext);

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={title}
        description={description}
        keywords={keywords}
      />
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="container content">
          <h1 className="title has-text-centered has-text-light">{title}</h1>
          <hr />
          {children}
        </div>
      </section>
    </Layout>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.objectOf({
    frontmatter: PropTypes.objectOf({
      title: PropTypes.string.required,
      description: PropTypes.string,
      keywords: PropTypes.string,
    }),
  }),
};

Post.defaultProps = {
  pageContext: {
    frontmatter: {},
  },
};

export default Post;
