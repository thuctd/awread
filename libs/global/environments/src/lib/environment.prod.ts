import { buildEnvironment } from './build-environment';
console.log('buildEnvironment', buildEnvironment);

export const environment = {
  production: true,
  uri: buildEnvironment?.GRAPHQL_URI || 'http://localhost:5000/graphql',
  firebase: {
    apiKey: 'AIzaSyBYIoCiXcDM4lRoLAVUK4WGAwC9hORR0ow',
    authDomain: 'awready-beta.firebaseapp.com',
    databaseURL: 'https://awready-beta.firebaseio.com',
    projectId: 'awready-beta',
    storageBucket: 'awready-beta.appspot.com',
    messagingSenderId: '158126895088',
    appId: '1:158126895088:web:070f0e8433ec012b0a3735',
  },
  postgres: {
    DATABASE_URL:
      'postgres://postgres:41d4955151312a9a900dc2f3681953c1@localhost:5432/writer_web',
    SCHEMA: buildEnvironment?.SCHEMA || 'public',
  },
};
