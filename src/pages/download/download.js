import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Header from '../head/header';
import Update from './updates';
import Layout from '../../components/layout';

const download = () => {
  return (
    <Layout>
      <Header style={false} />
      <div>
        <p> DOWNLOADS PAGE </p>

        <Update />
      </div>
    </Layout>
  );
};

export default download;
