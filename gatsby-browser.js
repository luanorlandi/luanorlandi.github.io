import React from 'react';
import * as Sentry from '@sentry/browser';
import ErrorBoundary from './src/components/ErrorBoundary';

Sentry.init({
  dsn: 'https://84e73d8de95a48e7a217b43730d95a20@sentry.io/1308672',
});

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <ErrorBoundary>
    {element}
  </ErrorBoundary>
);
