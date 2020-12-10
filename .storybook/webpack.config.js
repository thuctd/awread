/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */

// module.exports = async ({ config, mode }) => {
//   // Make whatever fine-grained changes you need
//   // Return the altered config
//   console.log('storybook return', config);
//   return config;
// };

// solution 2
const webpackMerge = require('webpack-merge');
// const myWebpackConfig = require('../webpack.config');

module.exports = async ({ config, mode }) => {
  
  const merge = webpackMerge && webpackMerge.merge ? webpackMerge.merge : webpackMerge;
  const isProd = config.mode === "production";
  const tailwindConfig = require("../tailwind.config.js")(isProd);
  const mergeResult =  merge(config, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss')(tailwindConfig),
                require('autoprefixer'),
              ]
            }
          }
        }
      ]
    }
  });
  return mergeResult;
   // not possible
  // console.log('storybook=======================');
  // const myConfig = await myWebpackConfig(config);
  // const mergeResult = merge(config, myConfig);
};