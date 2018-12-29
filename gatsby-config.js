module.exports = {
  siteMetadata: {
    title: 'Luan Orlandi',
    author: '@luanorlandi',
    siteUrl: 'https://luanorlandi.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Luan Orlandi',
        short_name: 'Luan Orlandi',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#303030',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_LUAN_ORLANDI,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
