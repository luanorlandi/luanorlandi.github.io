import React from 'react';

import ErrorBoundary from './src/components/ErrorBoundary';
import { IntlComponent } from './src/contexts/intl/IntlContext';

// eslint-disable-next-line react/prop-types
export default ({ element }) => (
  <ErrorBoundary>
    <IntlComponent>
      {element}
    </IntlComponent>
  </ErrorBoundary>
);
