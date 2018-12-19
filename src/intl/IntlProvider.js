import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as Provider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';

import IntlConsumer from './IntlConsumer';
import IntlContext from './IntlContext';
import defaultLanguage from './data/defaultLanguage';

addLocaleData([...en, ...pt]);

class IntlProvider extends Component {
  constructor(props) {
    super(props);

    const { locale, messages } = this.props.intl;
    const { currentPage } = this.props;

    this.state = {
      locale,
      messages,
      currentPage,
    };
  }

  changeLocale = (locale) => {
    this.setState({ locale });
  }

  render = () => (
    <Provider {...this.state}>
      <IntlConsumer>
        {intl => (
          <IntlContext.Provider
            value={{
              ...intl,
              currentPage: this.state.currentPage,
              changeLocale: this.changeLocale,
            }}
          >
            {this.props.children}
          </IntlContext.Provider>
        )}
      </IntlConsumer>
    </Provider>
  );
}

IntlProvider.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
    messages: PropTypes.object,
  }),
  currentPage: PropTypes.string.isRequired,
};

IntlProvider.defaultProps = {
  intl: {
    locale: defaultLanguage.locale,
    messages: defaultLanguage.messages,
  },
};

export default IntlProvider;
