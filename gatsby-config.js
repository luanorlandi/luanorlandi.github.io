const path = require('path');
const languages = require('./src/strings/languages');

module.exports = {
  siteMetadata: {
    title: 'Luan Orlandi',
    languages,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_LUAN_ORLANDI,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    }, {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: process.env.HOTJAR_ID_LUAN_ORLANDI,
        sv: process.env.HOTJAR_SNIPPET_VERSION_LUAN_ORLANDI,
      },
    },
  ],
};
