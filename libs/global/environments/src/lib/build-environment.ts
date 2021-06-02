
interface ENV {
    ENVIRONMENT: undefined | string;
    GRAPHQL_URI: undefined | string;
    DATABASE: undefined | string;
}

// this $ENV is direct import from webpack.config.js
declare const process: { env: ENV };
let env: ENV = {
    ENVIRONMENT: undefined,
    GRAPHQL_URI: undefined,
    DATABASE: undefined,
};
try {
    env = {
        ENVIRONMENT: process.env.ENVIRONMENT ?? 'development',
        GRAPHQL_URI: process.env.GRAPHQL_URI ?? 'https://backend-graphql.awread.vn',
        DATABASE: process.env.DATABASE,
    };
} catch (error) {
    console.log();
}
// export const buildEnvironment = $ENV;
export const buildEnvironment = env;