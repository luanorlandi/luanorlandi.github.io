import React, { useEffect, useContext } from 'react';

import Projects from 'pages/projects';
import pt from 'contexts/intl/data/pt';
import IntlContext from 'contexts/intl/IntlContext';

const ProjectsPt = (props) => {
  const intl = useContext(IntlContext);

  useEffect(() => {
    intl.changeLanguage(pt);
  }, []);

  return (
    <Projects {...props} />
  );
};

export default ProjectsPt;
