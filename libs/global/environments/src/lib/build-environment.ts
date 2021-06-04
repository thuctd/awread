
interface ENV {
    ENVIRONMENT: undefined | string;
}

// this $ENV is direct import from webpack.config.js
declare const process: { env: ENV };
let env: ENV = {
    ENVIRONMENT: undefined,
};
try {
    env = {
        //NOTE: ok, fuck the nx code, what the fucking thhey are trying to do https://stackoverflow.com/a/66398118/5992468
        // https://github.com/nrwl/nx/blob/11.4.0/packages/web/src/utils/config.ts#L201
        // NODE_ENV: process.env['NODE' + '_ENV'] ?? 'development',
        ENVIRONMENT: process.env.ENVIRONMENT ?? 'development',
    };
} catch (error) {
    console.log();
}
export const buildEnvironment = env;