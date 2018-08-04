import React from 'react';
import graphql from 'graphql';
import { addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import 'intl';
import 'intl/locale-data/jsonp/pt';

import messages from 'strings/pt';
import Layout from './index';

addLocaleData(pt);

export default props => <Layout i18nMessages={messages} {...props} />;

export const pageQuery = graphql`
  query LayoutPt {
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
