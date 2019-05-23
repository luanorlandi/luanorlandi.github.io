import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import IntlContext from 'contexts/intl/IntlContext';
import languages from 'contexts/intl/data/languages';
import defaultLanguage from 'contexts/intl/data/defaultLanguage';

const defaultLocale = defaultLanguage.locale;

const regexHomePage = /^\/[a-zA-z-]*\/?$/;
const regexOtherPage = /^\/[a-zA-z-]*/;

const LanguageSwitcher = () => {
  const intl = useContext(IntlContext);

  const getLink = ({ language, location }) => {
    if (language.locale === intl.locale) {
      return location.pathname;
    }

    if (language.locale === defaultLocale) {
      if (regexHomePage.test(location.pathname)) {
        return '/';
      }

      return location.pathname.replace(regexOtherPage, '');
    }

    return `/${language.locale}${location.pathname}`;
  };

  return (
    <Location>
      {({ location }) => (
        <div className="language">
          {languages.map(language => (
            <Link
              className="language__link"
              to={getLink({ language, location })}
              key={language.locale}
              onClick={() => intl.changeLanguage(language)}
            >
              {language.locale}
            </Link>
          ))}
        </div>
      )}
    </Location>
  );
};

export default LanguageSwitcher;
