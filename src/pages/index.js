import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from './head/banner';
import Home from './home/home';

import { StateProvider, StateContext } from '../state/';

//layout component contains the footer component
// home component holds the landing page component

// react context-api setup
const IndexPage = () => (
  <StateProvider>
    <StateContext.Consumer>
      {/* state will be consumed via props destructed & passed on here*/}
      {({ authenticated }) => (
        <Layout footer={true}>
          <SEO title="Home" />
          <Banner auth={authenticated} />
          <Home />
        </Layout>
      )}
    </StateContext.Consumer>
  </StateProvider>
);

export default IndexPage;
