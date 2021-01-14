import { buildEnvironment } from './build-environment';
console.log('buildEnvironment', buildEnvironment);

const backendHost = buildEnvironment?.GRAPHQL_URI || 'localhost';

export const environment = {
  production: true,
  uri: `http://${backendHost}:5000/graphql`,
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
    DATABASE_URL: 'postgres://postgres:admin@localhost:5432/awread_app',
    SCHEMA: buildEnvironment?.SCHEMA || 'public'
  },
};
