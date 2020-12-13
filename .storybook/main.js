const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  stories: [],
  addons: ['@storybook/addon-knobs/register'],
  // your Storybook configuration
  refs: {
    'design-system': {
      title: 'Design System',
      url: 'http://localhost:4495',
    },
  },
  webpackFinal: (config, { configType }) => {
    const tailwindConfig = require("../tailwind.config.js")(configType === 'PRODUCTION');
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
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
    });
    // config['stats'] = {
    //   all: false
    // }
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /postcss-import/
      })
    );

    // Return the altered config
    return config;
  },
};
