import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import url from 'constants/paths';
import Language from 'components/Language';
import { injectIntl, FormattedMessage } from 'react-intl';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }));
  }

  closeMenu = () => this.setState({ isMenuOpen: false })

  render = () => {
    const { siteTitle, intl, langs } = this.props;
    const { isMenuOpen } = this.state;
    const burguerClass = isMenuOpen ? 'is-active' : '';
    const navbarLinks = [
      {
        title: 'home.title',
        link: url('home', intl.locale),
      },
      {
        title: 'projects.title',
        link: url('projects', intl.locale),
      },
      {
        title: 'stack.title',
        link: url('stack', intl.locale),
      },
      {
        title: 'posts.title',
        link: url('posts', intl.locale),
      },
    ];

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
              {navbarLinks.map(navbarLink => (
                <Link
                  className="navbar-item is-size-5"
                  to={navbarLink.link}
                  key={navbarLink.title}
                  onClick={this.closeMenu}
                >
                  <FormattedMessage id={navbarLink.title} />
                </Link>
              ))}
              <Language langs={langs} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  langs: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

Header.defaultProps = {
  siteTitle: '',
};

export default injectIntl(Header);
