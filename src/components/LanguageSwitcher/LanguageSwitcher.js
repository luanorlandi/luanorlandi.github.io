import React from 'react';
import { Link } from 'gatsby';

import generateUrl from 'constants/paths';
import IntlContext from 'intl/IntlContext';
import locales from 'intl/locales';

const LanguageSwitcher = () => (
  <IntlContext.Consumer>
    {({ currentPage }) => (
      <div className="language">
        {locales.map(locale => (
          <Link
            className="language__link"
            to={generateUrl(currentPage, locale)}
            key={locale}
          >
            {locale}
          </Link>
        ))}
      </div>
    )}
  </IntlContext.Consumer>
);

export default LanguageSwitcher;
