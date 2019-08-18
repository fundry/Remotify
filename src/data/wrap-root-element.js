import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Client from './config';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={Client}> {element} </ApolloProvider>
);
