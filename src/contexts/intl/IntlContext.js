import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as Provider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import get from 'lodash/get';

import { paths } from 'constants/paths';
import { languagesObject, locales, defaultLanguage } from './data/languages';
import IntlConsumer from './IntlConsumer';

addLocaleData([...en, ...pt]);

const defaultLocale = defaultLanguage.locale;

const IntlContext = createContext({});

const getLanguage = (pathname) => {
  const localeRegex = /^\/[a-zA-z-]*/;

  const locale = pathname.match(localeRegex)[0].replace('/', '');

  if (locales.includes(locale)) {
    return languagesObject[locale];
  }

  return defaultLanguage;
};

export const IntlProvider = ({ children, pathname }) => {
  const initialLanguage = getLanguage(pathname);

  const [locale, setLocale] = useState(initialLanguage.locale);
  const [messages, setMessages] = useState(initialLanguage.messages);

  const changeLanguage = (language) => {
    setLocale(language.locale);
    setMessages(language.messages);
  };

  const getPath = (pathName) => {
    const path = get(paths, pathName);

    if (!path) {
      throw new Error(`Path '${pathName}' not found`);
    }

    const languagePath = locale !== defaultLocale ? locale : '';

    return languagePath ? `/${languagePath}${path}` : `${path}`;
  };

  return (
    <Provider locale={locale} messages={messages}>
      <IntlConsumer>
        {intl => (
          <IntlContext.Provider value={{ ...intl, changeLanguage, getPath }}>
            {children({ ...intl, changeLanguage, getPath })}
          </IntlContext.Provider>
        )}
      </IntlConsumer>
    </Provider>
  );
};

IntlProvider.propTypes = {
  children: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default IntlContext;
