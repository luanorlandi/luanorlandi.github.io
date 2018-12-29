import React from 'react';

import IntlContext from 'intl/IntlContext';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <IntlContext.Consumer>
          {({ formatMessage }) => (
            <noscript>
              {formatMessage({ id: 'noscript' })}
            </noscript>
          )}
        </IntlContext.Consumer>
      </p>
    </div>
  </footer>
);

export default Footer;
