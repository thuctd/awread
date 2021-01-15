/* eslint-disable no-undef */
const backendGraphqlHost = process.env?.GRAPHQL_URI ? `http://${process.env?.GRAPHQL_URI}:5000` : 'http://localhost:5000';
// eslint-disable-next-line no-undef
module.exports = [
  {
    context: [
      "/graphql"
    ],
    "target": backendGraphqlHost,
    "logLevel": process.env?.ENVIRONMENT === 'prod' ? "info" : "debug",
    "secure": true,
    // pathRewrite value to the proxy configuration to remove "api" from the end of a path.
    // "pathRewrite": {
    //   "^/graphql": ""
    // }
  }
]