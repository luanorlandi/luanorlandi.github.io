import React from 'react';
import graphql from 'graphql';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import 'intl';
import 'intl/locale-data/jsonp/en';

import messages from 'strings/en';
import Layout from './index';

addLocaleData(en);

export default props => <Layout i18nMessages={messages} {...props} />;

export const pageQuery = graphql`
  query LayoutEn {
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
