const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: [
    // this stories coming from libs/wrirter/web/ui-auth
    '@libs/global/design-system/src/lib/**/*.stories.mdx',
    '@libs/global/design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-knobs', '@storybook/addon-actions'],
  // your Storybook configuration
  // refs: {
  //   'design-system': {
  //     title: 'Design System',
  //     url: 'http://localhost:4400',
  //   },
  // },

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

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /postcss-import/
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      "@libs": path.resolve(__dirname, "../libs"),
    };


    return config;

  },
};
