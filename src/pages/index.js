import React from 'react';
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
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';
import generateUrl, { externalLink } from 'constants/paths';
import profileImage from 'assets/images/profile.jpg';

library.add(faGithub, faTwitter, faMedium, faLinkedin);

const socialMedias = [
  { icon: 'github', link: externalLink.github },
  { icon: 'twitter', link: externalLink.twitter },
  { icon: 'medium', link: externalLink.medium },
  { icon: 'linkedin', link: externalLink.linkedin },
];

const Home = props => (
  <IntlProvider {...props} currentPage="home">
    <IntlContext.Consumer>
      {({ locale, formatMessage }) => (
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
                        imgStyle={{"border-radius": "100%"}}
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
              {socialMedias.map(socialMedia => (
                <a
                  href={socialMedia.link}
                  aria-label={socialMedia.icon}
                  key={socialMedia.icon}
                >
                  <span className="icon is-large">
                    <FontAwesomeIcon className="fab fa-2x" icon={['fab', socialMedia.icon]}>
                      asdads
                    </FontAwesomeIcon>
                  </span>
                </a>
              ))}
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
                <Link to={generateUrl('projects', locale)}>
                  <FormattedMessage id="home.personalProjects" />
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

export default Home;
