
interface ENV {
    ENVIRONMENT: string;
    GRAPHQL_URI: string;
    DATABASE_URL: string;
    SCHEMA: string;
}

// this $ENV is direct import from webpack.config.js
declare const $ENV: ENV;

export const buildEnvironment = $ENV;