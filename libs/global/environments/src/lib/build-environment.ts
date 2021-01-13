
interface ENV {
    ENVIRONMENT: undefined | string;
    GRAPHQL_URI: undefined | string;
    SCHEMA: undefined | string;
}

// this $ENV is direct import from webpack.config.js
declare const $ENV: ENV;

export const buildEnvironment = $ENV;