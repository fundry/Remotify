import React from 'react';
import Layout from '../../components/layout';
import Header from '../head/header';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Flex from 'styled-flex-component';

const login = () => {
  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      color: #fff;
      background: transparent;
    }
  `;
  return (
    <Layout>
      <Header style={false} />

      <br />
      <Flex justifyCenter>
        <div>
          <div>
            <input placeholder="Email" />
          </div>
          <br />
          <div>
            <input placeholder="password" />
          </div>{' '}
          <br />
          <div>
            <Link to="/user/profile">
              <Button> Login </Button>
            </Link>{' '}
            <br />
          </div>{' '}
        </div>
      </Flex>
    </Layout>
  );
};

export default login;
