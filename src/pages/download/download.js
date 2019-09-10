import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

import Header from '../head/header';
import Update from './updates';

const download = () => {
  return (
    <div>
      <Header style={false} />
      <div>
        <p> DOWNLOADS PAGE </p>

        <Update />
      </div>
    </div>
  );
};

export default download;
