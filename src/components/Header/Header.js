import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import IntlContext from 'intl/IntlContext';
import generateUrl from 'constants/paths';
import LanguageSwitcher from 'components/LanguageSwitcher';

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }));
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render = () => {
    const { locale } = this.context;
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burguerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-4" to="/">
              {siteTitle}
            </Link>
            <button
              className={`navbar-burger has-text-light ${burguerClass}`}
              type="button"
              aria-label="menu"
              onClick={this.handleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${burguerClass}`}>
            <div className="navbar-end">
              <Link
                className="navbar-item is-size-5"
                to={generateUrl('home', locale)}
                onClick={this.closeMenu}
              >
                <FormattedMessage id="home.title" />
              </Link>
              <Link
                className="navbar-item is-size-5"
                to={generateUrl('projects', locale)}
                onClick={this.closeMenu}
              >
                <FormattedMessage id="projects.title" />
              </Link>
              <Link
                className="navbar-item is-size-5"
                to={generateUrl('stack', locale)}
                onClick={this.closeMenu}
              >
                <FormattedMessage id="stack.title" />
              </Link>
              <Link
                className="navbar-item is-size-5"
                to={generateUrl('posts', locale)}
                onClick={this.closeMenu}
              >
                <FormattedMessage id="posts.title" />
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.contextType = IntlContext;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
