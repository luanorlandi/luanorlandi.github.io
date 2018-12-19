import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';
import generateUrl, { externalLink } from 'constants/paths';
import projectImage from 'assets/images/gatsby-course.jpg';
import projectImage2 from 'assets/images/tic-tac-porg.jpg';
import projectImage3 from 'assets/images/memepool.jpg';
import projectImage4 from 'assets/images/westworld-intro-creator.jpg';

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

const Projects = props => (
  <IntlProvider {...props} currentPage="projects">
    <IntlContext.Consumer>
      {({ locale, formatMessage }) => (
        <Layout>
          <SEO
            lang={locale}
            title={formatMessage({ id: 'projects.title' })}
            description={formatMessage({ id: 'meta.description' })}
            keywords={formatMessage({ id: 'meta.keywords' })}
          />
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
                <Link to={generateUrl('stack', locale)}>
                  <FormattedMessage id="projects.stack" />
                </Link>
                {'.'}
              </p>
            </div>
          </section>
        </Layout>
      )}
    </IntlContext.Consumer>
  </IntlProvider>
);

export default Projects;
