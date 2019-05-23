import React, { useEffect, useContext } from 'react';

import Stack from 'pages/stack';
import pt from 'contexts/intl/data/pt';
import IntlContext from 'contexts/intl/IntlContext';

const StackPt = (props) => {
  const intl = useContext(IntlContext);

  useEffect(() => {
    intl.changeLanguage(pt);
  }, []);

  return (
    <Stack {...props} />
  );
};

export default StackPt;
