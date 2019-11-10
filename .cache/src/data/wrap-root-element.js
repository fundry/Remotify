import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import Client from './config';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={Client}>{element}</ApolloProvider>
);
