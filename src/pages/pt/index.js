import React from 'react';

import Home from 'pages/index'; // eslint-disable-line
import pt from 'intl/data/pt';

const HomePt = props => (
  <Home intl={pt} {...props} />
);

export default HomePt;
