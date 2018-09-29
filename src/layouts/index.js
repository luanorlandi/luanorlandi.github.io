import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import generateUrl from 'constants/paths';
import Header from 'components/Header';
import 'styles/index.scss';

const META_ASSETS_URL = 'https://raw.githubusercontent.com/luanorlandi/luanorlandi.github.io/source/src/assets/meta/';

const TemplateWrapper = ({
  location,
  data,
  children,
  i18nMessages,
}) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = generateUrl('home', langKey);
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'theme-color', content: '#303030' },
            { name: 'description', content: i18nMessages.meta.description },
            { name: 'keywords', content: i18nMessages.meta.keywords },
            { property: 'og:url', content: 'https://luanorlandi.github.io/' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: data.site.siteMetadata.title },
            { property: 'og:description', content: i18nMessages.meta.description },
            { property: 'og:image', content: `${META_ASSETS_URL}luanorlandi-v1.jpg` },
            { property: 'og:image:alt', content: i18nMessages.meta.description },
            { property: 'og:image:type', content: 'image/jpg' },
            { property: 'og:image:width', content: '1365' },
            { property: 'og:image:height', content: '1365' },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href: 'https://use.fontawesome.com/releases/v5.2.0/css/brands.css',
              integrity: 'sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE',
              crossOrigin: 'anonymous',
            },
            {
              rel: 'stylesheet',
              href: 'https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css',
              integrity: 'sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6',
              crossOrigin: 'anonymous',
            },
            {
              rel: 'shortcut icon',
              href: `${META_ASSETS_URL}favicon-v1.ico`,
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
        <div>
          {children()}
        </div>
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object,
  i18nMessages: PropTypes.object,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
