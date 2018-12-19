import React from 'react';
import { injectIntl } from 'react-intl';

const IntlConsumer = ({ children, intl }) => (
  <div>
    {children(intl)}
  </div>
);

export default injectIntl(IntlConsumer);
