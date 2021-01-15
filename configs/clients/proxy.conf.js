/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const backendGraphqlHost = process.env?.GRAPHQL_URI ? `https://${process.env?.GRAPHQL_URI}` : 'http://localhost:5000';
module.exports = [
    {
        context: [
            "/graphql"
        ],
        "target": backendGraphqlHost,
        "logLevel": process.env?.ENVIRONMENT === 'prod' ? "info" : "debug",
        "secure": true,
        "changeOrigin": true,
        // pathRewrite value to the proxy configuration to remove "graphql" from the end of a path.
        "pathRewrite": {
            "^/graphql": ""
        }
    }
]


// var HttpsProxyAgent = require('https-proxy-agent');


// const backendGraphqlHost = process.env?.GRAPHQL_URI ? `http://${process.env?.GRAPHQL_URI}` : 'http://localhost:5000';
// const proxyServer = process.env?.GRAPHQL_URI ? `http://${process.env?.GRAPHQL_URI}` : null;
// var proxyConfig = [{
//   // context: '/api',
//   // target: 'http://your-remote-server.com:3000',
//   // secure: false
//   context: '/graphql',
//   "target": backendGraphqlHost,
//   "logLevel": process.env?.ENVIRONMENT === 'prod' ? "info" : "debug",
//   "secure": true,
// }];


// function setupForCorporateProxy(proxyConfig) {
//   // var proxyServer =  process.env?.GRAPHQL_URI;
//   if (proxyServer) {
//     var agent = new HttpsProxyAgent(proxyServer);
//     console.log('Using corporate proxy server: ' + proxyServer);
//     proxyConfig.forEach(function (entry) {
//       entry.agent = agent;
//     });
//   }
//   return proxyConfig;
// }

// module.exports = setupForCorporateProxy(proxyConfig);