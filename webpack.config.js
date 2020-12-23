const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

module.exports = (config) => {
  const merge = webpackMerge && webpackMerge.merge ? webpackMerge.merge : webpackMerge;
  const isProd = config.mode === "production";
  const tailwindConfig = require("./tailwind.config.js")(isProd);
  // console.log('tailwind config?', config);
  return merge(config, {
    plugins: [
      new webpack.DefinePlugin({
        __ISSTORYBOOK__: false
      })
    ],
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
                require('autoprefixer')
              ]
            }
          }
        }
      ]
    }
  });
};
