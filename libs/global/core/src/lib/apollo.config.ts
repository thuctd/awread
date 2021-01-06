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

// export function createApollo(httpLink: HttpLink) {
//     const basic = setContext((operation, context) => ({
//         headers: {
//             Accept: 'charset=utf-8'
//         }
//     }));

//     const auth = setContext((operation, context) => {
//         const token = localStorage.getItem('token');

//         if (token === null) {
//             return {};
//         } else {
//             return {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 }
//             };
//         }
//     });

//     const link = ApolloLink.from([basic, auth, httpLink.create({ uri: environment.uri })]);
//     const cache = new InMemoryCache();

//     return {
//         link,
//         cache
//     }
// }
