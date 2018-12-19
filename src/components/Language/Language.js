import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import generateUrl from 'constants/paths';
import IntlContext from 'intl/IntlContext';
import locales from 'intl/locales';

const blockClass = 'language';

const Language = () => (
  <IntlContext.Consumer>
    {({ currentPage }) => (
      <div className={blockClass}>
        {locales.map(locale => (
          <Link
            className={`${blockClass}__link`}
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

export default Language;
