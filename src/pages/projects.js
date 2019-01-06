import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import GatsbyCourse from 'components/Images/GatsbyCourse';
import TicTacPorg from 'components/Images/TicTacPorg';
import Memepool from 'components/Images/Memepool';
import WestworldIntroCreator from 'components/Images/WestworldIntroCreator';
import IntlProvider from 'intl/IntlProvider';
import IntlContext from 'intl/IntlContext';
import generateUrl, { externalLink } from 'constants/paths';

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
                  <Card
                    title={formatMessage({ id: 'projects.gatsbyCourse.title' })}
                    subtitle={formatMessage({ id: 'projects.gatsbyCourse.subtitle' })}
                    link={externalLink.gatsbycourse}
                    image={GatsbyCourse}
                    tags={['Gatsby', 'React']}
                  />
                  <Card
                    title={formatMessage({ id: 'projects.ticTacPorg.title' })}
                    subtitle={formatMessage({ id: 'projects.ticTacPorg.subtitle' })}
                    link={externalLink.ticTacPorg}
                    image={TicTacPorg}
                    tags={['React', 'PWA']}
                  />
                  <Card
                    title={formatMessage({ id: 'projects.memepool.title' })}
                    subtitle={formatMessage({ id: 'projects.memepool.subtitle' })}
                    link={externalLink.memepool}
                    image={Memepool}
                    tags={['Node', 'Heroku']}
                  />
                  <Card
                    title={formatMessage({ id: 'projects.westworldIntroCreator.title' })}
                    subtitle={formatMessage({ id: 'projects.westworldIntroCreator.subtitle' })}
                    link={externalLink.westworldIntroCreator}
                    image={WestworldIntroCreator}
                    tags={['React']}
                  />
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
