import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import Card from 'components/Card';
import { IntlProvider } from 'contexts/intl/IntlContext';
import { externalLink } from 'constants/paths';

const queryImage = graphql`
  query {
    propject1: file(relativePath: { eq: "gatsby-course.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project2: file(relativePath: { eq: "kassel-labs.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project3: file(relativePath: { eq: "tic-tac-porg.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project4: file(relativePath: { eq: "slack-parrot.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Projects = ({ location }) => (
  <IntlProvider pathname={location.pathname}>
    {({ locale, formatMessage, getPath }) => (
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
                <StaticQuery
                  query={queryImage}
                  render={data => (
                    <>
                      <Card
                        title={formatMessage({ id: 'projects.gatsbyCourse.title' })}
                        subtitle={formatMessage({ id: 'projects.gatsbyCourse.subtitle' })}
                        link={externalLink.gatsbycourse}
                        tags={['Gatsby', 'React']}
                        image={<Img fixed={data.propject1.childImageSharp.fixed} alt={formatMessage({ id: 'projects.gatsbyCourse.imageAlt' })} />}
                      />
                      <Card
                        title={formatMessage({ id: 'projects.kasselLabs.title' })}
                        subtitle={formatMessage({ id: 'projects.kasselLabs.subtitle' })}
                        link={externalLink.kasselLabs}
                        tags={['React']}
                        image={<Img fixed={data.project2.childImageSharp.fixed} alt={formatMessage({ id: 'projects.kasselLabs.imageAlt' })} />}
                      />
                      <Card
                        title={formatMessage({ id: 'projects.ticTacPorg.title' })}
                        subtitle={formatMessage({ id: 'projects.ticTacPorg.subtitle' })}
                        link={externalLink.ticTacPorg}
                        tags={['React', 'PWA']}
                        image={<Img fixed={data.project3.childImageSharp.fixed} alt={formatMessage({ id: 'projects.ticTacPorg.imageAlt' })} />}
                      />
                      <Card
                        title={formatMessage({ id: 'projects.slackParrot.title' })}
                        subtitle={formatMessage({ id: 'projects.slackParrot.subtitle' })}
                        link={externalLink.slackParrot}
                        tags={['Node']}
                        image={<Img fixed={data.project4.childImageSharp.fixed} alt={formatMessage({ id: 'projects.slackParrot.imageAlt' })} />}
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <p className="has-text-centered">
              <FormattedMessage id="checkOut" />
              {' '}
              <Link to={getPath('stack', locale)}>
                <FormattedMessage id="projects.stack" />
              </Link>
              {'.'}
            </p>
          </div>
        </section>
      </Layout>
    )}
  </IntlProvider>
);

Projects.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;
