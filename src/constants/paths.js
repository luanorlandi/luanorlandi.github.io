import get from 'lodash/get';

import defaultLanguage from 'intl/data/defaultLanguage';

const defaultLocale = defaultLanguage.locale;

const paths = {
  home: '/',
  projects: '/projects',
  stack: '/stack',
  posts: '/posts',
  404: '/404',
};

export const externalLink = {
  github: 'https://github.com/luanorlandi',
  twitter: 'https://twitter.com/luanorlandi',
  medium: 'https://medium.com/@luanorlandi',
  linkedin: 'https://www.linkedin.com/in/luanorlandi/',
  gatsbyCourse: 'https://www.udemy.com/gatsby-crie-seu-site-pessoal',
  kasselLabs: 'https://kassellabs.io',
  ticTacPorg: 'https://luanorlandi.github.io/tic-tac-porg',
  slackParrot: 'https://www.npmjs.com/package/slack-parrot',
  gatsbyBlazingFast: 'https://medium.freecodecamp.org/how-gatsby-is-so-blazing-fast-c99a6f2d405e',
  learnReact: 'https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358',
};

const generateUrl = (pathName, locale) => {
  const path = get(paths, pathName);

  if (!path) {
    throw new Error(`Path '${pathName}' not found`);
  }

  const languagePath = locale !== defaultLocale ? locale : '';

  return languagePath ? `/${languagePath}${path}` : `${path}`;
};

export default generateUrl;
