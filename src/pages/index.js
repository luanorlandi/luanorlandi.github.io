import React, { useContext } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faMedium, faLinkedin,
} from '@fortawesome/fontawesome-free-brands';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import IntlContext from 'contexts/intl/IntlContext';
import { externalLink } from 'constants/paths';

library.add(faGithub, faTwitter, faMedium, faLinkedin);

const Home = () => {
  const intl = useContext(IntlContext);
  const { locale, formatMessage } = intl;

  return (
    <Layout>
      <SEO
        lang={locale}
        description={formatMessage({ id: 'meta.description' })}
        keywords={formatMessage({ id: 'meta.keywords' })}
      />
      <div className="container">
        <div className="columns is-mobile">
          <div className="column">
            <figure className="photo image is-128x128">
              <StaticQuery
                query={graphql`
                  query {
                    placeholderImage: file(relativePath: { eq: "luanorlandi.jpg" }) {
                      childImageSharp {
                        fixed(width: 128, height: 128) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  <Img
                    fixed={data.placeholderImage.childImageSharp.fixed}
                    imgStyle={{ borderRadius: '100%' }}
                    alt={formatMessage({ id: 'profileName' })}
                  />
                )}
              />
            </figure>
            <h1 className="title has-text-centered has-text-light">
              <FormattedMessage id="profileName" />
            </h1>
            <h2 className="subtitle has-text-centered has-text-warning">
              <FormattedMessage id="home.headline" />
            </h2>
          </div>
        </div>
        <div className="has-text-centered is-mobile">
          <a href={externalLink.github} aria-label="github">
            <span className="icon is-large">
              <FontAwesomeIcon
                className="fab fa-2x"
                icon={['fab', 'github']}
              />
            </span>
          </a>
          <a href={externalLink.twitter} aria-label="twitter">
            <span className="icon is-large">
              <FontAwesomeIcon
                className="fab fa-2x"
                icon={['fab', 'twitter']}
              />
            </span>
          </a>
          <a href={externalLink.medium} aria-label="medium">
            <span className="icon is-large">
              <FontAwesomeIcon
                className="fab fa-2x"
                icon={['fab', 'medium']}
              />
            </span>
          </a>
          <a href={externalLink.linkedin} aria-label="linkedin">
            <span className="icon is-large">
              <FontAwesomeIcon
                className="fab fa-2x"
                icon={['fab', 'linkedin']}
              />
            </span>
          </a>
        </div>
      </div>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="container content">
          <h4 className="title has-text-light">
            <FormattedMessage id="home.greet" />
            {' '}
            <span className="emoji" role="img" aria-label="wave">
            👋
            </span>
          </h4>
          <p>
            <FormattedMessage id="home.about" />
          </p>
          <p>
            <FormattedMessage id="home.experience" />
          </p>
          <p>
            <FormattedMessage id="checkOut" />
            {' '}
            <Link to={intl.getPath('projects')}>
              <FormattedMessage id="home.personalProjects" />
            </Link>
            {'.'}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
