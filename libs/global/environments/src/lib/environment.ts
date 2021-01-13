import { buildEnvironment } from './build-environment';
console.log('buildEnvironment', buildEnvironment);

export const environment = {
  production: false,
  uri: 'http://localhost:5000/graphql',
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
    DB_URL: 'postgres://postgres:admin@localhost:5432/awread_app',
    SCHEMA: 'public'
  },
};
