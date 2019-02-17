import React from 'react';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: process.env.SENTRY_DSN_LUAN_ORLANDI,
  environment: process.env.NODE_ENV,
});

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
