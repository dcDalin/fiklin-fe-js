import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import App from '../App';

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: 'https://staging-wib-affiliate-ql.herokuapp.com/graphql',
});

const client = new ApolloClient({
  link,
  cache,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
