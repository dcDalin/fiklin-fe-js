import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';
import typeDefs from '../GraphQL/typeDefs';
import resolvers from '../GraphQL/resolvers';
import App from '../App';
import { tokenTitle } from '../context/auth';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'https://staging-wib-affiliate-ql.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(tokenTitle);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs,
  resolvers,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
