import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import IntlContext from 'intl/IntlContext';
import generateUrl from 'constants/paths';
import Language from 'components/Language';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  static contextType = IntlContext;

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }));
  }

  closeMenu = () => this.setState({ isMenuOpen: false })

  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burguerClass = isMenuOpen ? 'is-active' : '';
    const navbarLinks = [
      {
        title: 'home.title',
        link: generateUrl('home', this.context.locale),
      },
      {
        title: 'projects.title',
        link: generateUrl('projects', this.context.locale),
      },
      {
        title: 'stack.title',
        link: generateUrl('stack', this.context.locale),
      },
      {
        title: 'posts.title',
        link: generateUrl('posts', this.context.locale),
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

              <Language />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
