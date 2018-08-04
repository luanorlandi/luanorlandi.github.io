import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { injectIntl, FormattedMessage } from 'react-intl';

import url, { externalLink } from 'constants/paths';
import profileImage from 'assets/profile.jpg';

const socialMedias = [
  { icon: 'fa-github', link: externalLink.github },
  { icon: 'fa-twitter', link: externalLink.twitter },
  { icon: 'fa-medium', link: externalLink.medium },
  { icon: 'fa-linkedin', link: externalLink.linkedin },
];

const Home = ({ intl }) => (
  <div>
    <div className="container">
      <div className="columns is-mobile">
        <div className="column">
          <figure className="photo image is-128x128">
            <img
              className="is-rounded"
              src={profileImage}
              alt={intl.formatMessage({ id: 'profileName' })}
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
            className="is-2"
            href={socialMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            key={socialMedia.icon}
          >
            <span className="icon is-large">
              <i className={`fab fa-2x ${socialMedia.icon}`} />
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
          <Link to={url('projects', intl.locale)}>
            <FormattedMessage id="home.personalProjects" />
          </Link>
          {'.'}
        </p>
      </div>
    </section>
  </div>
);

Home.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Home);
