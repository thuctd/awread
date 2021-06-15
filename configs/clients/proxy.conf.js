/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// https://backend-graphql.awread.vn
let graphql = process.env.GRAPHQL_URL ?? 'http://backend-graphql.web.1';
let api = process.env.API_URL ?? 'http://backend-graphql.web.1';
let logLevel = 'info';

switch (true) {
    case process.env.ENVIRONMENT == 'production':
        break;
    case process.env.ENVIRONMENT == 'next':
        break;
    case process.env.ENVIRONMENT == 'test':
        break;
    case process.env.ENVIRONMENT == 'local':
        graphql = 'http://localhost:5000';
        api = 'http://localhost:3333';
        logLevel = 'debug';
        console.log('local');
        break;
    default:
        graphql = 'https://backend-graphql.next.awread.vn';
        api = 'https://backend-api.next.awread.vn';
        logLevel = 'debug';
        console.log('default');
        break;
}


console.log(`
process.env.ENVIRONMENT == 'production': (${process.env.ENVIRONMENT == 'production'}) (${process.env.ENVIRONMENT})
process.env.ENVIRONMENT == 'next': (${process.env.ENVIRONMENT == 'next'}) (${process.env.ENVIRONMENT})
process.env.ENVIRONMENT == 'test': (${process.env.ENVIRONMENT == 'test'}) (${process.env.ENVIRONMENT})
process.env.ENVIRONMENT == 'local': (${process.env.ENVIRONMENT == 'local'}) (${process.env.ENVIRONMENT})
`)

console.log(`
process.env.ENVIRONMENT (${process.env.ENVIRONMENT})
graphql(${graphql})
api(${api})
`)

// https://angular.io/guide/build
// .For example, you can specify the following pathRewrite value to the proxy configuration to remove "api" from the end of a path.
const list = [
    {
        context: [
            `/graphql`,
        ],
        "target": graphql,
        "logLevel": logLevel,
        "secure": false, // because we using http not https
        "changeOrigin": true, // because we not using the same origin
    },
    {
        context: [
            `/api`,
        ],
        "target": api,
        "logLevel": logLevel,
        "secure": false, // because we using http not https
        "changeOrigin": true, // because we not using the same origin
    }
];

module.exports = list;