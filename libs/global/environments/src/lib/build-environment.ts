
interface ENV {
    NODE_ENV: undefined | string;
    GRAPHQL_URI: undefined | string;
    DATABASE: undefined | string;
}

// this $ENV is direct import from webpack.config.js
declare const process: { env: ENV };
let env: ENV = {
    NODE_ENV: undefined,
    GRAPHQL_URI: undefined,
    DATABASE: undefined,
};
try {
    env = {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        GRAPHQL_URI: process.env.GRAPHQL_URI ?? 'https://backend-graphql.next.awread.vn',
        DATABASE: process.env.DATABASE,
    };
} catch (error) {
    console.log();
}
// export const buildEnvironment = $ENV;
export const buildEnvironment = env;