import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import IntlContext from 'contexts/intl/IntlContext';
import LanguageSwitcher from 'components/LanguageSwitcher';

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const intl = useContext(IntlContext);

  const burgerClass = isMenuOpen ? 'is-active' : '';

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" to={intl.getPath('home')}>
            {siteTitle}
          </Link>
          <button
            className={`navbar-burger has-text-light ${burgerClass}`}
            type="button"
            aria-label="menu"
            onClick={() => setIsMenuOpen(state => !state)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            <Link
              className="navbar-item is-size-5"
              to={intl.getPath('home')}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id="home.title" />
            </Link>
            <Link
              className="navbar-item is-size-5"
              to={intl.getPath('projects')}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id="projects.title" />
            </Link>
            <Link
              className="navbar-item is-size-5"
              to={intl.getPath('stack')}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id="stack.title" />
            </Link>
            <Link
              className="navbar-item is-size-5"
              to={intl.getPath('blog')}
              onClick={() => setIsMenuOpen(false)}
            >
              <FormattedMessage id="posts.title" />
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
