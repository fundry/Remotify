import React from 'react';
import Header from '../head/header';
import Layout from '../../components/layout';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

import List from './List'

const Button = styled.button`
  background: #361f94
  text-align: right; 
  height: 67px;
  border: 0px;
  border-radius: 0px 15px 15px 0px;
  color: #fff;
  margin: 0 1em;
  padding: 1em 2em;
  font-size: 1em;
  &:hover {
    color: #361f94;
    background: transparent;
  }
`;

const Input = styled.input({
  padding: '1em',
  paddingLeft: '2em',
  width: '29em',
  border: '0px',
  background: 'transparent',
});

const Box = styled.div({
  border: '1px solid #361f94 ',
  borderRadius: '0px 15px 15px 0px',
  height: '8vh',
});

const Workers = () => {
  return (
    <Layout>
      <Header style={false} />
      <div>
       <List />

        <Flex justifyCenter>
          <Box>
            <Flex>
              <Input placeholder="Invite Staff" />

              <Button style={{ cursor: 'pointer' }}> Invite </Button>
            </Flex>
          </Box>
        </Flex>
        <br />
      </div>
    </Layout>
  );
};

export default Workers;
