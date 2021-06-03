/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
let graphqlTarget;
let apiTarget;
let logLevel;
switch (process.env) {
    case process.env.NODE_ENV == 'production':
        graphqlTarget = 'http://backend-graphql.web';
        apiTarget = 'http://backend-api.web';
        logLevel = 'info';
        break;
    case process.env.NODE_ENV == 'next':
        graphqlTarget = 'http://backend-graphql.web';
        apiTarget = 'http://backend-api.web';
        logLevel = 'info';
        break;
    case process.env.NODE_ENV == 'test':
        graphqlTarget = 'http://backend-graphql.web';
        apiTarget = 'http://backend-api.web';
        logLevel = 'debug';
        break;
    default:
        graphqlTarget = 'https://backend-graphql.next.awread.vn';
        apiTarget = 'https://backend-api.next.awread.vn';
        logLevel = 'debug';
        break;
}

// console.log('APP: process env', process.env);

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