import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const blockClass = 'language';

const Language = ({ langs }) => (
  <div className={blockClass}>
    {langs.map(lang => (
      <Link to={lang.link} className={`${blockClass}__link`} key={lang.langKey}>
        {lang.langKey}
      </Link>
    ))}
  </div>
);

Language.propTypes = {
  langs: PropTypes.array.isRequired,
};

export default Language;
