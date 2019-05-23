import React, { useEffect, useContext } from 'react';

import Blog from 'pages/blog';
import pt from 'contexts/intl/data/pt';
import IntlContext from 'contexts/intl/IntlContext';

const BlogPt = (props) => {
  const intl = useContext(IntlContext);

  useEffect(() => {
    intl.changeLanguage(pt);
  }, []);

  return (
    <Blog {...props} />
  );
};

export default BlogPt;
