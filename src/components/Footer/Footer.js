import React, { useContext } from 'react';

import IntlContext from 'contexts/intl/IntlContext';

const Footer = () => {
  const intl = useContext(IntlContext);

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <noscript>
            {intl.formatMessage({ id: 'noscript' })}
          </noscript>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
