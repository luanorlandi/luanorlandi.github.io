import React from 'react';
import ErrorBoundary from './src/components/ErrorBoundary';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <ErrorBoundary>
    {element}
  </ErrorBoundary>
);
