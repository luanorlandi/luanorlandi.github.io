import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as Provider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import get from 'lodash/get';

import defaultLanguage from 'contexts/intl/data/defaultLanguage';
import { paths } from 'constants/paths';
import IntlConsumer from './IntlConsumer';

addLocaleData([...en, ...pt]);

const defaultLocale = defaultLanguage.locale;

const IntlContext = createContext({});

export const IntlComponent = ({ children }) => {
  const [locale, setLocale] = useState(defaultLanguage.locale);
  const [messages, setMessages] = useState(defaultLanguage.messages);

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
            {children}
          </IntlContext.Provider>
        )}
      </IntlConsumer>
    </Provider>
  );
};

IntlComponent.propTypes = {
  children: PropTypes.node,
};

IntlComponent.defaultProps = {
  children: null,
};

export default IntlContext;
