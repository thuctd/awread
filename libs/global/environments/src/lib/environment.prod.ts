console.log('$ENV.GRAPHQL_URI', $ENV.GRAPHQL_URI)
export const environment = {
  production: true,
  uri: $ENV?.GRAPHQL_URI,
  firebase: {
    apiKey: 'AIzaSyBYIoCiXcDM4lRoLAVUK4WGAwC9hORR0ow',
    authDomain: 'awready-beta.firebaseapp.com',
    databaseURL: 'https://awready-beta.firebaseio.com',
    projectId: 'awready-beta',
    storageBucket: 'awready-beta.appspot.com',
    messagingSenderId: '158126895088',
    appId: '1:158126895088:web:070f0e8433ec012b0a3735',
  },
  graphql: {
    host: 'localhost',
    port: '5432',
    db_name: 'awread_app',
    schema: 'public',
    username: 'postgres',
    password: 'admin',
  },
};
