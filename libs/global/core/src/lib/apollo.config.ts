// import { InMemoryCache, ApolloLink } from '@apollo/client/core';
// import { setContext } from '@apollo/client/link/context';
import { DefaultOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '@awread/global/environments';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export function createApollo(httpLink: HttpLink) {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: environment.uri,
    }),
    defaultOptions,
  };
}