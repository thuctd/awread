/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// https://backend-graphql.awread.vn
let graphql = process.env.GRAPHQL_URL ?? 'http://backend-graphql.web.1';
let api = process.env.API_URL ?? 'http://backend-graphql.web.1';
let plausible = process.env.PLAUSIBLE_URL ?? 'http://plausible.web.1';
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
plausible(${plausible})
`)

// console.log(`env: ENVIRONMENT (${process.env.ENVIRONMENT}), api (${process.env.API_URI}), graphql (${process.env.GRAPHQL_URI})`);

module.exports = [
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
    },
    {
        context: [
            `/plausible`,
        ],
        "target": plausible,
        "logLevel": logLevel,
        "secure": false, // because we using http not https
        "changeOrigin": true, // because we not using the same origin
    },
]