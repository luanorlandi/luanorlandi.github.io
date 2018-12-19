import React from 'react';

import Posts from 'pages/posts'; // eslint-disable-line
import pt from 'intl/data/pt';

const PostsPt = props => (
  <Posts intl={pt} {...props} />
);

export default PostsPt;
