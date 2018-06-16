import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/header';

import './global.css';

const PageContainer = styled.div``;
const ContentContainer = styled.div`
  padding: 50px;
`;
const Layout = ({ children, data }) => (
  <PageContainer>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <ContentContainer>{children()}</ContentContainer>
  </PageContainer>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
