import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import generateUrl from 'constants/paths';
import Header from 'components/Header';
import ogImage from 'assets/meta/luanorlandi.jpg';
import favicon from 'assets/meta/favicon.ico';
import 'styles/index.scss';

const HOST = process.env.NODE_ENV === 'production' ? 'https://luanorlandi.github.io' : '';

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
            { property: 'og:image', content: `${HOST}${ogImage}` },
            { property: 'og:image:alt', content: i18nMessages.meta.description },
            { property: 'og:image:type', content: 'image/jpg' },
            { property: 'og:image:width', content: '1365' },
            { property: 'og:image:height', content: '1365' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              href: `${HOST}${favicon}`,
            },
          ]}
        >
          <html lang={langKey} />
        </Helmet>
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
