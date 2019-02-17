import React from 'react';

import Blog from 'pages/blog'; // eslint-disable-line
import pt from 'intl/data/pt';

const BlogPt = props => (
  <Blog intl={pt} {...props} />
);

export default BlogPt;
