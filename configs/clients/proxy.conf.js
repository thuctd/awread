/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
let graphqlTarget;
let apiTarget;
let logLevel;
switch (true) {
    case process.env.ENVIRONMENT == 'production':
        graphqlTarget = process.env.GRAPHQL_URI ?? 'https://backend-graphql.awread.vn';
        apiTarget = process.env.API_URI ?? 'https://backend-api.awread.vn';
        logLevel = 'info';
        break;
    case process.env.ENVIRONMENT == 'next':
        graphqlTarget = process.env.GRAPHQL_URI ?? 'https://backend-graphql.next.awread.vn';
        apiTarget = process.env.API_URI ?? 'https://backend-api.next.awread.vn';
        logLevel = 'info';
        break;
    case process.env.ENVIRONMENT == 'test':
        graphqlTarget = process.env.GRAPHQL_URI ?? 'https://backend-graphql.next.awread.vn';
        apiTarget = process.env.API_URI ?? 'https://backend-api.next.awread.vn';
        logLevel = 'debug';
        console.log('test');
        break;
    case process.env.ENVIRONMENT == 'local':
        graphqlTarget = process.env.GRAPHQL_URI ?? 'http://localhost:5000';
        apiTarget = process.env.API_URI ?? 'http://localhost:3333';
        logLevel = 'debug';
        console.log('local');
        break;
    default:
        graphqlTarget = process.env.GRAPHQL_URI ?? 'https://backend-graphql.next.awread.vn';
        apiTarget = process.env.API_URI ?? 'https://backend-api.next.awread.vn';
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
graphqlTarget (${graphqlTarget})
apiTarget (${apiTarget})
`)

// console.log(`env: ENVIRONMENT (${process.env.ENVIRONMENT}), api (${process.env.API_URI}), graphql (${process.env.GRAPHQL_URI})`);

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