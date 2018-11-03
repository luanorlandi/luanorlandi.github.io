import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { injectIntl, FormattedMessage } from 'react-intl';

import url, { externalLink } from 'constants/paths';
import Card from 'components/Card';
import projectImage from 'assets/gatsby-course.jpg';
import projectImage2 from 'assets/tic-tac-porg.jpg';
import projectImage3 from 'assets/memepool.jpg';
import projectImage4 from 'assets/westworld-intro-creator.jpg';

const Projects = ({ intl }) => {
  const projectCards = [
    {
      title: 'projects.gatsbyCourse.title',
      subtitle: 'projects.gatsbyCourse.subtitle',
      link: externalLink.gatsbycourse,
      imageLink: projectImage,
      tags: ['Gatsby', 'React'],
    },
    {
      title: 'projects.ticTacPorg.title',
      subtitle: 'projects.ticTacPorg.subtitle',
      link: externalLink.ticTacPorg,
      imageLink: projectImage2,
      tags: ['React', 'PWA'],
    },
    {
      title: 'projects.memepool.title',
      subtitle: 'projects.memepool.subtitle',
      link: externalLink.memepool,
      imageLink: projectImage3,
      tags: ['Node', 'Heroku'],
    },
    {
      title: 'projects.westworldIntroCreator.title',
      subtitle: 'projects.westworldIntroCreator.subtitle',
      link: externalLink.westworldIntroCreator,
      imageLink: projectImage4,
      tags: ['React'],
    },
  ];

  return (
    <section className="section is-size-4-desktop is-size-5-touch">
      <h1 className="title has-text-centered has-text-light">
        <FormattedMessage id="projects.title" />
      </h1>
      <div className="container">
        <hr />
        <p className="has-text-centered">
          <FormattedMessage id="projects.description" />
          {' '}
          <a
            href={externalLink.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {'.'}
        </p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {projectCards.map(projectCard => (
              <Card key={projectCard.title} {...projectCard} />
            ))}
          </div>
        </div>
        <p className="has-text-centered">
          <FormattedMessage id="checkOut" />
          {' '}
          <Link to={url('stack', intl.locale)}>
            <FormattedMessage id="projects.stack" />
          </Link>
          {'.'}
        </p>
      </div>
    </section>
  );
};

Projects.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Projects);
