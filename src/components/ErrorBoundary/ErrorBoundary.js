import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://84e73d8de95a48e7a217b43730d95a20@sentry.io/1308672',
});

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    const { error } = this.state;
    // eslint-disable-next-line
    const { children } = this.props;
    if (error) {
      return (
        // eslint-disable-next-line
        <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
