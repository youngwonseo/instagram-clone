import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloLink } from 'apollo-link';
import storage from './storage';

type MyApolloCache = any;
let apolloClient: ApolloClient<MyApolloCache> | undefined;

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    // serverside
    const { SchemaLink } = require('@apollo/client/link/schema');
    const { schema } = require('../backend/schema');
    const { db } = require('../backend/db');

   
    const schemaLink = new SchemaLink({ schema, context: { db } });
     
    return schemaLink;
    
  } else {
    const { HttpLink } = require('@apollo/client/link/http');
    const httpLink = new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
      
    });
        
    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = storage.get('token');

      console.log(token);
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });

    const { createUploadLink } = require('apollo-upload-client');
    // return httpLink;
    return authLink.concat(
      createUploadLink({
        uri: "/api/graphql",
        credentials: "same-origin",
      })
    );
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: MyApolloCache | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: MyApolloCache) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}