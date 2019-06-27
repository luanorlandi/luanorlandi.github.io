import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import BlockContent from 'components/BlockContent';
import { IntlProvider } from 'contexts/intl/IntlContext';

export const query = graphql`
  query Post ($slug: String) {
    sanityPost(slug: {current: {eq: $slug}}) {
      title
      locale
      description
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      publishedAt
      _rawBody
    }
  }
`;

const Post = ({ data, location }) => {
  const {
    title,
    locale,
    description,
    mainImage,
    publishedAt,
    _rawBody,
  } = data.sanityPost;

  return (
    <IntlProvider pathname={location.pathname}>
      {({ formatDate, formatMessage, getPath }) => (
        <Layout>
          <SEO
            lang={locale}
            title={title}
            description={description}
            meta={[{ property: 'og:type', content: 'article' }]}
          />
          <article className="post">
            <h1 className="post__title">{title}</h1>
            {publishedAt && (
              <time dateTime={publishedAt} className="post__time">
                {formatDate(publishedAt, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {mainImage && (
              <div className="post__main-image">
                <Image fluid={mainImage.asset.fluid} alt={title} />
              </div>
            )}
            {_rawBody && (
              <BlockContent blocks={_rawBody} />
            )}
          </article>
          <p className="has-text-centered">
            {formatMessage({ id: 'checkOut.posts' })}
            {' '}
            <Link to={getPath('blog')}>
              {formatMessage({ id: 'stack.posts' })}
            </Link>
          </p>
          <br />
        </Layout>
      )}
    </IntlProvider>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
