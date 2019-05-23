import React, { useEffect, useContext } from 'react';

import Home from 'pages/index';
import pt from 'contexts/intl/data/pt';
import IntlContext from 'contexts/intl/IntlContext';

const HomePt = (props) => {
  const intl = useContext(IntlContext);

  useEffect(() => {
    intl.changeLanguage(pt);
  }, []);

  return (
    <Home {...props} />
  );
};

export default HomePt;
