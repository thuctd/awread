/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
let graphqlTarget;
let apiTarget;
let logLevel;
switch (process.env) {
    case process.env.ENVIRONMENT == 'production':
        graphqlTarget = process.env.GRAPHQL_URI;
        apiTarget = process.env.API_URI;
        logLevel = 'info';
        break;
    case process.env.ENVIRONMENT == 'next':
        graphqlTarget = process.env.GRAPHQL_URI;
        apiTarget = process.env.API_URI;
        logLevel = 'info';
        break;
    case process.env.ENVIRONMENT == 'test':
        graphqlTarget = process.env.GRAPHQL_URI;
        apiTarget = process.env.API_URI;
        logLevel = 'debug';
        break;
    default:
        graphqlTarget = 'https://backend-graphql.awread.vn';
        apiTarget = 'https://backend-api.awread.vn';
        logLevel = 'debug';
        break;
}

module.exports = [
    {
        context: [
            `/graphql`,
        ],
        "target": graphqlTarget,
        "logLevel": logLevel,
        "secure": false, // because we using http not https
        "changeOrigin": true, // because we not using the same origin
    },
    {
        context: [
            `/api`,
        ],
        "target": apiTarget,
        "logLevel": logLevel,
        "secure": false, // because we using http not https
        "changeOrigin": true, // because we not using the same origin
    },
]