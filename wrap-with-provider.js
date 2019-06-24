import React from 'react';

import ErrorBoundary from './src/components/ErrorBoundary';

// eslint-disable-next-line react/prop-types
export default ({ element }) => (
  <ErrorBoundary>
    {element}
  </ErrorBoundary>
);
