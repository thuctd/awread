const { patchPostCSS } = require('./patchPostCSS');
const webpack = require('webpack');

module.exports = (config) => {
  const isProd = config.mode === 'production';
  const tailwindConfig = require('./tailwind.config.js')(isProd);
  patchPostCSS(config, tailwindConfig, true);

  config.plugins.push(
    new webpack.DefinePlugin({
      __ISSTORYBOOK__: false,
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        GRAPHQL_URI: JSON.stringify(process.env.GRAPHQL_URI),
      },
      loaders: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: '@graphql-tools/webpack-loader',
        },
      ],
    })
  );

  return config;
};
