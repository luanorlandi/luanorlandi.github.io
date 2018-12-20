import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const IntlConsumer = ({ children, intl }) => (
  <div>
    {children(intl)}
  </div>
);

IntlConsumer.propTypes = {
  children: PropTypes.func,
  intl: intlShape.isRequired,
};

IntlConsumer.defaultProps = {
  children: () => {},
};

export default injectIntl(IntlConsumer);
