import React from 'react';
import { Link } from 'gatsby';
import { ApolloProvider } from 'react-apollo';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from './head/banner';
import Home from './home/home';
import client from '../data/config';

//layout component contains the footer component
// home component holds the landing page component
const IndexPage = () => (
  <ApolloProvider client={client}>
    <Layout>
      <SEO title="Home" />
      <Banner />
      <div>
        <Home />
      </div>
    </Layout>
  </ApolloProvider>
);

export default IndexPage;
