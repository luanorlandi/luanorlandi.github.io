import React from 'react';

import Projects from 'pages/projects'; // eslint-disable-line
import pt from 'intl/data/pt';

const ProjectsPt = props => (
  <Projects intl={pt} {...props} />
);

export default ProjectsPt;
