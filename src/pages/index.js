import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from './head/banner';
import Home from './home/home';

//layout component contains the footer component
// home component holds the landing page component
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <div>
      <Home />
    </div>
  </Layout>
);

export default IndexPage;
